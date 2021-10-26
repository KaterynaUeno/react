import React, { Component } from "react";

class EventAndState extends Component {
  handleClick() {
    console.log("Clicked");
  }

  handleChange() {
    console.log("user typed text");
  }

  handleSubmit(event) {
    console.log("user submited form");
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick} className="btn">
            Click me!
          </button>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter some text"
          />
        </form>
      </div>
    );
  }
}

export default EventAndState;
