import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">
          <p>Counter and Form </p>
        </div>
      </React.Fragment>
    );
  }
}
