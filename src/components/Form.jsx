import React, { Fragment, Component } from "react";
import Input from "./Input";
import Navbar from "./Navbar";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        Name: "",
        Email: "",
        Mobile: "",
        City: "",
      },
    };
  }

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.values);
  };

  handleInputChange = (event) => {
    let name = event.target.name;
    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: event.target.value },
    }));
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="main">
          <div className="content">
            <form>
              <Input
                name="Name"
                value={this.state.values.Name}
                onChange={this.handleInputChange}
              />
              <Input
                name="Email"
                value={this.state.values.Email}
                onChange={this.handleInputChange}
              />
              <Input
                name="Mobile"
                value={this.state.values.Mobile}
                onChange={this.handleInputChange}
              />
              <Input
                name="City"
                value={this.state.values.City}
                onChange={this.handleInputChange}
              />
              <button className="counterBtn mt" type="submit" onClick={this.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
