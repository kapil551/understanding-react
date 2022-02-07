import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // this will work but is the wrong way of doing
  incrementOneWrong = () => {
    this.setState(
      // object
      {
        count: this.state.count + 1,
      },
      // callback function
      () => {
        console.log("callback value", this.state.count);
      }
    );
  };

  // correct way of incrementing -> i.e. icrementing the state using the previous state
  incrementOneCorrect = () => {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback value", this.state.count);
      }
    );
  };

  // this behavior is beacuse react may group multiple setState calls into a single update for better performance.
  incrementFiveWrong() {
    this.incrementOneWrong();
    this.incrementOneWrong();
    this.incrementOneWrong();
    this.incrementOneWrong();
    this.incrementOneWrong();
  }

  incrementFiveCorrect2() {
    this.incrementOneCorrect();
    this.incrementOneCorrect();
    this.incrementOneCorrect();
    this.incrementOneCorrect();
    this.incrementOneCorrect();
  }

  incrementFiveCorrect1() {
    this.setState(
      {
        count: this.state.count + 5,
      },
      () => {
        console.log("Callback Value", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <div> count : {this.state.count}</div>
        <button onClick={() => this.incrementOneWrong()}>
          Increment One Wrong
        </button> <br/>
        <button onClick={() => this.incrementOneCorrect()}>
          Increment One Correct
        </button> <br/>
        <button onClick={() => this.incrementFiveWrong()}>
          Increment Five Wrong
        </button> <br/>
        <button onClick={() => this.incrementFiveCorrect1()}>
          Increment Five Correct
        </button> <br/>
        <button onClick={() => this.incrementFiveCorrect2()}>
          Increment Five Correct
        </button>
      </div>
    );
  }
}

export default SetState;
