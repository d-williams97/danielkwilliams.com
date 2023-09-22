import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/gazetteer.jpg";
import IMG2 from "../../assets/CompanyDirectory.jpg";
import IMG3 from "../../assets/expenseTracker.jpg";
import IMG4 from "../../assets/PortfolioWebsite.jpg";



// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data = [
  {
    id: 1,
    title: "Gazetteer",
    image: IMG1,
    github: "https://github.com/d-williams97/danielWilliams/tree/main/project1",
    demo: "https://danielkwilliams.co.uk/gazetteer/",
    description: 'Stack: Javascript, jQuery, PHP, Bootstrap.',
    // description2: 'This repository is set to private. Please request an invite to view source code on GitHub'
  },
  {
    id: 2,
    title: "Company Directory",
    image: IMG2,
    github: "https://github.com/d-williams97/danielWilliams/tree/main/project2",
    demo: "https://danielkwilliams.co.uk/company_directory/",
    description: 'Stack: Javascript, jQuery, PHP, Bootstrap, MySQL.',
    // description2: 'This repository is set to private. Please request an invite to view source code on GitHub'
  },
  {
    id: 3,
    title: "React Expense Tracker",
    image: IMG3,
    github: "https://github.com/d-williams97/React-Expense-Tracker",
    demo: "https://danielkwilliams.co.uk/expense_tracker/",
    description: 'Stack: React, CSS.'
  },
  {
    id: 4,
    title: "React Portfolio Website",
    image: IMG4,
    github: "https://github.com/d-williams97/danielkwilliams.com",
    demo: "https://danielkwilliams.co.uk",
    description: 'Stack: React, CSS.'
  }
];

const projects = data.map((project) => {
  return (
    <SwiperSlide className="portfolio__item" key={project.id}>
      <div className="portfolio__item-image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3 className="portfolio__title">{project.title}</h3> {/*PORTFOLIO PROJECT NAME*/}
      <p className="portfolio__description">{project.description}</p>
      <p className="portfolio__description2">{project.description2}</p>
      <div className="portfolio__item-cta">
        <a href={project.github} className="btn" target="_blank">
          Github
        </a>
        {/*link to project on github*/}
        <a href={project.demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
        {/*link to project on webiste*/}
      </div>
    </SwiperSlide>
  );
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <Swiper className="container portfolio__container"
      modules={[Pagination, Navigation, Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >{projects}
      </Swiper>
    </section>
  );
};

export default Portfolio;
