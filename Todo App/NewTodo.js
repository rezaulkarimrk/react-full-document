import React, {useState} from 'react'
import './NewTodo.css'

export default function NewTodo(props) {
    const [todo, setTodo]=useState({title:"", desc:""});
    const {title, desc}=todo;
    const handleChange =(e)=>{
        let name=e.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo, [name]:e.target.value};
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodo({title: "", desc:""});
        props.onAddTodo(todo);
    }
  return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor='title'>Title: </label>
                <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
            </div>

            <div className='form-field'>
                <label htmlFor='desc'>Description: </label>
                <textarea  id="desc" name="desc" value={desc} onChange={handleChange}/>
            </div>

            <div>
                <button>Add Todo</button>
            </div>
        </form>
  )
}
