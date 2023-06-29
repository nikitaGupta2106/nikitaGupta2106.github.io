import React from "react";
import resume from "../../assets/Nikita_Gupta_Resume.pdf";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">NIKITA GUPTA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skill
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#github" className="footer__link">
              Git
            </a>
          </li>
          <li>
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              className="footer__link"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/nikita-gupta-a35434a4/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/nikitaGupta2106"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github "></i>
          </a>
          <a
            href="https://wa.me/9822797872"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
