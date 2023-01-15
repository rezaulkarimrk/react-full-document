import React, {useState} from 'react'

import User from './User'

const Users = () => {
    // const [userName, setUserName]=useState('Rezaul Karim');
    // const [userId, setUserId]=useState();
    const [user, setUser]=useState({
        id:303,
        name: "Rezaul Karim"
    })
  return (
    <div>
      <User user={user}/>
    </div>
  )
}

export default Users


