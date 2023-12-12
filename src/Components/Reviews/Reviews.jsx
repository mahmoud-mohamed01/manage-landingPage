import React, { useState } from "react";
import "./Reviews.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import data from "../../data";

function Reviews() {
  const [idx, setidx] = useState(0);
  const { image, name, text } = data[idx];

  function nextPerson() {
    if (idx < data.length - 1) {
      setidx(idx + 1);
    } else {
      setidx(0);
    }
  }

  function prevPerson() {
    if (idx == 0) {
      setidx(data.length - 1);
    } else {
      setidx(idx - 1);
    }
  }

  console.log(idx);

  return (
    <React.Fragment>
      <h1 className="reviews-header">What they have said</h1>

      <div className="review-container">
        <div className="avatar">
          <img src={image} alt="" />
        </div>
        <div className="person-info">
          <h2>{name}</h2>
        </div>

        <div className="about">
          <p>{text}</p>
        </div>

        <div className="buttons">
          <button onClick={prevPerson}>
            <SlArrowLeft></SlArrowLeft>
          </button>
          <button onClick={nextPerson}>
            <SlArrowRight></SlArrowRight>
          </button>
        </div>

        <button className="btn">Get Started</button>
      </div>

      <section className="above-footer">
        <h1>
          Simplify how your team <br />
          works today
        </h1>
        <button className="btn">Get Started</button>
      </section>
    </React.Fragment>
  );
}

export default Reviews;
