import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import './Todo.css'


export default function Todo(props) {
    const {title, desc}=props.todo;
    const {id}=props;
    const HandlClick =(id)=>{
        props.onRemoveTodo(id);

    }
  return (
    <article className='todo'>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className='bBtn' onClick={()=>
                HandlClick(id)
                }>
                <span><FaTrashAlt/></span>
            </button>
        </div>

    </article>
  )
}
