import React from "react";
import "./Experience.css";
import { BiCheck } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="services">
      <h5>What I've Achieved</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        {/* {Employment} */}
        <article className="service">
          <div className="service__head">
            <h3>Employment</h3>
          </div>

          <div className="job__div">
            <h3>Digital Marketing Executive</h3>
            <p className="description">
              {" "}
              <i>Brainlabs</i> &#9679; Jan 2022 - Mar 2023{" "}
            </p>
          </div>

          <div className="job__div">
            <h3>Charity Consultant</h3>
            <p className="description">
              <i>Fusion Movement</i> &#9679; Mar 2021 - Jan 2022{" "}
            </p>
          </div>

          <div className="job__div">
            <h3>Content and Media Officer</h3>
            <p className="description">
              <i>City Life Church</i> &#9679; Jan 2019 - Mar 2021
            </p>
          </div>
        </article>

        {/* {Education} */}
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <div className="job__div">
            <h3>Bachelor of Arts: Geography</h3>
            <p className="description">
              {" "}
              <i>University Of Southampton</i> &#9679; 2015 - 2018{" "}
            </p>
          </div>

          <div className="job__div">
            <h3>A Levels</h3>
            <p className="description">
              <i>HSDC Havant</i> &#9679; 2013 - 2015{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
