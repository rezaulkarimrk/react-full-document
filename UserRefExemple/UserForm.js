import React, {useRef} from 'react';

const UserForm = () => {
    const userNameref=useRef();
    const passwordRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        console.log("submit");
        userNameref.current.style.color='red';
        console.log(userNameref.current.value);
        console.log(passwordRef.current.value);
    }
  return (
    <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor='Name'>Name : </label>
            <input type='text' name='name' id='Name' required autoFocus ref={userNameref}/>
        </div>
        <div>
            <label htmlFor='Password'>Password : </label>
            <input type='password' name='password' id='Password' required ref={passwordRef}/>
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}

export default UserForm;
