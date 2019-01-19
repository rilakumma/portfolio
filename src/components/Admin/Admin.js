import React, { Component } from "react";
import axios from "axios";
import "./Admin.css";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    axios.get("/api/admin").then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  render() {
    const showMessages = this.state.messages.map(message => {
      return (
        <div key={message.name} className="message-box">
          <p>date sent: {message.date}</p>
          <h1 className="new-name">name: {message.name}</h1>
          <h2 className="new-email">email: {message.email}</h2>
          <p className="new-message">message: {message.message}</p>
        </div>
      );
    });
    return <div>{/* <h1>ADMIN PAGE~~~~~~</h1>
        <div>{showMessages}</div> */}</div>;
  }
}
