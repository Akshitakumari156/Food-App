import React from 'react'
import Cardfood from '../card/cardfood'
import Homecard from '../Card/Homecard'
import Detail from '../Card/Detail'
import NavMenu from '../Card/NavMenu'
import Chef from '../Card/Chef'
function Homepage() {
  return (
    <>
    <div className="overflow-x-hidden">
        <div className="overflow-x-auto w-screen">
          <Cardfood />
          <Homecard />
          <NavMenu/>
          <Chef/>
          <Detail/>
        </div>
    </div>
    </>
  )
}

export default Homepage
