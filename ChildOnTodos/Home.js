import React, {useState} from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo.js';

const dummyTodos=["Todos 1", "Todos 2"];
export default function Home() {
    const [todos, setTodo]=useState(dummyTodos);

    const handleNewTodo=(newTodo)=>{
        setTodo([...todos, newTodo]);
    }

  return (
    <div>
        <NewTodo newTodo={handleNewTodo}/>
        <Todos todos={todos}/>
    </div>
  )
}
