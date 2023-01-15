import React, {useCallback, useState} from 'react';

import Message from './Message';

const App = () => {
    const [Count, setCount] = useState(0);
    const [Toggle, setToggle]= useState(false);
    console.log("App Rendearing")
    const handleIncreementMessage= useCallback(()=>{         //useCallback
        setCount(Count+1);
    }, [Count]);
  return (
    <div>
        {Toggle ? "On":"Off"}
        <button onClick={()=>{setToggle(!Toggle)}}>Toggle</button>
        <h1>Count : {Count}</h1>
        <button onClick={()=>{setCount((Count)=>Count+1)}} >Increment</button>
        <Message numberOfMessage={Count} handleIncreementMessage={handleIncreementMessage}/>
    </div>
  )
}

export default App;
