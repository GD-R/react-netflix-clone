import React from 'react'
import YouTube from 'react-youtube';
import Row from '../Components/Row';
import ApiRequest from '../Api/movieApi';
import { UseStateContext } from '../Context/AppContext';

const TvSection = () => {

  const { allState : {showTrailer, closeTrailer}} = UseStateContext()


  const opts = {
    height: '400',
    width: '640',
    
  };

    


  return (
    <>
     <div className='my-6 relative'>
     { showTrailer.open && <div className='absolute w-[40%] h-[40%] right-[30%] top-[10%] z-50'>
     <button className='text-red-700 bg-black px-2' onClick={closeTrailer}>Close</button>
    <div className='w-full h-full'>
    <YouTube videoId={showTrailer.id} opts={opts} />
    </div>
      </div>}
      <Row rowId="4" title={"PopularSeries"} fetchResults={ApiRequest.fetchPopularTv} />
      <Row rowId="5" title={"TopSeries"} fetchResults={ApiRequest.fetchTopTv} />
      <Row rowId="6" title={"UpComingSeries"} fetchResults={ApiRequest.fetchUpComingTv} />
    
    </div>
    </>
  )
}

export default TvSection
