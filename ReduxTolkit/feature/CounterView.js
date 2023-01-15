 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incresssByAmount } from '../counter/counterSlice'
 
 const CounterView = () => {
    const count= useSelector((state)=> state.count)
    const dispatch= useDispatch();
   return (
     <div>
       <h2>Count : {count}</h2>
       <button onClick={()=>{dispatch(increment())}}>Increment</button>
       <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
       <button onClick={()=>{dispatch(reset())}}>Reset</button>
       <button onClick={()=>{dispatch(incresssByAmount(5))}}>incressBy5</button>
     </div>
   )
 }
 
 export default CounterView
 