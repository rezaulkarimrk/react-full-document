import React, { Component } from 'react'
import LoginPage from './loginPage';
import Homepage from './homepage';

class Conditional_rendaring extends Component {
    constructor(props){
        super(props)
        this.state={
            Islogin: false
        }
    }
  render() {
    let {Islogin}=this.state
    // let element;

    // if(Islogin){             //conditional rendaring
    //     element= < LoginPage/>
    // }
    // else{
    //     element= <Homepage/>
    // }
    // element=Islogin?<LoginPage/>:<Homepage/>     ternery rendering

    // return <div>{element}</div>;
    // return (Islogin?<LoginPage/>:<Homepage/>)    //   ternery rendering wix jhx
    return(Islogin && <LoginPage/>)     //sort circuit
  }
}

export default  Conditional_rendaring;