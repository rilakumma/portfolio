import React, { Component } from "react";
import "./Projects.scss";
import mucciHome from "./pompom/mucci-home.png";
import pompom from "./pompom/pompom.png";
import Fade from "react-reveal/Fade";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <h1 className="projects">projects</h1>
        <div className="proj-one">
          <div className="text">
            <h1 className="proj-title">POMPOM</h1>
            <h2 className="techs">REACT | REDUX | AXIOS | MASSIVE | EXPRESS | POSTGRESQL | NODE</h2>
            <ul>
              <li>• A site to display Sanrio collectables - personal project.</li>
              <li>• Full CRUD web app that allows user to upload and display their collectables.</li>{" "}
              <li>• Front end built in React with Redux.</li>
              <li>• Log in with Auth0.</li>
              <li>• Implemented Cloudinary to upload item photos.</li>
              <li>• Http requests made with Axios.</li>
              <li>• Backend runs on Node and uses Express as a server and Massive to connect with PostgreSQL database.</li>
            </ul>
            <a href="http://pompom.fun">
              <button className="live-btn">LIVE SITE</button>
            </a>
          </div>
          <Fade duration={1500}>
            <div className="computer">
              <img src={pompom} alt="pompom" className="pompom-dash" />
            </div>
          </Fade>
        </div>
        <div className="proj-two">
          <div className="computer">
            <div className="boxy">
              <img src={mucciHome} alt="project two home page" className="mucci-home" />
            </div>
          </div>
          <div className="text">
            <h1 className="proj-title">GUCCI CLONE</h1>
            <h2 className="techs">REACT | CONTEXTAPI | FIREBASE | SASS | NODE</h2>
            <ul>
              <li>• Used excellent team work skills to create app with a group.</li>
              <li>• Collaborated with team using GitHub, Trello, daily standup meetings and Slack. </li>
              <li>• Database and user log in managed with Firebase. </li>
              <li>• Can view products, add to cart/favorites and checkout. </li>
              <li>• Implemented Stripe API to purchase items and Nodemailer to send a receipt.</li>
            </ul>
            <a href="http://mucci.xyz">
              <button className="live-btn">LIVE SITE</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-content">content....</div>
        </div>
      </div>
    );
  }
}
