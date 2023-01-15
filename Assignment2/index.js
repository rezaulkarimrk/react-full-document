import React, { Component } from 'react'
import './style.css'


export default class state extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decreement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    ZeroHandle=()=>{
        this.setState({
            count:0
        })
    }

    
    render(){
        const {count}=this.state;
        return (
            <div className='mainDiv'>
              <h2 className='title'>Counter App</h2>
              <div className='subDiv'>
                  <p className='counter'>count : {count}</p>
                  <button className='allButton' onClick={this.Increement} disabled={count===5? true:false}>+</button>
                  <button className='allButton' onClick={this.decreement} disabled={count===-5 ? true:false}>-</button>
                  <button className='allButton' onClick={this.ZeroHandle}>0</button>
              </div>
            </div>
          )
    }
    
}
