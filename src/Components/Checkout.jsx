import React from 'react'
import CartTotal from '../Card/CartTotal'
import { useLocation } from 'react-router-dom';
function Checkout() {
  const location = useLocation();
  console.log("received cost",location.state);
  const totalcost = location.state?.totalcost||0;
  console.log("Extracted totalCost in Checkout:", totalcost);
  return (
    <>
     <div className='flex border h-[80vh] mt-4 justify-between '>
        <div className='border mt-15 ml-12 pl-12 pr-14 h-fit pb-4 pt-2'>
           <p className='font-extrabold text-4xl font-serif'>Delivery Information</p>
           <div className='flex gap-0.5 mt-4'>
               <input type="text" className=' p-2 rounded-xl w-2xs border border-gray-600' placeholder='First name'/>
               <input type="text" className='p-2 rounded-xl w-2xs border border-gray-600'placeholder='Last name' />
           </div>
           <div className='mt-3'>
                <input type="text"  className=' p-2 rounded-xl w-[36.2rem] border border-gray-600' placeholder='Email address' />
           </div>
           <div className='mt-3'>
                <input type="text"  className=' p-2 rounded-xl w-[36.2rem] border border-gray-600' placeholder='Street' />
           </div>
           <div className='flex gap-0.5 mt-3'>
               <input type="text" className=' p-2 rounded-xl w-2xs border border-gray-600' placeholder='City'/>
               <input type="text" className='p-2 rounded-xl w-2xs border border-gray-600'placeholder='State' />
           </div>
           <div className='flex gap-0.5 mt-3'>
               <input type="text" className=' p-2 rounded-xl w-2xs border border-gray-600' placeholder='Zip Code'/>
               <input type="text" className='p-2 rounded-xl w-2xs border border-gray-600'placeholder='Country' />
           </div>
           <div className='mt-3'>
                <input type="text"  className=' p-2 rounded-xl w-[36.2rem] border border-gray-600' placeholder='Phone' />
           </div>
        </div>
        <div className='border mt-15 h-fit mr-15 pl-12 w-xl pb-4 pt-2'>
           <CartTotal totalcost={totalcost}/>
        </div>
     </div>
    </>
  )
}

export default Checkout
