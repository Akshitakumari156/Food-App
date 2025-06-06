import React from 'react';
import { CiSquarePlus,CiSquareMinus } from 'react-icons/ci';
import { MdDelete } from "react-icons/md";

function ItemCard({item,Increasequantity,Decreasequantity,Deleteitem}) {
  
  return (
    <div className="flex items-center mt-2 mx-2 shadow-lg p-3 rounded-lg bg-white">
      <img
        src={item.img}
        className="h-16 w-16 rounded-md object-cover"
        alt={item.name}
      />
      <div className="ml-4 flex flex-col flex-grow">
        <div className='flex  justify-between'>
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <MdDelete onClick={()=>{Deleteitem(item.id)}} className='mt-1 cursor-pointer text-lg'/>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-bold text-lg">₹{item.price}</p>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
            <CiSquareMinus onClick={()=>{Decreasequantity(item.id)}} className="h-8 w-8 cursor-pointer text-gray-600 hover:text-white hover:bg-green-500 rounded-md transition duration-200" />
            <p className="text-lg font-semibold">{item.quantity}</p>
            <CiSquarePlus onClick={()=>{Increasequantity(item.id)}} className="h-8 w-8 cursor-pointer text-gray-600 hover:text-white hover:bg-green-500 rounded-md transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
