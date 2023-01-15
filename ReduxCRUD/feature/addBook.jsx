import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BooksSlice';

const {v4: uuidv4} = require('uuid');

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor]= useState('');
  const navigate=useNavigate()


  const dispatch= useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const book = {id: uuidv4(), title, author};
    dispatch(addBooks(book))
    navigate('/show-books', {replace: true});
  }

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title : </label>
          <input type="text" id='title' name='title'  value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className="form-field">
          <label htmlFor="author">Author : </label>
          <input type="text" id='author' name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
