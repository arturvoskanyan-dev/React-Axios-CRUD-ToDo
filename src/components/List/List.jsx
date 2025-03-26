import React from 'react'
import ListItem from './ListItem/ListItem'

export default function List({ data }) {
  return (
    <section>
      <ul className='max-h-[450px] overflow-y-scroll list'>
        {
          data.map((todo) => {
            return (
              <ListItem 
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            )
          })
        }
      </ul>
    </section>
  )
}
