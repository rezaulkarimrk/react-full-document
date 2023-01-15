import React from 'react';
import './style.css';
import {useFormik, yupToFormErrors} from 'formik'
import * as yup from 'yup'

export default function Signup() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPasssword] = useState('');

     
    const formik= useFormik({
        initialValues : {
            name: '',
            email: '',
            password: ''

        },

        validationSchema : yup.object({
            name: yup.string().min(2, "Name Must have 2 character").required(),
            email: yup.string().email('Email is a required field').required(),
            password: yup.string().min(6, "Password must have 6 character").required()
        }),
        onSubmit : (values, {resetForm})=>{
            console.log(values);
            resetForm({values:''});
        }
    })
    console.log(formik.errors);
    // const handleSubmit=(e)=>{
    //     console.log(newUser);
    //     e.preventDefault();
    // }
    // const chanageHandeler=(e)=>{
    //     let Name=e.target.name;
    //     if(Name==='name'){
    //         setName(e.target.value);
    //     }
    //     else if(Name==='email'){
    //         setEmail(e.target.value);
    //     }
    //     else if(Name==='password'){
    //         setPasssword(e.target.value);
    //     }
    // }
    // const newUser={
    //     name,
    //     email,
    //     password
    // }
    const nameError=(<div className='sowError'>{formik.touched.name && formik.errors.name && <span style={{color: "red"}}>{formik.errors.name}</span>}</div>
    );
    const emailError=(<div className='sowError'>{formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>}</div>
    );
    const passwordError=(<div className='sowError'>{formik.touched.password && formik.errors.password && <span style={{color:"red"}}>{formik.errors.password}</span>} </div>);


    const renderForm =(<form onSubmit={formik.handleSubmit}>
        <div className='input'>
            <label htmlFor='Name'>Name : </label>
            <input type="text" name='name' value={formik.values.name} id="Name" required onChange={formik.handleChange}/>
            {nameError}
        </div>
            
        <div className='input'>
            <label htmlFor='Email'>Emali : </label>
            <input type="email" name='email' value={formik.values.email} id="Email" required onChange={formik.handleChange}/>
            {emailError}
        </div>
        <div  className='input'>
            <label htmlFor='Password'>Password : </label>
            <input type="password" name='password' value={formik.values.password} id="Password" required onChange={formik.handleChange}/>
            {passwordError}
        </div>
        <div className='butTOn'>
            <button className='button' type='submit'>Submit</button>
        </div>
        
    </form>);
  return (
    <div className='userSighnup'>
      <h2>User Sign Up</h2>
      <div className='form-div'>
        {renderForm}
      </div>
    </div>
  )
}
