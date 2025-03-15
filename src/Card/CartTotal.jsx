import React from 'react'

function CartTotal({totalcost}) {
    console.log("I have received the cost of",totalcost);
  return (
    <>
    <div className='font-extrabold text-4xl font-serif'>
        Cart Totals
    </div>
    <div className='mt-10 flex justify-between'>
        <p className='font-normal text-[1rem]'>Subtotal</p>
        <p className='mr-8 font-mono text-xl'>₹{totalcost}</p>
    </div>
    <div className='mt-3 flex justify-between'>
        <p className='font-normal text-[1rem]'>Delivery Fee</p>
        <p className='mr-8 font-mono text-xl'>₹20</p>
    </div>
    <div className='mt-6 flex justify-between'>
        <p className='font-medium text-[1rem]'>Total</p>
        <p className='mr-8 font-medium text-xl'>₹{totalcost+20}</p>
    </div>
    </>
  )
}

export default CartTotal
