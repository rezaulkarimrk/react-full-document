import React, {useState, useEffect} from 'react'
import useFetch from './useFetch'



function DataFetch() {
    const {data, isLoading, error}=useFetch('https://jsonplaceholder.typicode.com/todos');
      const isLoadingData=<p>todo is Loading</p>
      const ErrorMeassage=<p>{error}</p>
      const todoElement =(data &&
        data.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        }));
  return (
    <div>
      <h2>Todo</h2>
      {isLoading && isLoadingData}
      {error && ErrorMeassage}
      {todoElement}
    </div>
  )
}
export default DataFetch
