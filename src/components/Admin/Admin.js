import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    axios.get("/api/admin/").then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  render() {
    const showMessages = this.state.messages.map(message => {
      return (
        <div>
          <h1>{message.name}</h1>
          <h2>{message.email}</h2>
          <p>{message.message}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>ADMIN PAGE~~~~~~</h1>
        <div>{showMessages}</div>
      </div>
    );
  }
}
