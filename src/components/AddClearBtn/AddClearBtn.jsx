import React from 'react'

export default function AddClearBtn({ children, btnClick }) {
  return (
    <button
      onClick={btnClick}
      className='p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer transition-all hover:bg-hover-pink'>
      {children}
    </button>
  )
}
