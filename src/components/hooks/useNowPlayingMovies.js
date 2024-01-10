import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{
    //fetch data from tmdb api and update the store
const dispatch=useDispatch();
const getNowPlayingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  const json=await data.json();
  
  dispatch(addNowPlayingMovies(json.results));
  //connect it to movieslice
};
useEffect(()=>{
  getNowPlayingMovies();

},[]);
};
export default useNowPlayingMovies;