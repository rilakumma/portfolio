import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="hello">hello,</h1>
        <h2 className="intro">my name is Madi Walmsley</h2>
        <p>
          i'm a <span className="my-name">full stack web developer</span> in phoenix, arizona.
        </p>
      </div>
    );
  }
}
