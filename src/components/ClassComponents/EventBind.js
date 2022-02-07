import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // Binding Event Handler
    this.clickHandlerFunction = this.clickHandlerFunction.bind(this);
  }

  // using arrow function does not require a binding
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  clickHandlerFunction() {
    this.setState({
      message: "Goodbye tata!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Click Arrow</button>
        <br />
        <button onClick={this.clickHandlerFunction}> Click Function</button>
      </div>
    );
  }
}

export default EventBind;
