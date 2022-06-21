import React from 'react'
import YouTube from 'react-youtube';
import Row from '../Components/Row';
import ApiRequest from '../Api/movieApi';
import { UseStateContext } from '../Context/AppContext';

const MovieSection = () => {

  const { allState : {showTrailer, closeTrailer}} = UseStateContext()
  

  const opts = {
    height: '400',
    width: '640',
    
  };

   


  return (
    <div className='my-6 relative'>
     { showTrailer.open && <div className='absolute w-[40%] h-[40%] right-[30%] top-[10%] z-50'>
     <button className='text-red-700 bg-black px-2' onClick={closeTrailer}>Close</button>
    <div className='w-full h-full'>
    <YouTube videoId={showTrailer.id} opts={opts} />
    </div>
      </div>}
      <Row rowId="1" title={"PopularMovie"} fetchResults={ApiRequest.fetchPopularMovie} />
      <Row rowId="2" title={"TopMovie"} fetchResults={ApiRequest.fetchTopMovie} />
      <Row rowId="3" title={"UpComingMovie"} fetchResults={ApiRequest.fetchUpComingMovie} />
    
    </div>
  )
}

export default MovieSection
