import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>{this.props.num}</div>
    )
  }
}

export default Child