import React,{useState} from 'react';
import Todos from './Todos';
import './Home.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const handleTodo=(todo)=>{
    setTodos((PrevTodos)=>{
      return[ ...PrevTodos, {id: uuidv4(), todo}];
    });
  };
  const handleRemoveTodo=(Id)=>{
    setTodos((PrevTodos)=>{
      const filteredTodos=PrevTodos.filter((todo)=>todo.id !== Id);
      return filteredTodos;
    });

  }
  return (
    <div className='container'>
        <h2 style={{color: '#fff'}}>Todo App</h2>
        <NewTodo onAddTodo={handleTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}
