import React, { Fragment, Component } from "react";
import Navbar from "./Navbar";

export default class Form extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="counter"></div>
      </Fragment>
    );
  }
}
