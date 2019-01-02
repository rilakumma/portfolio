import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      message: ""
    };
  }
  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="contact">
        <h1>Get In Touch</h1>
        <div>
          <h2>I'd love to hear from you!</h2>
          <h3>linkedin</h3>
          <a href="https://www.linkedin.com/in/madison-walmsley/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/madison-walmsley/
          </a>
          <h3>email me</h3>
          <address>
            <a href="mailto:walmsleymadi@gmail.com">walmsleymadi@gmail.com</a>
          </address>
          <h3>github</h3>
          <a href="https://github.com/rilakumma" target="_blank" rel="noopener noreferrer">
            https://github.com/rilakumma
          </a>
        </div>
        <form className="contact-form">
          <input value={this.state.email} name="email" type="email" onChange={this.handleChange} placeholder="Email" />
          <input value={this.state.email} name="name" type="name" onChange={this.handleChange} placeholder="Name" />
          <input value={this.state.email} name="message" type="message" onChange={this.handleChange} placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
