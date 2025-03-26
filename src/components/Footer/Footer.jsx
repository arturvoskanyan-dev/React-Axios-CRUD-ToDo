import React from 'react'
import AddClearBtn from '../AddClearBtn/AddClearBtn'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center border-t-2 border-pink'>
      <span className='text-white'>You have ?/? tasks</span>
      <AddClearBtn>Clear All</AddClearBtn>
    </footer>
  )
}
