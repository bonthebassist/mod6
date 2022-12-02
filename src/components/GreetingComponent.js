import React, { Component } from 'react'

export class GreetingComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
      </div>
    )
  }
}

export default GreetingComponent