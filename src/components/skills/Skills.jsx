import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
// import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
// import { BiLogoJavascript, BiLogoJquery} from "react-icons/bi";


const Skills = () => {
  return (
    <section id="">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>jQuery</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* {end of frontend } */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NodeJS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Express</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
