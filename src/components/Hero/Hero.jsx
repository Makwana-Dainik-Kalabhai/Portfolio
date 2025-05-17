import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h2>Hey, I am a</h2>
                <h3><ReactTyped strings={["Web Designer", "FronEnd Developer", "BackEnd Developer", "UI/UX Designer", "Problem Solver"]} typeSpeed={40} loop /></h3>
                <p>Passionate Full-Stack Developer | Trandforming ideas in virtual world | Visually Stunning Web Solutions</p>
            </div>

            <div className="hero-img">
                <div>
                    <img src={(process.env.PUBLIC_URL)+"/assets/hero.jpg"} alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src={(process.env.PUBLIC_URL)+"/assets/techImg/react.svg"} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={(process.env.PUBLIC_URL)+"/assets/techImg/html.svg"} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={(process.env.PUBLIC_URL)+"/assets/techImg/css.svg"} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={(process.env.PUBLIC_URL)+"/assets/techImg/javascript.svg"} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;