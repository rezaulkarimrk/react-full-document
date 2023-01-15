import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pags
import Home from './Home'
import About from './About'
import Blogs from './Blogs'
import Blog from './Blog'
import User from './User'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Navbar from './Navbar'

import './style.css'

const PageRouting = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blogs' element={<Blogs />}/>
                <Route path='/blogs/:title' element={<Blog />}/>
                <Route path='/contact' element={<Contact />}/>
                {/* <Route path='/User/:userid' element={<User />}/> */}
                <Route path='/user' element={<User />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PageRouting
