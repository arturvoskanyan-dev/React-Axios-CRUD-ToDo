import React from 'react'
import { MdEdit, FaRegTrashCan } from "../../index"

export default function ListItem({ id, title, completed, changeCompleted, remove }) {
    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => changeCompleted(id, completed)}
                className="cursor-pointer"
            />
            <span className={`flex-1 ${completed ? "text-gray-500 line-through" : "text-white"} font-bold truncate`}>
                {title}
            </span>
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                <MdEdit />
                <FaRegTrashCan onClick={() => remove(id)} />
            </div>
        </li>
    )
}
