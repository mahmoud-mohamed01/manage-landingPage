import React from "react";
import "./Footer.css";
import facebookicon from "../../Assets/images/icon-facebook.svg";
import painteresticon from "../../Assets/images/icon-pinterest.svg";
import instaicon from "../../Assets/images/icon-instagram.svg";
import twittericon from "../../Assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1>manage</h1>
        <div className="icons">
          <img src={facebookicon} alt="" />
          <img src={twittericon} alt="" />
          <img src={painteresticon} alt="" />
          <img src={instaicon} alt="" />
        </div>
      </div>

      <div className="links-box">
        <div className="link-list">
          <ul>
            <li>Home</li>
            <li> Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="link-list">
          <ul>
            <li>Carrers</li>
            <li>Community</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="search">
        <div>
          <input type="text" />
          <button>Go</button>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
