import React, { Component } from "react";
import "./Projects.scss";
import Fade from "react-reveal/Fade";
import PicSlider from "./Slider";


// mucci pictures
import mucciHome from "./pompom/mucci-home.png";
import home from './pompom/homepage.png';
import homeModal from './pompom/home-modal.png';
import itemView from './pompom/item-view.png';
import homeMid from './pompom/home-mid.png';
import dresses from './pompom/dress-view.png';
import account from './pompom/my-account.png';

//pompom pictures
import pomhome from "./pompom/pomhome.png";
import pomdash from './pompom/pomdash.png';
import profile from './pompom/profile.png';
import upload from './pompom/upload.png';



export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      modalInfo: [[{pic: pomhome}, {pic: pomdash}, {pic: profile}, {pic: upload}],[{pic: home},{pic: homeMid},{pic: homeModal}, {pic: account}, {pic: dresses}, {pic: itemView}]],
      modal: {}
    };
  }

  toggler = id => this.setState({ modal: this.state.modalInfo[id], toggle: !this.state.toggle });

  render() {
    console.log('modal', this.state.modal)
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
              <img src={pomdash} alt="pompom" className="pompom-dash" onClick={() => this.toggler(0)} />
            </div>
          </Fade>
        </div>
        {/* {this.state.toggle && <Modal close={this.toggler} pix={[{ pic: home }, { pic: homeMid }, { pic: homeModal }, { pic: account }, { pic: dresses }, { pic: itemView }]} />} */}

        <div className="proj-two">
          <div className="computer">
            <Fade duration={1500}>
              <div className="boxy" onClick={() => this.toggler(1)}>
                <img src={mucciHome} alt="project two home page" className="mucci-home" />
              </div>
            </Fade>
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
        {this.state.toggle && <Modal close={this.toggler} pix={ this.state.modal } />}
      </div>
    );
  }
}
class Modal extends Component {
  render() {
    console.log(this.props.close);
    return (
      <div className="modal">
        <div className="modal-container">
          <div onClick={() => this.props.close()} className="x-out">
            &times;
          </div>
          <div className="modal-content">
            {/* <PicSlider pics={[{ pic: pompom }, { pic: mucciHome }]} /> */}
            <PicSlider pics={this.props.pix} />
          </div>
        </div>
      </div>
    );
  }
}
