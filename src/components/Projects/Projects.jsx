import React from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/Data";
import ProjectsCard from "./ProjectsCard/ProjectsCard.jsx";

const Projects = () => {
    return (
        <>
            <section className="projects-container" id="projects">
                <h5>Projects</h5>

                <div className="projects-content">
                    {PROJECTS.map((ele, index) => {
                        return (
                            <ProjectsCard key={index} title={ele.title} projectImg={ele.projectImg} tech={ele.tech} techImg={ele.techImg} />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Projects;