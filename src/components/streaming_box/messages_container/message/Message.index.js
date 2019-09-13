import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <li className="card animated fadeIn delay-1s">
        <div className="avatar">
          {" "}
          <img src={this.props.image} alt="avatar" />
        </div>
        <div className="messageBody">
          <div className="name">{this.props.name}</div>
          <div className="message">{this.props.message}</div>
        </div>
      </li>
    );
  }
}

export default Message;
