import React, {useState, useEffect} from 'react'

import './style.css'

const DynamicStyle = () => {
    const [Name, setName]=useState("");
    const [inputValied, setInputValied]=useState(false);

    useEffect(() => {
        if(Name.length<2){
            setInputValied(false)
        }
        else{
            setInputValied(true)
        }
    }, [Name])

    const handleChange=(e)=>{
        setName(e.target.value);
    }

  return (
    <div>
        <input 
            name={Name} 
            type='text' 
            onChange={handleChange} 
            className={`${inputValied ? 'valid': 'invalid'}`} 
            placeholder='Name'/>
      {/* <h1 style={{
        color: err? 'red': 'green',
        background: err ? '#333': 'skyblue'
        }} >WelCome</h1> */}
    </div>
  )
}
export default DynamicStyle
