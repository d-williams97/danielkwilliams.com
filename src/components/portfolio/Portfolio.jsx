import React from "react";
import "./Portfolio.css";
import VIDEO1 from "../../assets/scrybe-preview.mp4";
import VIDEO2 from "../../assets/globe-explorer-preview.mp4";
// import IMG2 from "../../assets/CompanyDirectory.jpg";
import IMG3 from "../../assets/expenseTracker.jpg";
import IMG4 from "../../assets/PortfolioWebsite.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    title: "Scrybe AI",
    video: VIDEO1,
    github: "https://github.com/d-williams97/scrybe",
    demo: "https://scrybe-wine.vercel.app/",
    description: "Stack: Next.js, Tailwind, Node.js, LangChain.",
    description2:
      "Built in 2025, Scrybe is an AI-powered YouTube video summariser with customisable settings and timestamps. It features a chat interface for querying video content using RAG (Retrieval-Augmented Generation) technology.",
  },
  {
    id: 2,
    title: "Globe Explorer",
    video: VIDEO2,
    github: "https://github.com/d-williams97/React-Gazetteer",
    demo: "https://react-gazetteer-client.vercel.app/",
    description: "Stack: React, Bootstrap, Node.js, Express.",
    description2:
      "Built in 2023, Globe Explorer is an interactive geographical reference tool for exploring countries, cities, airports, and more.",
  },
  // {
  //   id: 3,
  //   title: "Company Directory",
  //   image: IMG2,
  //   github: "https://github.com/d-williams97/danielWilliams/tree/main/project2",
  //   demo: "https://danielkwilliams.co.uk/company_directory/",
  //   description: "Stack: JavaScript, jQuery, PHP, Bootstrap, MySQL.",
  //   // description2: 'This repository is set to private. Please request an invite to view source code on GitHub'
  // },
  {
    id: 4,
    title: "React Expense Tracker",
    image: IMG3,
    github: "https://github.com/d-williams97/React-Expense-Tracker",
    demo: "https://expense-tracker-danielwilliams.vercel.app/",
    description: "Stack: JavaScript, React, CSS.",
    description2:
      "Built in 2023, React Expense Tracker is a simple expense tracker app that allows you to add, edit, and delete expenses.",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    image: IMG4,
    github: "https://github.com/d-williams97/danielkwilliams.com",
    demo: "https://danielwilliamsportfolio.vercel.app/",
    description: "Stack: JavaScript, React, CSS.",
  },
];

const projects = data.map((project) => {
  return (
    <SwiperSlide className="portfolio__item" key={project.id}>
      <div className="portfolio__item-image">
        {project.video ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", cursor: "pointer" }}
          >
            <video
              src={project.video}
              alt={project.title}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </a>
        ) : (
          <img src={project.image} alt={project.title} />
        )}
      </div>
      <h3 className="portfolio__title">{project.title}</h3>{" "}
      {/*PORTFOLIO PROJECT NAME*/}
      <p className="portfolio__description">{project.description}</p>
      <p className="portfolio__description2">{project.description2}</p>
      <div className="portfolio__item-cta">
        {project.github && (
          <a
            href={project.github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
        {/*link to project on github*/}
        <a
          href={project.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      <Swiper
        className="container portfolio__container"
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {projects}
      </Swiper>
    </section>
  );
};

export default Portfolio;
