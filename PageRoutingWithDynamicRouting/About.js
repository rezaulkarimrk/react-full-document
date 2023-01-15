import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores explicabo odio, ipsum aliquam a ipsa! Quam architecto molestias, ducimus deleniti tempora, ullam esse a id ipsum illo quod optio ipsa laudantium numquam doloremque, eveniet ut sunt. Ad architecto quasi qui tenetur. Libero doloribus ratione eum! Dicta aut delectus voluptate non!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, tenetur laboriosam quam eaque nemo soluta? Aspernatur mollitia voluptate eaque, placeat itaque dicta ducimus, deserunt rerum, perspiciatis sunt enim! Quaerat, sit.</p>    
        <button onClick={()=>{navigate('/')}} className='Btn' >Go to Home</button>
    </div>

  )
}

export default About;
