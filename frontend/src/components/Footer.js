import React, { Component } from "react";

import facebook from "../../src/assets/facebook.svg";
import twitter from "../../src/assets/twitter.svg";
import google from "../../src/assets/googleplus.svg";
import instagram from "../../src/assets/instagram.svg";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-top-container">
          <div className="footer-top-left-box">
            <ul className="footer-list-box">
              <li>About Us</li>
              <li>Press</li>
              <li>Blog</li>
              <li>iOS</li>
              <li>Android</li>
            </ul>
          </div>
          <div className="footer-top-right-box">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={google} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="footer-bottom-container">
          <p>© Copyright Luna 2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
