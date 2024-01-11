import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../../utils/movieSlice";




const useUpcomingMovies=()=>{
    //fetch data from tmdb api and update the store
const dispatch=useDispatch();
const getUpcomingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
  const json=await data.json();
  
  dispatch(addUpcomingMovies(json.results));
  //connect it to movieslice
};
useEffect(()=>{
  getUpcomingMovies();

},[]);
}
export default  useUpcomingMovies;