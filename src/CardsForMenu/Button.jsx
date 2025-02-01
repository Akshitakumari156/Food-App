import React from 'react'

function Button({onClick,username,className}) {
  return (
    <div>
      <button onClick={onClick} className={`rounded-2xl px-4 py-2 mt-1 mb-2 flex items-center justify-center font-medium ${className} hover:bg-green-600 hover:text-white`}>{username}</button>
    </div>
  )
}

export default Button
