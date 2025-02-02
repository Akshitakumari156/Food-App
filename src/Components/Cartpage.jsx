import React from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from '../Card/ItemCard';

function Cartpage({open,setOpen,cart,Increasequantity,Decreasequantity,Deleteitem,totalitem}) {
  const CloseCart=()=>{
    setOpen(false);
    console.log(open);
  }
  return (
    <div className={`transform ${open? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 fixed  right-0 top-0 h-screen w-[22vw] bg-white shadow-lg flex flex-col`}>
      <div className="flex justify-between items-center p-4 ">
        <p className="font-bold text-2xl font-serif">My Order</p>
        <IoMdClose onClick={CloseCart} className="h-7 w-7 cursor-pointer text-gray-600 hover:text-red-600" />
      </div>

      <div  className="flex-grow overflow-y-auto px-3">
      {cart.length > 0 ? cart.map((item, index) => (
        <ItemCard key={index} item={item} Increasequantity={Increasequantity} Decreasequantity={Decreasequantity} Deleteitem={Deleteitem}/>
       )) : <p className="text-center text-gray-500">Your cart is empty</p>}
      </div>

      <div className="p-4 bg-white shadow-md">
        <div className="font-medium text-lg">Items:{totalitem}</div>
        <div className="font-medium text-lg mb-4">Total Amount: ₹900</div>
        <button className="w-full p-4 font-bold text-xl rounded-lg bg-green-500 text-white hover:scale-105 hover:shadow-lg transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cartpage;
