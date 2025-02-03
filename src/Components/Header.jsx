import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const BulbContext=createContext();

function BulbProvider({children}){
  const[bulbon,setBulbon]=useState(false);
  return(
    <BulbContext.Provider value={{ bulbon, setBulbon }}>
     {children}
    </BulbContext.Provider>
  )
}

function Togglestate(){
   const {bulbon,setBulbon}=useContext(BulbContext);
   return(
    <>
    <img className="h-10 w-10 ml-3 mt-10" onClick={()=>(setBulbon(!bulbon))} src={bulbon ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy1kulKGFspFD5skFeQ_G9RzsJZ4pmAEmnQ&s":"https://static.thenounproject.com/png/2856481-200.png"}/>
    </>
   )
}

function Inputbox(){
  return(
    <>
    <input  type="text" className="border-black mt-8 gap-0.5 border rounded-md p-4 h-5 w-60" placeholder='Type to search here'/>
    </>
  )
}

function GenerateBox(){
  const[input,SetInput]=useState(false);
  return(
    <>
    {input && (<Inputbox/>)}
    <img onClick={()=>(SetInput(!input))} className="h-20 w-20 cursor-pointer flex-shrink-0 mt-2 p-1"src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg" />
    </>
  )
}




function Navbar() {
  const {bulbon,setBulbon}=useContext(BulbContext);

  return (
    <>
    <nav className="flex h-25 justify-between items-center">
    <div className="text-2xl ml-4"> 
       <img className="w-48 h-40 p-0"src="https://images.scalebranding.com/food-delivery-logo-9a5d6775-0255-4c00-932d-e6bc4feab15f.jpg"/>
    </div>
    <div className="p-10 space-x-16 text-xl mr-4">
        <Link className="hover:underline cursor"to="/Home">Home</Link>
        <Link className="hover:underline cursor" to="/Menu">Menu</Link>
        <Link className="hover:underline cursor" to="/Contact">Contact Us</Link>
    </div>
    <div  id="hello2"class="text-xl flex  gap-5 -mt-3">
      <div className="flex mt-4">
      <GenerateBox/>
      </div>
      <div id="hello" className='flex -ml-4 pr-7'>
      <Togglestate/>
      <Link to="/Checkout"><img  src="https://static.vecteezy.com/system/resources/previews/015/506/482/non_2x/food-delivery-logo-design-fast-delivery-service-sign-delivery-logo-online-food-ordering-restaurant-vector.jpg" className='h-30 w-32' /></Link>
      <Link className="mt-10 mr=10 hover:underline cursor" to="Login"><img src="/LOGO/login.png" className='h-10 w-10'/></Link>
      </div>
    </div>
    
</nav>
    </>
  )
}

function Header(){
  return(
    <BulbProvider>
      <Navbar/>
    </BulbProvider>
  )
}

export default Header
