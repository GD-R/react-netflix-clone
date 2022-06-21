import React, { useState } from 'react'
import { useEffect } from 'react';
import ApiRequest, { apiKey } from '../Api/movieApi';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import { addFavorite } from '../featuresRedux/accountSlice';
import { UseStateContext } from '../Context/AppContext';

const Main = () => {

  const [banner, setBanner] = useState([]);

  const { allState : {user, showTrailer, playTrailer, closeTrailer}} = UseStateContext()



  const dispatch = useDispatch()
  const { favorite } = useSelector((state) => state.account.value)

  const overviewLength = (str, n) => {
    return str?.length > n ? str.slice(0, n) + "..." : str
  }


  const play = async() => {
    await playTrailer(banner)
}

  const handelFavorite = () => {
    if(user?.email) {
      if(favorite.length < 1){
        dispatch(addFavorite(banner))
       }
       else {
        const check = favorite.some((item) => item.id === banner.id)
        !check && dispatch(addFavorite(banner))
       }
    }
    else {
      alert("Please log In to add")
    }
       
  }


 

 

  useEffect(() => {
    const callApi = async() => {
      const response = await fetch(ApiRequest.fetchTrendingAll);
      const {results} = await response.json();
      const random = Math.floor(Math.random() * results.length - 1);
      setBanner(results[random]);
    }
     callApi();
  },[])

  

  return (
    <>
    <div className='w-full h-[45vh] sm:h-[45vh] md:h-[55vh] lg:h-[75vh]'>
    <div className='w-full h-full relative'>
      <div className='absolute w-full h-[45vh] sm:h-[45vh] md:h-[55vh] lg:h-[75vh] bg-gradient-to-r from-black '></div>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${banner?.backdrop_path}`} alt="image" />
      
     { showTrailer.open && <div className='absolute top-1 sm:left-[10%] lg:left-[19%] md:w-[80%] md:h-[60%] z-50'><YouTube videoId={showTrailer.id}  />
      <button className='text-red-700 font-bold bg-black px-2' onClick={closeTrailer}>Close</button>
      </div>}
      
      <div className='absolute top-[15%] sm:top-[15%] left-[2%] md:left-[3%] lg:left-[2%] md:top-[35%] lg:top-[25%]'>
      
      <p className='text-white text-2xl lg:text-3xl mb-2 md:mb-2 lg:mb-2'>{banner?.title || banner?.original_title || banner?.name}</p>
      <p className='text-gray-300 text-sm mb-1 md:mb-2 lg:mb-2'>Release Date: {banner?.release_date || banner?.first_air_date}</p>
      <p className='text-white w-full md:max-w-[90%] lg:max-w-[70%] text-sm md:text-lg md:mb-3 lg:mb-10'>{overviewLength(banner?.overview, 200)}</p>
      <div>
       <button onClick={play} className='text-white border border-white text-sm px-3 py-1 lg:px-3 lg:py-2 mr-3'>Play</button>
       <button onClick={handelFavorite} className='text-white border-white text-sm px-3 py-1 lg:px-3 lg:py-2 border'>Watch Later</button>
       </div>
      </div>
      </div>
    </div>

    <div className='w-full flex justify-center my-4'>
      
      <div className='px-2'>
      <Link to="/movies" className='text-white'>
       <button className='text-white border  border-red-700 py-2 px-6 hover:bg-red-700 mx-7'>MOVIES</button></Link>
       <Link to="/tv" >
       <button className='text-white border border-red-700 py-2 px-6 hover:bg-red-700'>SERIES</button></Link>
       </div>
      
     </div>
    </>
  )
}

export default Main
