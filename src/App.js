import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my portfolio</h1>
        <div>
          <button onClick={() => scrollToComponent(this.refs.home)}>Home</button>
          <button onClick={() => scrollToComponent(this.refs.about, { offset: 0, align: "top", duration: 1000 })}>About</button>
          <button onClick={() => scrollToComponent(this.refs.contact, { offset: 50, align: "top", duration: 1000 })}>Contact</button>
        </div>
        <Home ref="home" />
        <About ref="about" />
        <Contact ref="contact" />
      </div>
    );
  }
}

export default App;
