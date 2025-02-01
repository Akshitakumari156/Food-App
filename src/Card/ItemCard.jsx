import React from 'react';
import { CiSquarePlus,CiSquareMinus } from 'react-icons/ci';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
function ItemCard() {
  const[value,Setvalue]=useState(1);
  
  function IncreaseValue(){
    Setvalue(value=>value+1);
  }

  function DecreaseValue(){
    if(value>1){
      Setvalue(value=>value-1);
    }
  }
  return (
    <div className="flex items-center mt-2 mx-2 shadow-lg p-3 rounded-lg bg-white">
      <img
        src="https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ="
        className="h-16 w-16 rounded-md object-cover"
        alt="Onion Pizza"
      />
      <div className="ml-4 flex flex-col flex-grow">
        <div className='flex  justify-between'>
        <h2 className="font-semibold text-lg">Onion Pizza</h2>
        <MdDelete className='mt-1 cursor-pointer text-lg'/>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-bold text-lg">₹150</p>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
            <CiSquareMinus onClick={DecreaseValue} className="h-8 w-8 cursor-pointer text-gray-600 hover:text-white hover:bg-green-500 rounded-md transition duration-200" />
            <p className="text-lg font-semibold">{value}</p>
            <CiSquarePlus onClick={IncreaseValue} className="h-8 w-8 cursor-pointer text-gray-600 hover:text-white hover:bg-green-500 rounded-md transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
