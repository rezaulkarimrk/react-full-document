import React from 'react'
import {NavLink} from 'react-router-dom'

const s = () => {
  return (
    <nav>
        <NavLink to='/' className='allLink'>Home</NavLink>
        <NavLink to='/about' className='allLink'>About</NavLink>
        <NavLink to='blogs' className='allLink'>Blogs</NavLink>
        <NavLink to='contact' className='allLink'>Contuct</NavLink>
    </nav>
  )
}

export defaults ;
