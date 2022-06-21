import React from 'react'
import { UseStateContext } from '../Context/AppContext'
import YouTube from 'react-youtube';
import Card from '../Components/Card';

const SearchPage = () => {

  const { allState : {searchResults, showTrailer, closeTrailer}} = UseStateContext()

  const opts = {
    height: '400',
    width: '640',
    
  };

 

  return (
    <div className='m-4 relative'>

{ showTrailer.open && <div className='absolute w-[40%] h-[40%] right-[30%] top-[10%] z-50'>
     <button className='text-red-700 bg-black px-2' onClick={closeTrailer}>Close</button>
    <div className='w-full h-full'>
    <YouTube videoId={showTrailer.id} opts={opts} />
    </div>
      </div>}


    { searchResults.length > 0 ?   
         
        <div className="container flex flex-wrap justify-center ">
         
         { searchResults.map((item) => {
             return(<Card movie={item} key={item.id} />)
         }) }

        </div>  
        
        :

        <p className='text-center text-white font-extrabold'>No Match</p>
        
        
        }

    </div>
  )
}

export default SearchPage
