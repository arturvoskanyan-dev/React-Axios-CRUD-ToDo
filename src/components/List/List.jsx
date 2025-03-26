import React from 'react'
import {MdEdit, FaRegTrashCan} from "../index"

export default function List() {
  return (
    <section>
      <ul className='max-h-[450px] overflow-y-scroll list'>
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input type="checkbox" />
            <span className='flex-1 text-white font-bold truncate'>Text</span>
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                <MdEdit/>
                <FaRegTrashCan />
            </div>
        </li>
      </ul>
    </section>
  )
}
