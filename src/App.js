import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import scrollToComponent from "react-scroll-to-component";
import email from "./email.svg";
import github from "./github.svg";
import linkedin from "./linkedin.png";
import down from "./DownArrow.png";
import Jump from "react-reveal/Jump";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-bar">
          <ul className="header-ul">
            <li onClick={() => scrollToComponent(this.refs.home)}>Home</li>
            <li onClick={() => scrollToComponent(this.refs.about, { offset: 0, align: "top", duration: 1000 })}>About</li>
            <li onClick={() => scrollToComponent(this.refs.projects, { offset: 0, align: "top", duration: 1000 })}>Projects</li>
            <li onClick={() => scrollToComponent(this.refs.contact, { offset: 0, align: "top", duration: 1000 })}>Contact</li>
          </ul>
        </header>
        <div className="side-links">
          <ul className="link-icons">
            <li>
              <a href="https://www.linkedin.com/in/madison-walmsley/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="in" width="23" />
              </a>
            </li>
            <li>
              <a href="https://github.com/rilakumma" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="gh" width="23" />
              </a>
            </li>
            <li>
              <a href="mailto:walmsleymadi@gmail.com">
                <img src={email} alt="e" width="23" />
              </a>
            </li>
          </ul>
        </div>

        <Home ref="home" />
        <div className="scroll-down">
          <Jump delay={2000}>
            <img
              src={down}
              alt="scroll down"
              onClick={() =>
                scrollToComponent(this.refs.about, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
            />
          </Jump>
        </div>
        <About ref="about" />
        <Projects ref="projects" />
        <Contact ref="contact" />
      </div>
    );
  }
}

export default App;
