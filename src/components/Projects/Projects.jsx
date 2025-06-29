import { useState } from "react";
import { PROJECTS } from "../../utils/Data"
import "./Projects.css";
import { ProjectModal } from "./PorjectModal/ProjectModal";

export const Projects = () => {

    const [projectSize, setProjectSize] = useState(8);
    const [modal, setModal] = useState(-1);

    return (
        <section className="projects-container">
            <div className="projects-header">
                <h5>Projects ({PROJECTS.length})</h5>
            </div>

            <div className="projects-grid">
                {PROJECTS.map((ele, ind) => {
                    return (
                        <>
                            {ind < projectSize &&
                                <div className="project-card" onClick={() => setModal(ind)} key={ind}>
                                    <img src={process.env.PUBLIC_URL + ele.projectImg} alt={ele.tech} />
                                    <span>{ele.title}</span>
                                </div>}
                            {modal === ind && <ProjectModal ele={ele} setModal={setModal} key={ind} />}
                        </>
                    )
                })}
            </div>
            <button style={{ display: (projectSize >= PROJECTS.length - 1) && "none" }} onClick={() => setProjectSize((prev) => (prev + 4))}>Load More</button>
        </section>
    )
}