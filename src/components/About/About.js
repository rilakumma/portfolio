import React, { Component } from "react";
import "./About.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import reacticon from "./../../darkreact.png";
import js from "./../../javascript.png";
import css3 from "./../../drkcss.png";
import html from "./../../HTMLblack.png";
import node from "./../../nodejsblk.png";
import postgr from "./../../darkpostgr.png";
import reduxpng from "./../../drkredux.png";
import sassy from "./../../blksass.png";
import me from "./profesh.png";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about">
          <h1 className="about-title">about me</h1>
          <div className="about-me">
            <div className="bio">
              <Fade bottom duration={2000}>
                <img src={me} alt="madi walmsley" className="madi" />
              </Fade>
              <Fade right duration={2500}>
                <p className="bio-text">
                  I'm a full stack web developer with a passion for design. I love learning new things and keeping up with the latest
                  technologies to grow my toolbox. I'm experienced working with a team using excellent project management skills, but I also
                  do well working on projects on my own. I build web applications that provide an enjoyable user experience, while being
                  clean and efficient behind the scenes.
                  <div>&hearts;</div>
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="skills">
          <h1 className="skilled-in">skills</h1>
          <div className="skills-box">
            <Bounce delay={500}>
              <div className="icon">
                <img src={js} width="130" alt="" />
                <p>Javascript</p>
              </div>
            </Bounce>
            <Bounce delay={600}>
              <div className="icon">
                <img src={reacticon} width="135" alt="" />
                <p>ReactJS</p>
              </div>
            </Bounce>
            <Bounce delay={750}>
              <div className="icon">
                <img src={reduxpng} width="120" alt="" />
                <p>Redux</p>
              </div>
            </Bounce>
            <Bounce delay={850}>
              <div className="icon">
                <img src={css3} width="110" alt="" />
                <p>CSS</p>
              </div>
            </Bounce>
            <Bounce delay={950}>
              <div className="icon">
                <img src={html} width="120" alt="" />
                <p>HTML</p>
              </div>
            </Bounce>
            <Bounce delay={1050}>
              <div className="icon">
                <img src={sassy} width="120" alt="" />
                <p>Sass</p>
              </div>
            </Bounce>
            <Bounce delay={1150}>
              <div className="icon">
                <img src={node} width="120" alt="" />
                <p>NodeJS</p>
              </div>
            </Bounce>

            <Bounce delay={1250}>
              <div className="icon">
                <img src={postgr} width="120" alt="" />
                <p>PostgreSQL</p>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    );
  }
}
