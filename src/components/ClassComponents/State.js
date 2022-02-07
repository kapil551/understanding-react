import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();

    this.state = {
      message: "Welcome visitor",
    };
  }

  handleMessage = () => {
      this.setState({
          message: 'Thank you for subscribing'
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleMessage()}>Subscribe</button>
      </div>
    );
  }
}
