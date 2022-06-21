import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = (props) => {

    const { title, rowId, fetchResults } = props

    const [movies, setMovies] = useState([])

    useEffect(() => {
     const callApi = async() => {
        const response = await fetch(fetchResults);
        const {results} = await response.json();
        setMovies(results)
     }
     callApi();
    },[])

    const sliderLeft = () => {
        const slider = document.getElementById(`slider${rowId}`);
        slider.scrollLeft = slider.scrollLeft - 500;
      }
      
      const slideRight = () => {
        const slider = document.getElementById(`slider${rowId}`);
        slider.scrollLeft = slider.scrollLeft + 500;
      }

  return (
    <>
      <h2 className='text-white font-extrabold my-3 px-4'>{title}</h2>
    <div className='relative flex items-center group'>
    <MdChevronLeft onClick={sliderLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    <div id={`slider${rowId}`} className='row w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
       
     {
        movies.map((movie) => {
            return (<Card movie={movie} key={movie.id} />)
        })
     }

    </div>
    <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row
