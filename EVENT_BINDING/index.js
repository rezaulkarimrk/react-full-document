import React, { Component } from 'react'

export default class EVENT_BINDING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.clickHandleInBind=this.clickHandleInBind.bind(this)
    }
    // handleClick =()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
    clickHandleInBind(){
        this.setState({
            count:this.state.count+1
        })
    }


    

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.handleClick}>Click On</button> */}
        {/* <button onClick={this.clickHandleInBind.bind(this)}>Click On</button> */}
        <button onClick={this.clickHandleInBind}>Click On</button>
      </div>
    )
  }
}

