import React, { useState } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/Data";

const Projects = () => {
    let [index, setIndex] = useState(0);

    return (
        <>
            <section className="projects-container" id="projects">
                <h5>Projects</h5>

                <div className="projects-content">
                    <div className="projects-info">
                        <h6>{PROJECTS[index].title} ({PROJECTS[index].tech})</h6>

                        <div className="projects-info-content">
                            <p>Skills Used:</p>
                            <ul>
                                {PROJECTS[index].skills.map((sk) => {
                                    return (
                                        <li>{sk}</li>
                                    )
                                })}
                            </ul>
                            <div className="icons">
                                {PROJECTS[index].techIcons.map((val, ind) => {
                                    return <div>
                                        <img src={val} alt="img not found" />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="projects-img">
                        <a href={PROJECTS[index].url}>
                            <img src={PROJECTS[index].projectImg} alt="" />
                        </a>
                    </div>
                </div>
                <div className="btns">
                    <button className="prev-btn" onClick={() => { setIndex(index - 1); }} disabled={index > 0 ? false : true}><i className="fa-solid fa-arrow-left"></i></button>.....
                    <button className="next-btn" onClick={() => { setIndex(index + 1); }} disabled={index < PROJECTS.length - 1 ? false : true}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </section>
        </>
    );
}

export default Projects;