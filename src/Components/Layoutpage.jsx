import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
function Layoutpage() {
  return (
    <>
    <div >
    <div >
      <Header/>
    </div>
    <div >
      <Outlet/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default Layoutpage
