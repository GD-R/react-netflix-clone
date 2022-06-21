import React from 'react'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import './Card.css';
import { useDispatch } from 'react-redux';
import { UseStateContext } from '../Context/AppContext';
import { removeFavorite } from '../featuresRedux/accountSlice';

const AccountCard = (props) => {
 
    const { item } = props;

    const dispatch = useDispatch();

    const { allState : {playTrailer}} = UseStateContext();

    const play = async() => {
        await playTrailer(item)
    }

    const handelFavorite = () => {
          dispatch(removeFavorite(item))
    }


  return (
    <>
       <div className="inline-block p-1">
          <div className="card">
            <img
              className=""
              src={item.backdrop_path?  `https://image.tmdb.org/t/p/original${item?.backdrop_path}` : `https://wallpaperaccess.com/full/2772922.png`}
              alt="image"
            />
            <div className="descriptions h-full w-full">
              <h4 className="font-bold">{item?.title || item?.original_title || item?.name}</h4>
              <button onClick={play} className="px-4 py-2 mr-6">Play trailer</button>
              <PlaylistRemoveIcon onClick={handelFavorite}  fontSize="large" className='my-4'/>
            </div>
          </div>
        </div>
    </>
  )
}

export default AccountCard
