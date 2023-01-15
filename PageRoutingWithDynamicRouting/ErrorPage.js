import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>Page not found</h1>
        <p>By RK</p>
        <button onClick={()=>{navigate('/');}}  className='Btn' >Go to Home</button>
    </div>
  )
}

export default ErrorPage
