import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Menupage from './Components/Menupage'
import Cartpage from './Components/Cartpage'
import Loginpage from './Components/Loginpage'
import Layoutpage from './Components/Layoutpage'
import Contactus from './Components/Contactus'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layoutpage/>}>
         <Route path="/Home" element={<Homepage/> }/>
         <Route path="/Menu" element={<Menupage/>}/>
         <Route path="/Contact" element={<Contactus/>}/>
         <Route path="/Cart" element={<Cartpage/>}/>
         <Route path="/Login" element={<Loginpage/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
