import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return( movies.nowPlayingMovies && (
    <div className=' bg-black '>
      <div className='mt-0 md:-mt-52 pl-4 relative z-20 md:pl-12'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
        <MovieList title={"Trending"} movies={movies.topRatedMovies}/> 
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/> 
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/> 
        <MovieList title={"Horror"} movies={movies.popularMovies}/> 
      </div>
      
      
      {/*
        above nowplaying movies is from movieslice.js
        -Movielist-popular
          -Moviecards*n
        Movielist -Nowplaying
        Movielist-Trending
        Movielit-horror
       */ }
    </div>
  )
  )
}

export default SecondaryContainer