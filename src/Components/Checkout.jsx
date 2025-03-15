import React from 'react'
import CartTotal from '../Card/CartTotal'
import { useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Checkout() {
  const location = useLocation();
  console.log("received cost",location.state);
  const totalcost = location.state?.totalcost||0;
  console.log("Extracted totalCost in Checkout:", totalcost);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Payment successful! Thank you, ${details.payer.name.given_name}.`);
      console.log("Order details:", details);
    });
  };

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
           <PayPalScriptProvider options={{ "client-id": "Ab5VyN1dXWQDDsh1KDyB2ixqC8kxzSStckLrsX3vDbhNnwitUmTcnxnXFGTZtPWhPRJni6cwYpJrddJp"}}>
            <div className="mt-4 mr-6 p-4 border rounded-lg shadow-md bg-gray-50">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Pay Securely with PayPal</h2>
              <PayPalButtons
                style={{ layout: "vertical", shape: "rect", color: "blue" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{ amount: { value: (totalcost+20).toFixed(2) } }]
                  });
                }}
                onApprove={handleApprove}
              />
            </div>
          </PayPalScriptProvider>
        </div>
     </div>
    </>
  )
}

export default Checkout
