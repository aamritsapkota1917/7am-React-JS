import React from 'react'
import Footer from './Fotter'
import Header from './Header'
import { Outlet } from 'react-router-dom'


const Layouts = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layouts