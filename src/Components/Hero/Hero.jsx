import React from "react";
import heroimg from "../../Assets/images/illustration-intro.svg";
import "./Hero.css";

function Hero() {
  return (
    <section className="Hero-container">
      <div className="left-hero">
        <h1>
          Bring everyone <br />
          together to build <br />
          better Products
        </h1>
        <p>
          Manage makes it simple for software teams <br />
          to plan day-to-day tasks while keeping the <br />
          larger team goals in view.
        </p>
        <button className="btn">Get Started</button>
      </div>

      <div className="right-hero">
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
