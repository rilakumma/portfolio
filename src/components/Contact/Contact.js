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
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    console.log(this.state.message);
    return (
      <div className="contact">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="holder">
          <div className="left">
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
            <h1>Leave a message</h1>
            <input
              value={this.state.email}
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="Email"
              className="input-line"
              required
            />
            <input
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.handleChange}
              placeholder="Name"
              className="input-line"
              required
            />
            <textarea
              value={this.state.message}
              name="message"
              type="text"
              onChange={this.handleChange}
              placeholder="Message"
              className="input-message"
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}
