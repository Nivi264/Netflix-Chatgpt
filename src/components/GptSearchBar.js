import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'

import openai from  '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import {addGptMovieResult} from "../utils/gptSlice";





const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang);
  const searchText=useRef(null);
  const dispatch=useDispatch();
  //this will do a search movie in TMDB
  const searchMovieTMDB=async(movie)=>{
    const data =await fetch('https://api.themoviedb.org/3/search/movie?query=' +movie+ '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    return json.results;
    
  }
  const handleGptSearchClck=async()=>{
    console.log(searchText.current.value);
    //make an API call to gpt api and get movie results
    const gptQuery="Act as a movie recommendation system and suggest some movies for the query :" +searchText.current.value +".only give me names of 5 movies,comma separated like the example result given ahead.Example Result:Gadar,Don,12th Fail,Dilbechara,Hanuman";
    
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
      //for each movie i will search TMDB API
      const promiseArray=gptMovies.map((movie)=> searchMovieTMDB(movie));
      
      //map function will do 5 api calls at a time and will not wait for the result it only gives array of promises;
      //**watch promise in namaste java script */ 
      //for each movie above we are caling searchmovie tmdb api
      // we cannot get results because it is async function
      const tmdbResults=await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
      
  }
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className='  bg-black w-1/2 grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type ='text' className='p-4 m-4 col-span-9 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3  'onClick={handleGptSearchClck} >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar