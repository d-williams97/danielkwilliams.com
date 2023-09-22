import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/danielw2.jpg"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__Container">
        <h5>Hello I'm</h5>
        <h1>Daniel Williams</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="ME">
          <img src={ME} alt="" className="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
