import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='nav-Link' >Home</Link>
      <Link to='add-blog' className='nav-Link' >Blog</Link>
      <Link to='/about' className='nav-Link' >About</Link>
    </nav>
  )
}

export default Navbar
