import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div className="formGroup">
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
