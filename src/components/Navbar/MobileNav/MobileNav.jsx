import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <div className="logo">It's Coding Time</div>
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
                            <a href="/" className="menu-item">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="menu-item">
                                CONTACT ME
                            </a>
                        </li>
                        <button className="contact-btn" onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;