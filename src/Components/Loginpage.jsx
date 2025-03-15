import React, { useState } from 'react';

function Loginpage() {
  const [login, SetLogin] = useState("Login");

  const SwitchPage = () => {
    SetLogin(login === "Login" ? "SignUp" : "Login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-8">
      <div className="bg-white p-8 w-full max-w-md rounded-2xl shadow-xl border border-gray-200">

        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          {login}
        </h1>

        <div className="w-full">
          <div>
            {
              login==="SignUp"?<div>
                <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition-all"
                placeholder="Enter your name"
              />
              </div>:""
            }
          </div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition-all"
            placeholder="Enter your Email"
          />
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 mb-6 transition-all"
            placeholder="Enter your password"
          />
           <div className='-mt-5 mb-4'>
           {
            login==="Login"?<div className='text-sm'>Forget password? <span className='text-blue-600 hover:cursor-pointer hover:underline'>Click Here!</span> </div>:""
           }
           </div>
          <div className='flex gap-4'>
            <button 
              className={`w-full py-2 rounded-lg shadow-md transition-all 
                ${login === "Login" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-black"}`}
              onClick={() => SetLogin("Login")}
            >
              Login
            </button>

            <button 
              className={`w-full py-2 rounded-lg shadow-md transition-all 
                ${login === "SignUp" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-black"}`}
              onClick={() => SetLogin("SignUp")}
            >
              SignUp
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4 text-sm">
            {login === "Login" 
              ? "Don't have an account? " 
              : "Already have an account? "}
            <span 
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={SwitchPage}
            >
              {login === "Login" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
