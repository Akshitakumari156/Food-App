import React from 'react'

function Button1({onClick,className,color,username}) {
  return (
    <div>
      <button onClick={onClick} className={`rounded-2xl px-4 py-2 mt-1 mb-2 flex items-center justify-center ${className} font-medium hover:bg-${color}-500 hover:text-white hover:`}>{username}</button>
    </div>
  )
}

export default Button1
