import React from 'react'

function Helpcard(props) {
  return (
    <div className=' mt-4 w-80 h-45 justify-center items-center object-cover'>
      <div className='text-center'>
      <img className="h-20 w-20 mx-auto"src= {`/LOGO/${props.image}.png`} />
      <h3 className='font-bold'>{props.username || "ORIGINAL"}</h3>
      </div>
      <p className='font-serif font-stretch-100% text-center text-xs leading-relaxed'>{props.data || "Experience the taste of originality with every bite. Our meals are crafted from time-honored recipes, using only the finest, freshest ingredients."}</p>
      
    </div>
  )
}

export default Helpcard
