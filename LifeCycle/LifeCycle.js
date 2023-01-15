import React, { Component } from 'react'
//LifeCycle constructor->render->componentDidMount
//Update shouldComponentUpdate->render->componenetUpdate
export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('Constructor');

        this.state={
            Count: 0
        };
    }
shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true;
}
componentDidMount(){
    console.log('componentDidMount')
}
componentDidUpdate(){
    console.log('componentDidUpdate');
}
handleIncreement=()=>{
    this.setState({
        Count: this.state.Count+1
    });
}
  render() {
    {console.log("Render")}
    return (
      <>
        <h1>
        Counter: {this.state.Count}
        </h1>
        <button onClick={this.handleIncreement}>+</button>
      </>
    )
  }
}
