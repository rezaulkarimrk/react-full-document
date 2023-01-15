import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'

import {bloogData} from './data'

const Blog = () => {
    const {title}=useParams();
    const location= useLocation();
    const [bodyData, setBodyData]=useState('');

    // useEffect(()=>{
    //   const blogsdata= bloogData.filter((blog)=> blog.title===title);
    //   setBodyData(blogsdata[0].body);
    // },[])
  return (
    <div>
        <h1>{location.state.title} Page</h1>
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(501, 800)}</p>
      
    </div>
  )
}

export default Blog
