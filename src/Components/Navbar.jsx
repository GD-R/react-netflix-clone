import React from 'react'
import SearchInput from './SearchInput'
import { Link, useNavigate } from "react-router-dom";
import { UseStateContext } from '../Context/AppContext';


const Navbar = () => {

  const {allState : {user, logOut}} = UseStateContext();

  const navigate = useNavigate();

  const userLogOut = async() => {
       try {
         await logOut();
         navigate("/")
       }
       catch(error) {
        console.log(error.message)
       }
  }

  return (
    <div className='absolute w-full flex justify-between md:justify-between py-5 px-2 md:px-5 z-[100]'>
    <Link to={"/"}>
      <h1 className='text-3xl text-red-700 font-extrabold '>NETFLIX</h1></Link>
      <div className='flex'>
      
       <SearchInput />
       { user?.email ?
        
        (<div>
        <Link to={"/account"} >
        <button className='text-white px-6 py-2 mr-4 hover:border hover:rounded-md font-semibold'>Account</button>
        </Link>
        <button onClick={userLogOut} className='text-white px-6 py-2 bg-red-700 rounded-md hover:bg-red-600 hover:text-black font-semibold'>Log Out</button>
        </div>)

       :
        
       ( <div>
       <Link to={"/login"} >
        <button className='text-white px-6 py-2 mr-4 hover:border hover:rounded-md font-semibold'>Sign In</button></Link>
        <Link to={"/signUp"} >
        <button className='text-white px-6 py-2 bg-red-700 rounded-md hover:bg-red-600 hover:text-black font-semibold'>Sign Up</button>
        </Link>
        </div>)
         }
      
      </div>
    </div>
  )
}

export default Navbar
