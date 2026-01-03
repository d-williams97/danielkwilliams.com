import { React, useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <a
        id="a1"
        href="#header"
        className={activeNav === "#header" ? "active" : ""}
        onClick={() => setActiveNav("#header")}
        data-tooltip="Home"
        aria-label="Navigate to Home section"
      >
        <AiOutlineHome />
      </a>
      <a
        id="a2"
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
        data-tooltip="About"
        aria-label="Navigate to About section"
      >
        <AiOutlineUser />
      </a>
      <a
        id="a3"
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
        data-tooltip="Experience"
        aria-label="Navigate to Experience section"
      >
        <BsBook />
      </a>
      <a
        id="a4"
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
        data-tooltip="Portfolio"
        aria-label="Navigate to Portfolio section"
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        id="a5"
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
        data-tooltip="Contact"
        aria-label="Navigate to Contact section"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
