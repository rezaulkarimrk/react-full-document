import React, {useState, useEffect} from 'react'

function useFetch(url) {
    const [data, setData]=useState(null);
    const [isLoading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is not Successful");
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch((errors)=>{
            setLoading(false)
            setError(errors.message);
        })
    }, [url]);
    
      return {data, isLoading, error}
}

export default useFetch
