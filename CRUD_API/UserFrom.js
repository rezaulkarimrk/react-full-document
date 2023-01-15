import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const UserFrom = ({handleSubmitData,selectedUser, btnText}) => {
    const [user, setUser]=useState({username:'', email:''});
    const {username, email}=user;
    const handleChange=(e)=>{
        const selectedField=e.target.name;
        const selectedValue=e.target.value
        setUser((prevState=>{
            return {...prevState, [selectedField]:selectedValue};
        }))
    }

    useEffect(()=>{
        setUser({
            username: selectedUser.username,
            email: selectedUser.email
        });
    }, [selectedUser])
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSubmitData(user);
        setUser({username:'', email:''});
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='fieldGroup'>
            <label htmlFor='username'>User Name</label>
            <input onChange={handleChange} value={username} type='text' id='username' name='username' required  />
        </div>
        <div className='fieldGroup'>
            <label htmlFor='email' >Email</label>
            <input onChange={handleChange} value={email} type='email' id='email' name='email' required/>
        </div>
      <button type='submit' className='Btn'>{btnText}</button>
    </form>
  )
}

UserFrom.defaultPropss = {
    selectedUser: {
        userrname: '',
        email:''
    }

}

export default UserFrom
