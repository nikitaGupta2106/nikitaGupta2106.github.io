import React from "react";
import "./../about/about.css";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills section " id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical skill</span>
      <div className="skills__container container grid">
        <div className="skill__tech grid">
          <div className="skill__box skills-card">
            <i class="bx bxl-html5 skills-card-img"></i>
            <h3 className="skill__title skills-card-name">HTML</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-css3 skills-card-img"></i>
            <h3 className="skill__title skills-card-name">CSS</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-javascript skills-card-img"></i>
            <h3 className="skill__title skills-card-name">JavaScript</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-react skills-card-img"></i>
            <h3 className="skill__title skills-card-name">React</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-redux skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Redux</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-java skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Java</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-netlify skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Netlify</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxl-github skills-card-img"></i>
            <h3 className="skill__title skills-card-name">GitHUb</h3>
          </div>
        </div>
      </div>
      <span className="section__subtitle">My Soft skill</span>
      <div className="skills__container container grid">
        <div className="skill__soft grid">
          <div className="skill__box skills-card">
            <i class="bx bxs-bulb skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Problem Solving</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxs-quote-alt-right skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Critical Thinking</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bx-recycle skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Adaptability</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bxs-conversation skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Communication</h3>
          </div>
          <div className="skill__box skills-card">
            <i class="bx bx-support skills-card-img"></i>
            <h3 className="skill__title skills-card-name">Collaboration</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
