import React,{useEffect, useState} from 'react'
import Button from '../CardsForMenu/Button'
import FoodCard from '../CardsForMenu/FoodCard'
import Button1 from '../CardsForMenu/Button1';
import Cartpage from './Cartpage';
function Menupage() {
  const[open,setOpen]=useState(false);
  const[cart,Setcart]=useState([]);
  const[totalitem,SetTotalitem]=useState(0);
  const[cost,Setcost]=useState(0);
  const[movementCart,SetMovementCart]=useState(false);

  const[category,setCategory]=useState('');
  const[veg,setveg]=useState('');
  const[selectcategory,Setselectedcategory]=useState('')
  const[selectedVeg,SetselectedVeg]=useState('');
  function callCard(newcategory){
      if(newcategory!== category){
        setCategory(newcategory);
      }
      Setselectedcategory(newcategory);
  }

  function addtocart(item){
    Setcart((prevCart) => {
      const itemExists = prevCart.find(cartItem => cartItem.id === item.id);
  
      if (itemExists) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }
  
  useEffect(()=>{
    let k=cart.reduce((sum,item)=>sum+item.quantity,0)
    SetTotalitem(k);
    let y=cart.reduce((sumC,item)=>sumC+(item.quantity)*(item.price),0);
    Setcost(y);
    console.log(totalitem);
  },[cart]);

  const Deleteitem=(id)=>{
    Setcart(prevCart=>prevCart.filter((item)=>item.id!==id))
  }
  
  function Increasequantity(id){
    Setcart(prevCart=>prevCart.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:item));
  }
  function Decreasequantity(id){
    Setcart(prevCart=>prevCart.map((item)=>item.id===id && item.quantity>1?{...item,quantity:item.quantity-1}:item));
  }

  function callCard1(newtype){
    setveg(newtype);
    SetselectedVeg(newtype);
  }
  function Showcard(){
    if(open){
      return(
        <>
        <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white'>
         <Cartpage Deleteitem={Deleteitem} open={open} setOpen={setOpen} cart={cart} Increasequantity={Increasequantity} Decreasequantity={Decreasequantity} totalitem={totalitem} cost={cost} SetMovementCart={SetMovementCart}/>
        </div>
        </>
      )
    }
  }
  return (
    <div className=' mt-8 h-auto'>
    <div className='border bg-gray-100 h-14 flex justify-evenly items-center'>
      <Button onClick={() => callCard('')} className={`${selectcategory === ''?'bg-green-600 text-white':'bg-gray-200 text-black'}`} username="All" />
      <Button onClick={() => callCard('Lunch')} username="Lunch" className={`${selectcategory === 'Lunch' ? 'bg-green-600 text-white':'bg-gray-200 text-black'}`} />
      <Button onClick={() => callCard('Breakfast')} username="Breakfast" className={`${selectcategory === 'Breakfast'?'bg-green-600 text-white':'bg-gray-200 text-black'}`}/>
      <Button onClick={() => callCard('Dinner')} username="Dinner" className={`${selectcategory === 'Dinner'?'bg-green-600 text-white':'bg-gray-200 text-black'}`}/>
      <Button onClick={() => callCard('Snacks')} username="Snacks" className={`${selectcategory === 'Snacks'?'bg-green-600 text-white':'bg-gray-200 text-black'}`}/>
    </div>
    <div className='flex bg-gray-100 justify-evenly gap-5 '>
      <Button1 onClick={() => callCard1('Yes')} username="Veg" color="green"className={`${selectedVeg === 'Yes'?'bg-green-500 text-white':'bg-gray-200 text-black'}`} />
      <Button1 onClick={() => callCard1('No')} username="Non-Veg" color="red" className={`${selectedVeg === 'No'?'bg-red-500 text-white':'bg-gray-200 text-black'}`}/>
    </div>
    <div className=' h-auto '>
      <FoodCard category={category} veg={veg} open={open} setOpen={setOpen} addtocart={addtocart} SetMovementCart={SetMovementCart}/>
      <div className='sticky bottom-2/100'>
      <div className={`sticky bottom-6 left-94/100 w-[4rem] h-[4rem] flex items-center justify-center rounded-full shadow-xl border cursor-pointer hover:scale-110 transition ${movementCart ? 'animate-bounce':''}`} onClick={() => setOpen(true)}>
      <img src="/LOGO/cart.png" className=" w-3/4 h-3/4" onClick={()=>{setOpen(true)}} />
      </div>
      </div>
    </div>
    <Showcard />
    </div>
  )
}

export default Menupage
