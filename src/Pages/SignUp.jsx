import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UseStateContext } from '../Context/AppContext';

const SignUp = () => {

  const [fireBaseError, setFireBaseError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const navigate = useNavigate();

  const {allState : {signUp}} = UseStateContext()

  const passwordValidation = {
    required: true,
    minLength: {value: 6, message: "Password length should be 6"}
  }

  const emailValidation = {
    required: true,
    pattern: { value: /[\w.]+@\w+\.[\w.]+/ , message: "Enter Valid Email" }
  }

  const onSubmit = async(userInfo) => { 
     setFireBaseError("")
     try {
        await signUp(userInfo.email, userInfo.password);
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
        <div className='p-12 absolute z-10 w-[40%] h-[70%] top-[15%] left-[30%] mx-auto  bg-black/60  text-white'>
            <p className='text-3xl font-bold text-center'>Sign Up</p>
            {fireBaseError && <p className='text-red-700 font-bold'>{fireBaseError}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='Email' {...register("email", emailValidation)}
            className='bg-gray-600 rounded p-3 w-full focus:outline-none '/>
             {errors?.email?.message && <span className='text-red-700 font-bold'>{errors?.email?.message}</span>}
           
            <input type="password" placeholder='Password' {...register("password",passwordValidation)}
            className='bg-gray-600 rounded p-3 w-full focus:outline-none mt-4'/>
             {errors?.password?.message && <span className='text-red-700 font-bold'>{errors?.password?.message}</span>}

            <button type='submit'  className='w-full text-white bg-red-700 px-6 py-3 rounded my-4'>Sign Up</button>
            </form>
            <p className='text-center'><span className='text-gray-500'>Already member? </span><Link to={"/login"} > <span className='font-bold'>Sign In</span> </Link></p>
        </div>
      </div>
      </div>  
    </>
  )
}

export default SignUp
