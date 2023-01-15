import React from 'react';
import {FaFacebook, FaReact, FaEthereum} from 'react-icons/fa';

const RextRotata=()=>{
    return (<span>
        <span className='Icons'><FaReact/></span>
    </span>)
}
export default function ReactIcon() {
  return (
    <div>
      <h2>ReactIcon</h2>
      <span className='Icons'>
          <FaFacebook />
      </span>
      <span className='Icons' ><FaEthereum/></span>
      <RextRotata/>
    </div>
  )
}
