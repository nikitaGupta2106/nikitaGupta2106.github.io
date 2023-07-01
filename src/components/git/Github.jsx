import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./github.css";

const GitHub = () => {
  return (
    <section className="section" id="github">
      <h2 className="section__title">GitHub</h2>
      <span className="section__subtitle">Check out my code</span>

      <div className="github__container container">
        <div className="github__calendar">
          <GitHubCalendar username="nikitaGupta2106" />
        </div>

        {/* <div class="github-Stats">
          <img
            // id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=nikitaGupta2106"
            alt="streaks"
          />
          <img
            // id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=nikitaGupta2106&show_icons=true"
            alt="stats"
          />
          <img
            // id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikitaGupta2106&hide_progress=true"
            alt="language"
          />
        </div> */}

        <div className="github__stats">
          <div className="github__stat">
            {/* <iframe
              title="GitHub Streak"
              src="https://github-readme-streak-stats.herokuapp.com?user=nikitaGupta2106&theme=transparent"
            ></iframe> */}
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=nikitaGupta2106"
              alt="streaks"
            />
          </div>
          <div className="github__stat">
            {/* <iframe
              title="GitHub Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikitaGupta2106&theme=transparent"
            ></iframe> */}
            <img
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api?username=nikitaGupta2106&show_icons=true"
              alt="stats"
            />
          </div>
          <div className="github__stat">
            {/* <iframe
              title="GitHub Stats"
              src="https://github-readme-stats.vercel.app/api?username=nikitaGupta2106&show_icons=true&&theme=transparent"
            ></iframe> */}
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikitaGupta2106&hide_progress=true"
              alt="language"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
