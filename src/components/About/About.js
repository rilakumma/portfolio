import React, { Component } from "react";
import "./About.css";
import reacticon from "./../../darkreact.png";
import js from "./../../javascript.png";
import css3 from "./../../drkcss.png";
import html from "./../../HTMLblack.png";
import node from "./../../nodejsblk.png";
import postgr from "./../../darkpostgr.png";
import reduxpng from "./../../drkredux.png";
import sassy from "./../../blksass.png";

export default class About extends Component {
  render() {
    console.log(window.scrollTo(200, 200));
    return (
      <div className="about-container">
        <div className="about">
          <div className="about-me">
            <h1>About Me</h1>
            <div>
              {/* I'm a full-stack Web Developer based in Phoenix, AZ, who has a passion for design and learning. I specialize in React,
              Javascript, Node, HTML, CSS, Redux, and PostgreSQL. I love to create and design useful applications that provide the best user
              experience. I am currently seeking full-time work where I can put my skills to good use. */}
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skills-box" ref="hi">
            <img src={reacticon} width="135" alt="" className="logo" />
            <img src={js} width="130" alt="" />
            <img src={css3} width="110" alt="" />
            <img src={html} width="120" alt="" />
            <img src={node} width="120" alt="" />
            <img src={postgr} width="120" alt="" />
            <img src={reduxpng} width="120" alt="" />
            <img src={sassy} width="120" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
