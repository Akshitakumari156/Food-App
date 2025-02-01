import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavMenu() {
  const navigate=useNavigate();
  function redirect(){
    navigate("/Menu")
  }
  return (
    <div className='relative h-screen bg-cover rotate-x-180' style={{backgroundImage:"url('/Background/background.png')"}}>
      <h1 className='font-extrabold font-serif absolute top-3/4 text-4xl right-1/4 left-1/4 rotate-x-180 '>THE FOOD TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY</h1>
      <p className='rotate-x-180 font-medium font-sans absolute top-3/5 right-1/5 pt-2 left-1/4 text-lg '>There's something magical about sharing a meal with loved ones. The laughter, the stories, and the togetherness make every bite more special. Whether it's a hearty dinner or a quick snack, family meals create memories that last a lifetime.</p>
      <button onClick={redirect} className='ml-96  top-4/8 rounded-full text-xl font-bold text-white bg-amber-600 cursor-pointer absolute p-3 rotate-x-180 '>View Menu</button>
    </div>
  )
}

export default NavMenu
