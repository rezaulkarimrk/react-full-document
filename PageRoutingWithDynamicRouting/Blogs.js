import React, {useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { bloogData } from './data';

const Bloge = () => {
  const trunCatString=(str, num)=>{
    if(str.length>num)
    {
      return str.slice(0, num)+ '...';
    }
    else{
      return str;
    }
  }
  const navigate=useNavigate();
  const [Blogs, setBlogsData]=useState(bloogData);
  return (
    <div>
      <h1>Bloogs Post</h1>
      <section>
        {
          Blogs.map((blog)=>{
            const {title, id, body}=blog;
            return (<article key={id}>
              <h3>{title}</h3>
              <p>{trunCatString(body, 100)}</p>
              <Link to={title} state={{id, body, title}}>lern More</Link>
            </article>)
          })
        }
      </section>


        {/* <h1>Bloge Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores explicabo odio, ipsum aliquam a ipsa! Quam architecto molestias, ducimus deleniti tempora, ullam esse a id ipsum illo quod optio ipsa laudantium numquam doloremque, eveniet ut sunt. Ad architecto quasi qui tenetur. Libero doloribus ratione eum! Dicta aut delectus voluptate non!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, tenetur laboriosam quam eaque nemo soluta? Aspernatur mollitia voluptate eaque, placeat itaque dicta ducimus, deserunt rerum, perspiciatis sunt enim! Quaerat, sit.</p>     */}
        <button onClick={()=>{navigate('/');}} className='Btn' >Go to Home</button>
    </div>

  )
}

export default Bloge;
