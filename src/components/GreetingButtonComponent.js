import React, { Component } from 'react'

export class GreetingButtonComponent extends Component {
    constructor(props){
        super(props);
        this.state = {greeting: "world"}
        this.personalGreeting = this.personalGreeting.bind(this);
    }

    personalGreeting() {
        this.setState({greeting: this.props.name})
    }

  render() {
    return (
      <div>
        <h2>Hello {this.state.greeting}</h2>
        <button onClick={()=> this.personalGreeting()}>Click for personal greeting</button>
      </div>
    )
  }
}

export default GreetingButtonComponent