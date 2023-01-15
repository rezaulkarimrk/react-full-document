import React,{useState} from 'react'
import'./FORM.css'

export default function index() {
    // const[name, setName]= useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [user, setUser]=useState({name: '', email:'', password:''});
    const {name, email, password}=user;

    // const handleNameChange=(e)=>{
    //     // setName(e.target.value)
    //     setUser({name: e.target.value, email, password});
    // }
    // const handleEmailChange=(e)=>{
    //     // setEmail(e.target.value)
    //     setUser({name, email: e.target.value, password});
    // }
    // const handlePasswordChange=(e)=>{
    //     // setPassword(e.target.value)
    //     setUser({name, email, password: e.target.value});
    const changeHandler=(e)=>{
        // const change=e.target.name;
        // if(change==='name'){
        //     setUser({name: e.target.value, email, password});
        // }
        // else if(change==='email'){
        //     setUser({name, email: e.target.value, password});
        // }
        // else if(change==='password'){
        //     setUser({name, email, password:e.target.value});
        // }
        setUser({...user, [e.target.name]: e.target.value});
    }
    // }
    // let userInfo={
    //     name,
    //     email,
    //     password
    // }
    const SubmitHandler=(e)=>{
        // console.log(userInfo)
        console.log(user);
        e.preventDefault();
    }

  return (
    <div>
        <h2>Registration</h2>
        <form action="" onSubmit={SubmitHandler}>
            <div className='fromGroup'>
                <label htmlFor="Name">Name: </label>
                <input value={name}  type="text" name="name" id="Name" required  onChange={changeHandler}/>
            </div>
            <div className='fromGroup'>
                <label htmlFor="Email">Email: </label>
                <input value={email}  type="email" name="email" id="Email" required onChange={changeHandler}/>
            </div>
            <div className='fromGroup'>
                <label htmlFor="Paassword">Paassword: </label>
                <input value={password} type="password" name="password" id="Paassword" required onChange={changeHandler}/>
            </div>
            <div className='fromGroup'>
                <button type='submit'>Registration</button>
            </div>
        </form>
      </div>
  )
}
