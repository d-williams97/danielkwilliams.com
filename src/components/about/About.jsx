import React from "react";
import "./About.css";
import ME from "../../assets/daniel_headshot_1.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { LuFolders } from "react-icons/lu";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div>
            <img src={ME} alt="About" className="about__me-image" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>200+ WorldWide </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Communication</h5>
              <small>80+ Completed </small>
            </article>

            <article className="about__card">
              <LuFolders className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
          </div> */}

          <p>
            From youth work to content creation to digital marketing to software
            development, my coding journey began after collaborating with the
            UX/UI team during my digital marketing role. This experience ignited
            my interest in the world of coding. I started by completing several
            online courses and then enrolled in a bootcamp. Developing software
            is extremely rewarding, and I derive great pleasure from exercising
            the problem-solving and creative skills required to build robust and
            efficient software solutions.
          </p>
          <p>
            When I'm not coding, you can find me on the basketball court
            shooting hoops, at the local park running in a park run, or behind a
            camera creating videos with my friends or working on freelance
            projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
