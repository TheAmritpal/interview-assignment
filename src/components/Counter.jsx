import React, { Component } from "react";
import Navbar from "./Navbar";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  updateCounter(type) {
    if (type === "add") {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (type === "subtract") {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">
          <div className="content">
            <button className="counterBtn" onClick={() => this.updateCounter("add")}>
              +
            </button>
            <p>{this.state.counter}</p>
            <button className="counterBtn" onClick={() => this.updateCounter("subtract")}>
              -
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
