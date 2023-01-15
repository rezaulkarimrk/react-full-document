import React, {useState} from 'react'
import './Toggle.css'

export default function toggleIndex() {
    const [toggle, setToggle]=useState(true)
  return (
    <div className='toggle-div'>
        {toggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem optio neque culpa numquam sed impedit, expedita dolorem repellendus atque, asperiores consectetur. Consequuntur necessitatibus cum iure rem. Voluptate eligendi rem natus dolor dignissimos debitis sed at quas blanditiis voluptates itaque voluptatibus, deleniti quos ipsa amet accusantium ut excepturi sapiente libero., Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolore illo explicabo deserunt quibusdam, excepturi enim quia nostrum asperiores maxime similique sapiente doloribus necessitatibus, fuga et eum, quos voluptas dolores?</p>}
        
      <div className='btnButton'>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle?"Hide":"Show"}</button>
      </div>
    </div>
  )
}
