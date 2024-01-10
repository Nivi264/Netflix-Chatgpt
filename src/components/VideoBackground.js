import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';


const VideoBackground = ({movieId}) => {
  const dispatch= useDispatch()
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    
    //fetch trailer video
    const getMovieVideos=async()=>{

      const data=await     fetch('https://api.themoviedb.org/3/movie/1029575%2C/videos?language=en-US', API_OPTIONS);
        const json=await data.json();
        console.log(json);
        const filterData=json.results.filter(video=>video.type=="Trailer");
        const trailer=filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        //here we will send the trailer to redux store


    }
    useEffect(()=>{
        getMovieVideos();

    },[])
  return (
    <div>
        <iframe
        width="560" height="315" src={"https://www.youtube.com/embed/"+ trailerVideo?.key } title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground