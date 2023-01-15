import React, { memo, useMemo } from 'react'

const Message = ({numberOfMessage, handleIncreementMessage}) => {
    console.log("Message Rendering");

    const calculateNumbr= useMemo(()=>{     //use Memo hooks
        let number=0;
        for (let index = 0; index < 5000000000; index++) {
            number++;
            
        }
        return number;
    }, [])

    return (
        <div>
            <h1>Number : {calculateNumbr}</h1>
            <p>Send {numberOfMessage} Message</p>
            <button onClick={handleIncreementMessage} >Increment Message</button>
        </div>
    
  )
};

export default memo(Message);   // memo 
