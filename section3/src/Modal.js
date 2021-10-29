import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("test");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("component is about to be history");
    clearInterval(this.timer);
  }
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h1> {this.props.city}</h1>
          <p>
            High: {this.props.high} - Low: {this.props.low}
          </p>
          <p>
            {this.props.weather} <img src={this.props.iconUrl} alt="" />
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
