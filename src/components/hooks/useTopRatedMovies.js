import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../../utils/movieSlice";



const useTopRatedMovies=()=>{
    //fetch data from tmdb api and update the store
const dispatch=useDispatch();
const getTopRatedMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const json=await data.json();
  
  dispatch(addTopRatedMovies(json.results));
  //connect it to movieslice
};
useEffect(()=>{
  getTopRatedMovies();

},[]);
}
export default  useTopRatedMovies;