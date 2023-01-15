import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-Link">Home</Link>
      <Link to="/show-books" className="nav-Link">Show Books</Link>
      <Link to="/add-book" className="nav-Link">Add Book</Link>
    </nav>
  )
}

export default Navbar
