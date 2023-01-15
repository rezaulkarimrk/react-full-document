import React, { Component } from 'react'

class EVENT_HANDELING extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        changeValue:''
      }
    }
    
    handleOnChange=(e)=>{
        this.setState({
            changeValue:e.target.value
        }, ()=>{
            console.log(this.state.changeValue);
        })
    }
  render() {
    return (
      <div>
        {/* <input onChange={this.handleOnChange}>Click Here</button> */}
        <input type="text" onChange={this.handleOnChange}/>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
export default EVENT_HANDELING;