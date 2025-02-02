import React, { useEffect } from 'react'
import FoodData from '../Data/Fooddata'

function FoodCard({category,veg,open,setOpen,addtocart}) {
    const FilteredItems=FoodData.filter((item)=>{
    const matchesCategory = category ? item.category === category : true;
    const matchesVeg = veg ? item.Veg === veg : true;
    return matchesCategory && matchesVeg;
    });

  if (!FilteredItems.length) {
    return <div className="text-center text-gray-500">No items found</div>;
  }

  const openCart=(item)=>{
      addtocart(item);
      if(!open){
        open=true;
      }
      setOpen(true);
      console.log(open);
      console.log(item);
  }
  return (
    <div className='grid grid-cols-4 gap-4 p-4 '>
      {FilteredItems.map((item)=>(
        <div key={item.id} className='hover:scale-105 transition-transform rounded-xl shadow-lg border flex flex-col justify-center w-3xs'>
           <div className=' bg-black mt-2  object-fit object-cover flex justify-center '>
           <img src={item.img} className='object-fit h-40 w-60' />
           </div>
           <div className='text-lg font-bold pt-1 pl-2 flex justify-between'>
            {item.name}
            <p className='font-medium text-green-500 pr-2'>₹{item.price}</p>
           </div>
           <div className='pl-2 pt-2 pb-2 text-sm font-normal'>
            {item.desc}
           </div>
           <div className='pl-2 -mt-1 flex pb-1 mb-1'>
            <img src="/star.png" className='h-8' />
            <h2 className='mt-1 font-medium'>{item.rating}</h2>
            <button className='border rounded-xl p-1 font-bold ml-22 text-white hover:bg-green-600 bg-green-500' onClick={()=>openCart(item)} >Add to cart</button>
           </div>
        </div>
      ))
      }
    </div>
  )
}

export default FoodCard
