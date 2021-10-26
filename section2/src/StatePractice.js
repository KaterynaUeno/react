import React, { Component } from "react";

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleFocus(event) {
    this.setState({
      message: "Do you agrree with terms and conditions?",
    });
  }

  handleMouseEnter(event) {
    this.setState({
      message: "",
      imageWidth: "",
    });
  }

  imageLoad(event) {
    // console.dir(event.target);
    // this.Stata({
    if (event.target.width > 100) {
      console.log("Your image is large");
    }
    // })
  }
  render() {
    return (
      <div>
        <input onFocus={this.handleFocus} type="text" />
        <h3 onMouseEnter={this.handleMouseEnter}> {this.state.message}</h3>
        <img
          onLoad={this.imageLoad}
          src="https://images.unsplash.com/photo-1635181332719-f6da85fbb011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          alt="sunset"
        />
      </div>
    );
  }
}

export default StatePractice;
