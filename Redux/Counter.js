import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './Services/Action/CounterAction'

const Counter = () => {
    
    const count=useSelector(state=> state.count)
    // console.log(count);
    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch(incrementCounter());
    }
    const handleReset=()=>{
        dispatch(resetCounter())
    }
    const handleDcrement=()=>{
        dispatch(decrementCounter())
    }
  return (
    <div>
        <h2>Counter App</h2>
      <h3>Counter : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDcrement}>Decrement</button>
    </div>
  )
}

export default Counter
