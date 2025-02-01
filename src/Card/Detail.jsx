import React from 'react'
import Helpcard from './Helpcard'
function Detail() {
  return (
    <div className='flex h-[205px] justify-evenly w-screen  bg-yellow-100'>
     <Helpcard image="logo1" />
     <Helpcard username="QUALITY FOOD" image="logo2" data="Every bite tells a story of freshness, care, and premium ingredients. We deliver meals that delight your taste buds and nourish your body."/>
     <Helpcard username="FASTEST DELIVERY" image="logo3" data="Get your favorite meals delivered at lightning speed. We promise hot, fresh, and delicious food in record time, right to your doorstep."/>
    </div>
  )
}

export default Detail
