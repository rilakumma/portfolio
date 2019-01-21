import React, { Component } from "react";
import "./Contact.css";
import email from "../../email.svg";
import github from "../../github.svg";
import linkedin from "../../linkedin.png";
import axios from "axios";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";

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

  submitMessage() {
    let d = new Date();
    console.log(d);
    axios.post("/api/message", { date: d, email: this.state.email, name: this.state.name, message: this.state.message }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="contact">
        <h1 className="contact-title">Thank you!</h1>

        <div className="social-box">
          <Fade delay={300}>
            <a href="https://www.linkedin.com/in/madison-walmsley/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="in" className="socials" />
            </a>
          </Fade>
          <Fade delay={400}>
            <a href="https://github.com/rilakumma" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="gh" className="socials" />
            </a>
          </Fade>
          <Fade delay={500}>
            <a href="mailto:walmsleymadi@gmail.com">
              <img src={email} alt="e" className="socials" />
            </a>
          </Fade>
        </div>

        <div className="form">
          <form className="contact-form">
            <h1 className="form-title">Leave a message</h1>
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
            <input type="submit" value="Send" className="submit" onClick={() => this.submitMessage()} />
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
