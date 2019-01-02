import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Me</h1>
        <div>
          I'm a full-stack Web Developer based in Phoenix, AZ, who has a passion for design and learning. I specialize in React, Javascript,
          Node, HTML, CSS, Redux, and PostgreSQL. I love to create and design useful applications that provide the best user experience. I
          am currently seeking full-time work where I can put my skills to good use.
        </div>
        <h2>My Skills</h2>
        <div>Skills go here...</div>
      </div>
    );
  }
}
