import React,{useState} from 'react'

export default function HOOKS_USE_STATE2() {
    const[count, setCount]=useState(0);
    const CountHandling=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={CountHandling}>Click On</button>
    </div>
  )
}
