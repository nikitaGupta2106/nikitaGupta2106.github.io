import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/nikita-gupta-a35434a4/"
        className="home__social-icon"
        id="contact-linkedin"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/nikitaGupta2106"
        className="home__social-icon"
        id="contact-github"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://wa.me/9822797872"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
