import React from "react";
import "./about.css";
import Me1 from "../../assets/profile1.svg";
import AboutBox from "./AboutBox";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Me1} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I'm a IoT system and Information Engineering , focusing on buiding
              responsive and user-friendly websites. I'm excited to work with a
              company that values innovation and where I can continue to grow my
              skills.
            </p>
            <a
              href="https://drive.google.com/file/d/13CZ-eve6Nyke5B9_l4wp8y5AAL2KRHMI/view?usp=sharing"
              target="_blank"
              className="btn"
            >
              Download CV
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development </h3>
                <span className="skills_number ">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Soft-Skills</h3>
                <span className="skills_number ">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage soft-skills"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Fast-learning</h3>
                <span className="skills_number ">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage fast-learning"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
