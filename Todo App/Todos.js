import React from 'react'
import Todo from './Todo'
import './todos.css'

export default function Todos(props) {
  return (
    <section className='todos'>
        {
            props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>)
        }
    </section>
  )
}
