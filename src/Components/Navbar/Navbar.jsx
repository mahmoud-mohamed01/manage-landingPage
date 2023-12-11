import React, { useState } from "react";
import menu from "../../Assets/images/icon-hamburger.svg";
import "./Navbar.css";
import logo from "../../Assets/images/logo.svg";
import closeLogo from "../../Assets/images/icon-close.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className={menuOpen ? "links-container" : "links-container hide "}>
        <ul className="links">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>

      <button className="btn nav-btn">Get Started</button>

      <div className="menu-mobile">
        <img
          src={menuOpen ? closeLogo : menu}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
