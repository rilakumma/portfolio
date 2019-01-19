import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content" ref="home">
          <h1 className="hello">Hello,</h1>
          <h2 className="intro">My name is Madi Walmsley.</h2>
          <p>
            I'm a <span className="my-name">full stack web developer</span> in Phoenix, Arizona.
          </p>
        </div>
      </div>
    );
  }
}
