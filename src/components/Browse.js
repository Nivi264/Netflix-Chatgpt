import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      Main container
        -video background
        -video title
      Secondary container
        -Movie list*n
        -cards *n
      */}
    </div>
  )
}

export default Browse