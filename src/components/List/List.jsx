import React from 'react'
import ListItem from './ListItem/ListItem'

export default function List({ data, changeCompleted, remove, editList }) {
  return (
    <section>
      <ul className='max-h-[450px] overflow-y-scroll list'>
        {
          data.map((todo) => {
            return (
              <ListItem 
                id={todo.id}
                key={todo.id}
                remove={remove}
                title={todo.title}
                editList={editList}
                completed={todo.completed}
                changeCompleted={changeCompleted}
              />
            )
          })
        }
      </ul>
    </section>
  )
}
