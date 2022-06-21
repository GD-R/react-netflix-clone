import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ApiRequest from '../Api/movieApi';
import { UseStateContext } from '../Context/AppContext';

const SearchInput = () => {

  const location = useLocation();
  const routeArray = ["/account" , "/login" , "/signUp" ]
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  
  const { allState : {setSearchResults}} = UseStateContext()

  useEffect(() => {
     const callApi = async() => {
        const response = await fetch(`${ApiRequest.fetchSearch}&query=${search}`);
        const { results } = await response.json();
        setSearchResults(results);
     }
     if(search.length > 1){
      callApi();
     }
  },[search])

  const handelSearch = (event) => {
    setSearch(event.target.value);
    if(event.target.value.length < 1) {
      navigate("/")  
     }
     else {
      navigate("/search")    
     }
  }

  return (

    <>
   { routeArray.includes(location.pathname) ?
   null :
   <div  className="relative mr-2">
        <input type="search" value={search} onChange={handelSearch}
              className="peer cursor-pointer relative z-10 h-10 w-5 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4  text-white font-bold" />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      }
  

  
     
   


  
  

    </>
  )
}

export default SearchInput
