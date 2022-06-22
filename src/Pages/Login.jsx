import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UseStateContext } from '../Context/AppContext';



const Login = () => {

  const [fireBaseError, setFireBaseError] = useState("")

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const {allState : {logIn}} = UseStateContext()

  const onSubmit = async(userInfo) => { 
    setFireBaseError("")
    try {
       await logIn(userInfo.email, userInfo.password);
       navigate("/")
    }
    catch (error) {
     setFireBaseError(error.message)
    }
  }

  return (
    <>
      <div className='w-full h-full'>
      <div className=''>
        <img className='absolute w-screen h-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="image" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
        <div className='p-12 absolute z-10 w-[70%] md:w-[40%] md:h-[70%] top-[15%] left-[30%] mx-auto  bg-black/60  text-white'>
            <p className='text-3xl font-bold text-center'>Sign In</p>
            {fireBaseError && <p className='text-red-700 font-bold'>{fireBaseError}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='Email' {...register("email", { required: true })}
            className='bg-gray-600 rounded p-3 w-full focus:outline-none my-4'/>
            <input type="password" placeholder='Password' {...register("password", { required: true })}
            className='bg-gray-600 rounded p-3 w-full focus:outline-none'/>
            <button type='submit'  className='w-full text-white bg-red-700 px-6 py-3 rounded my-4'>Sign In</button>
            </form>
            <p className='text-center'><span className='text-gray-500'>New to Netflix? </span><Link to={"/signUp"} > <span className='font-bold'>Sign Up</span> </Link></p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login
