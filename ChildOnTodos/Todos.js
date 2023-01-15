import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <div>
      <h2>Hello I'm Todos</h2>
      {
        props.todos.map((todo, index)=> (
            <Todo key={index} todo={todo}/>
        ))
      }
    </div>
  )
}
