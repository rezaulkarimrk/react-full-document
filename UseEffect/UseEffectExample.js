import React, {useState, useEffect} from 'react'

const UseEffectExample = () => {
    const [Count, setCount]=useState(0);
    const [isLoding, seIsLoding]=useState(false)

    useEffect(()=>{
        console.log("UseEffect")
    },[Count])
  return (
    <div>
     {console.log("Rendering")}
      <h1>Count : {Count}</h1>
      <button onClick={()=>setCount(Count=>Count+1)}>+</button>
      <button onClick={()=>seIsLoding(!isLoding)}>isLoding</button>
    </div>
  )
}

export default UseEffectExample;


