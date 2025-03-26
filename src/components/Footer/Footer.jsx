import React from 'react'
import AddClearBtn from '../AddClearBtn/AddClearBtn'

export default function Footer({data, clearAll}) {
  const tasks = data.filter(d => d.completed)

  return (
    <footer className='flex justify-between items-center border-t-2 border-pink'>
      <span className='text-white'>You have {tasks.length}/{data.length} tasks</span>
      {data.length > 0 && <AddClearBtn btnClick={clearAll}>Clear All</AddClearBtn>}
    </footer>
  )
}
