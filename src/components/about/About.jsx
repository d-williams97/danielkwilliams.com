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
          <p>
            I’m a frontend engineer with 2+ years of experience building,
            maintaining, and deploying scalable production software. With
            previous experience in digital marketing and content management, I
            bring a user-focused mindset and strong attention to design. I’m big
            on implementing frontend best practices, leveraging AI to improve
            productivity, continuous growth as an engineer, and having a blast
            building cool applications!
          </p>
          <p>
            In my free time, you’ll usually find me at a local parkrun, on the
            basketball court shooting hoops, behind a camera creating videos or
            coding personal projects.
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
