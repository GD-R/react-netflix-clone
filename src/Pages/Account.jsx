import React from "react";
import { useSelector } from "react-redux";
import YouTube from 'react-youtube';
import AccountCard from "../Components/AccountCard";
import { UseStateContext } from "../Context/AppContext";

const Account = () => {

 const { favorite } = useSelector((state) => state.account.value)

 const { allState : {showTrailer, closeTrailer}} = UseStateContext()
  

 const opts = {
   height: '400',
   width: '640',
   
 };

  
   
  return (
    <>
    <div className="absolute w-[90%] top-[20%] left-[5%] ">
    
    <div className="relative">

    { showTrailer.open && <div className='absolute w-[40%] h-[40%] right-[30%] top-[10%] z-50'>
     <button className='text-red-700 bg-black px-2' onClick={closeTrailer}>Close</button>
    <div className='w-full h-full'>
    <YouTube videoId={showTrailer.id} opts={opts} />
    </div>
      </div>}

      </div>

     { favorite.length < 1  ?
       <p className="text-white font-extrabold text-center">No Favorites Added</p> :
       <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          favorite.map((item) => {
            return(<AccountCard item={item} key={item.id}/>)
          })
        }

      </div>
     
      }
     
      
    </div>
    </>
  );
};

export default Account;
