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
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        id="a1"
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />{" "}
      </a>
      <a
        id="a2"
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />{" "}
      </a>
      <a
        id="a3"
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BsBook />{" "}
      </a>
      <a
        id="a4"
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <AiOutlineFolderOpen />{" "}
      </a>
      <a
        id="a5"
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />{" "}
      </a>
    </nav>
  );
};

export default Nav;
