import React from 'react'
import Main from '../Components/Main'
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Main/>

      <Outlet/>
    </>
  )
}

export default Home
