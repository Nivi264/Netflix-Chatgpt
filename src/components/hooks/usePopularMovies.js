import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";



const usePopularMovies=()=>{
    //fetch data from tmdb api and update the store
const dispatch=useDispatch();
const getPopularMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
  const json=await data.json();
  
  dispatch(addPopularMovies(json.results));
  //connect it to movieslice
};
useEffect(()=>{
  getPopularMovies();

},[]);
};
export default usePopularMovies;