import React, {useState} from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    const navigate=useNavigate();
    const [searchParams, setSearchParams]=useSearchParams();
    // console.log(searchParams.get("id"))
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    // const {userid}=useParams();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({name: name, age: age})
    }
  return (
    <div>
        <h1>User</h1>
        <form onSubmit={handleSubmit}>
            <div className='from-div'>
                <label className='user-input-lebel' htmlFor='Name'>Name : </label>
                <input className='user-input' id='Name' type='text' name={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name"></input>
            </div>
            <div className='from-div'>
                <label className='user-input-lebel' htmlFor='Age'> Age: </label>
                <input className='user-input' id='Age' type='text' name={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Age"></input>
            </div>
            
            <button type='submit' className='Btn user-from-btn'>Find</button>
        </form>


      {/* user <h1>{userid}</h1> */}
      {/* <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get('age')}</h1>
      <h1>{searchParams.get("name")}</h1> */}

      <button onClick={()=>{navigate('/')}} className={'Btn'}>Go to Home</button>
    </div>
  )
}

export default User
