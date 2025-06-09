import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo"><img src={(process.env.PUBLIC_URL)+"/assets/myPhoto.jpg"} alt="img not found" />It's Coding Time</div>
          <ul>
            <li>
              <a href="#hero" className="menu-item">
                HOME
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-item">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                CONTACT ME
              </a>
            </li>
            <a href="#contact" className="contact-btn">
              Hire Me
            </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons material-symbols-outlined" style={{fontSize: "1.8rem"}}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
