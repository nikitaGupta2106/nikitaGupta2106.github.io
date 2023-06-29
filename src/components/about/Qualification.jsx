import React, { useState } from "react";
import "./qulaification.css";
const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div
          className={
            toggle === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          //   onClick={() => toggleTab(1)}
        >
          <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
          Education
        </div>
        <div
          className={
            toggle === 2
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          //   onClick={() => toggleTab(2)}
        >
          {/* <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
          Experience */}
        </div>
      </div>
      <div className="qualifications__sections">
        <div
          className={
            toggle === 1
              ? "qualifications__content qualifications__content-active"
              : "qualifications__content"
          }
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualifiaction__title">
                FULL STACK WEB DEVELOPEMENT{" "}
              </h3>
              <span className="qualifiaction__subtitle">MASAI SCHOOL</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2022 - present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualifiaction__title">LLM</h3>
              <span className="qualifiaction__subtitle">DAVV UNIVERSITY</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2018 - 2020
              </div>
            </div>

            <div>
              <h3 className="qualifiaction__title">LLB </h3>
              <span className="qualifiaction__subtitle">
                BHARTI VIDHYAPEETH UNIVERSITY
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2015 - 2018
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
        <div
          className={
            toggle === 2
              ? "qualifications__content qualifications__content-active"
              : "qualifications__content"
          }
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualifiaction__title"></h3>
              <span className="qualifiaction__subtitle"></span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualifiaction__title"></h3>
              <span className="qualifiaction__subtitle"></span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
