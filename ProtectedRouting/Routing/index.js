import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from '../Home';
import AddBlog from '../About';
import About from '../About';
import Error from '../Error'
import Navbar from '../LayOut/Navbar'
import Protected from '../Protected/Protected';

const Index = () => {

  const [isLogedIn, setIsLogedIn] = useState(false)
  return (
        <BrowserRouter>
        <Navbar />
        {isLogedIn ? <button onClick={()=>{setIsLogedIn(!isLogedIn)}} >Log Out</button>:<button onClick={()=>{setIsLogedIn(!isLogedIn)}} >Log In</button>}
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/add-blog' element={<Protected isLogedIn={isLogedIn}><AddBlog /></Protected>} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Index
