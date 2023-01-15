import React, {useState, useEffect} from 'react'

const isLoadingData=<p>todo is Loading</p>

function DataFetch() {
    const [Todos, setTodo]=useState(null);
    const [isLoading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is not Successful");
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setTodo(data);
            setLoading(false);
            setError(null);
        })
        .catch((errors)=>{
            setLoading(false)
            setError(errors.message);
        })
        }, 2000)
    }, []);
    const todoElement =(Todos &&
        Todos.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        }));
      ;
  return (
    <div>
      <h2>Todo</h2>
      {isLoading && isLoadingData}
      {error && <p>{error}</p>}
      {todoElement}
    </div>
  )
}
export default DataFetch
