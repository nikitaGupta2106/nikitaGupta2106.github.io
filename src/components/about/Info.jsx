import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3+ projects</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Coding</h3>
        <span className="about__subtitle">1000+ hr</span>
      </div>
      <div className="about__box">
        <i class="bx bx-message-square-check about__icon"></i>
        <h3 className="about__title">DSA</h3>
        <span className="about__subtitle">500+ problems solved(OJ)</span>
      </div>
    </div>
  );
};

export default Info;
