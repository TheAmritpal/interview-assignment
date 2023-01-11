import { Link } from "@tanstack/react-location";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
