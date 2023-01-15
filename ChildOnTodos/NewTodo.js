import React from 'react';
import { useState } from 'react';

export default function NewTodo(props) {
    const [todo, setTodo]=useState("");
    const todoHandle = (e)=>{
        setTodo(e.target.value);
    };
    const submitTodo=(e)=>{
        e.preventDefault();
        props.newTodo(todo);
    };
  return (
    <div>
        <label htmlFor='Todo'>New Todo : </label>
        <form onSubmit={submitTodo}>
            <input type={"text"} id="Todo" name='todo' value={todo} onChange={todoHandle}/>
            <button>Add Todo</button>
        </form>
      
    </div>
  )
}
