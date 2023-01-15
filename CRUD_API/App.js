import React,{useEffect, useState} from 'react';

import './app.css'
import UserFrom from './UserFrom';

const URL='https://rest-api-without-db.herokuapp.com/users'
const App = () => {
    const [users, setUsers]=useState(null);
    const [isLoding, setIsLoading]=useState(true);
    const [error, setError]=useState(null);

    // update user
    const [selectedUser, setSelectedUser]=useState({
        username:'',
        email: ''
    })
    const [updateFlag, setUpdateFlag]=useState(false);
    const [selectecUserId, setSelectedUserId]=useState("")

    const getAlluser=()=>{
        fetch(URL)
        .then((res)=>{
            if(!res.ok){
                throw Error("Could Not Fetching");
            }
            return res.json();
        })
        .then((data)=>{
            console.log(data.users);
            setUsers(data.users);
        })
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    }
    useEffect(()=>{
        getAlluser();
    },[] )
    // delete users
    const handleDelete=(id)=>{
        fetch(URL + `/${id}`,{
            method: "DELETE",
        })
        .then((res)=>{
            if(!res.ok){
                throw("Could Not Delete");
            }
            getAlluser();
        })
        .catch((err)=>{
            setError(err.message)
        })
    }

    const addUser=(user)=>{
        console.log(user)
        fetch(URL, {
            method:'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user)
        })
        .then((res)=>{
            if(res.status===201){
                getAlluser();
            }
            else{
                throw new Error("Could not create new Post");
            }
        })
        .catch((err)=>{
            setError(err.message);
        })
    }
    const handleEdit=(id)=>{
        setSelectedUserId(id);
        setUpdateFlag(true);
        const filterData= users.filter((user)=>user.id===user)
        setSelectedUser({
            username: filterData[0].username,
            email: filterData[0].emails
        })
    }
    const handleUpdate =(user)=>{
        fetch(URL +   `/${selectecUserId}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("Could not Update");
            }
            getAlluser();
            setUpdateFlag(false);
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
  return (
    <div className='app'>
      <h1>User ManageMaent App</h1>
      {isLoding && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {updateFlag ? <UserFrom btnText="Update User" selectedUser={selectedUser} handleSubmitData={handleUpdate}/> : <UserFrom btnText="Add User" handleSubmitData={addUser}/>}
      <section>
        {users && 
            users.map((user)=>{
                const {id, username, email}=user;
                return (
                    <article key={id} className='cart'>
                        <p>{username}</p>
                        <p>{email}</p>
                        <button className='Btn' onClick={handleEdit(id)}>Edit</button>
                        <button className='Btn' onClick={()=>handleDelete(id)}>Deletes</button>
                    </article>
                )
         })}
      </section>
    </div>
  )
}

export default App
