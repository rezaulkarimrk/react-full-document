import React, {useState} from 'react'

import {UserConext} from './UserContext'
import Component2 from './Component2'
const Component1 = () => {
    const [user, setUser]=useState({id: 333, name:'Rezaul Karim Rk'});
    const [text, setText]=useState("Hello this is text");
  return (
    <UserConext.Provider value={{user, text}}>
      <Component2/>
    </UserConext.Provider>
  )
}

export default Component1
