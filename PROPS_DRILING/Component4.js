import React,{useContext} from 'react';
import { UserConext } from './UserContext';

const Component4 = () => {
    const {user, text}=useContext(UserConext);
  return (
    <div>
      <h6>{text}</h6>
      <h1>{user.id}</h1>
      <h5>{user.name}</h5>
    </div>
  )
}
export default Component4;
