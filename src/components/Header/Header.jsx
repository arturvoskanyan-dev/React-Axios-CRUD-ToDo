import React from 'react'
import AddClearBtn from '../AddClearBtn/AddClearBtn'

export default function Header({text, setText, handlePost}) {
    return (
        <header className='mb-4'>
            <article>
                <h1 className='p-2 text-white text-3xl font-black'>ToDo List</h1>
            </article>
            <section className='flex'>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-1.5 mr-4 w-full text-white border-2 border-pink rounded-sm'
                />
                <AddClearBtn btnClick={handlePost}>Add</AddClearBtn>
            </section>
        </header>
    )
}
