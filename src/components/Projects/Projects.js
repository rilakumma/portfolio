import React, { Component } from "react";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="proj-one">
          <h1>POMPOM</h1>
          {/* <h2>REACT | REDUX | AXIOS | MASSIVE | EXPRESS | POSTGRESQL | NODE</h2>
          <ul>
            <li>• A site to display Sanrio collectables - personal project.</li>
            <li>• Full CRUD web app that allows user to upload and display their collectables.</li>{" "}
            <li>• Front end built in React with Redux.</li>
            <li>• Log in with Auth0.</li>
            <li>• Implemented Cloudinary to upload item photos.</li>
            <li>• Http requests made with Axios.</li>
            <li>• Backend runs on Node and uses Express as a server and Massive to connect with PostgreSQL database.</li>
          </ul> */}
        </div>
        <div className="proj-two">
          <h1>GUCCI CLONE</h1>
          {/* <h2>REACT | CONTEXTAPI | FIREBASE | SASS | NODE</h2>
          <ul>
            <li>• Used excellent team work skills to create app with a group.</li>
            <li>• Collaborated with team using GitHub, Trello, daily standup meetings and Slack. </li>
            <li>• Database and user log in managed with Firebase. </li>
            <li>• Can view products, add to cart/favorites and checkout. </li>
            <li>• Implemented Stripe API to purchase items and Nodemailer to send a receipt.</li>
          </ul> */}
        </div>
      </div>
    );
  }
}
