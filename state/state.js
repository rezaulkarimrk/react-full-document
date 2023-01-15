import React, { Component } from 'react'
import './stateStyle.css'

export default class state extends Component {
    constructor(props) { //sortcut rconst
      super(props)
    
      this.state = {
         count: 1,
      }
    }
    handleIncreement=()=>{
        // if(this.state.count===5){
        //     return;
        // }
        
        this.setState({
            count: this.state.count+1
        })
        
    }
    handeDecrement=()=>{
        // if(this.state.count===0){
        //     return;
        // }
        this.setState({
            count: this.state.count-1
        })
    }
    
  render() {
    const {count}=this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button className='importClass' onClick={this.handleIncreement} disabled={count===5 ? true : false}>+</button>
        <button className='importClass' onClick={this.handeDecrement} disabled={count===0 ? true : false}>-</button>
      </div>
    )
  }
}
