import React, { Component } from "react";
import "./About.css";
import reacticon from "./../../logo.svg";
import js from "./../../js.jpg";
import css3 from "./../../css3.png";
import html from "./../../html.png";
import node from "./../../node.png";
import postgr from "./../../postgr.png";
import reduxpng from "./../../redux.png";
import sassy from "./../../sass.png";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about">
          <div className="about-me">
            <h1>About Me</h1>
            <div>
              I'm a full-stack Web Developer based in Phoenix, AZ, who has a passion for design and learning. I specialize in React,
              Javascript, Node, HTML, CSS, Redux, and PostgreSQL. I love to create and design useful applications that provide the best user
              experience. I am currently seeking full-time work where I can put my skills to good use.
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
          <div>
            <img src={reacticon} width="200" alt="" />
            <img src={js} width="130" alt="" />
            <img src={css3} width="150" alt="" />
            <img src={html} width="120" alt="" />
            <img src={node} width="150" alt="" />
            <img src={postgr} width="150" alt="" />
            <img src={reduxpng} width="150" alt="" />
            <img src={sassy} width="150" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
