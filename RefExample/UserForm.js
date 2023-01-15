import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props){
        super(props)
        this.userNameRef=createRef();
        this.state={

        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.userNameRef.current.style.color='green';
        this.userNameRef.current.style.background='yellow';
        console.log(this.userNameRef.current.value);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='formFilter'>
            <label htmlFor='userName'>User : </label>
            <input type='text' id='userName' required name='name' ref={this.userNameRef}/>
        </div>
        <div className='formFiter'>
            <label htmlFor='userPassword'>Password : </label>
            <input type='password' name='password' id='userPassword' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
