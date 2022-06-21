import React, { useEffect, useState } from 'react'
import './Card.css';
import AddIcon from '@mui/icons-material/Add';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { UseStateContext } from '../Context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../featuresRedux/accountSlice';


const Card = (props) => {
  
  const {movie} = props
     
    const [checkFavorite, setCheckFavorite] = useState(false)
    
    const { favorite } = useSelector((state) => state.account.value)
    const dispatch = useDispatch();

    const { allState : {playTrailer, user}} = UseStateContext()

    const play = async() => {
        await playTrailer(movie)
    }

    useEffect(() => {
      if(favorite.length > 0) {
        const check = favorite.some((item) => item.id === movie.id)
        setCheckFavorite(check)
      }
      else {
        setCheckFavorite(false)
      }
    },[favorite])

    // let checkFavorite = favorite.length > 1 ? favorite.some((item) => item.id === movie.id) : false

    const handelFavorite = () => {
      if(user?.email) {
        if(checkFavorite) {
          dispatch(removeFavorite(movie))
        }
        else {
          dispatch(addFavorite(movie))
        }
      }
      else {
        alert("Please log In to add")
      }
     
    }
    

  return (
    <>
    
      <div className="inline-block p-1 md:w-[30%] lg:w-[20%]">
        <div className="card">
            <img className='' src={movie.backdrop_path?  `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` : `https://wallpaperaccess.com/full/2772922.png`} alt='image'/>
            <div className="descriptions h-full w-full">
                <h4 className='font-bold'>{movie?.title || movie?.original_title || movie?.name}</h4>
                <button onClick={play} className='px-4 py-2 mr-6'>
                    Play trailer 
                </button>
                {checkFavorite?  <PlaylistRemoveIcon onClick={handelFavorite}  fontSize="large" className='my-4'/> : 
                  <AddIcon onClick={handelFavorite}  fontSize="large" className='my-4'/>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
