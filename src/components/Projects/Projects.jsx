import { useState } from "react";
import { PROJECTS } from "../../utils/Data"
import "./Projects.css";
import { ProjectModal } from "./ProjectModal/ProjectModal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Projects = () => {

    const [projectSize, setProjectSize] = useState(8);
    const [modal, setModal] = useState(-1);

    return (
        <section className="projects-container" id="projects">
            <div className="projects-header">
                <h5>Projects ({PROJECTS.length})</h5>
            </div>

            <div className="projects-grid">
                {PROJECTS.map((ele, ind) => {
                    return (
                        <>
                            {ind < projectSize &&
                                <div className="project-card" onClick={() => setModal(ind)} key={ind}>
                                    <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false}>
                                        {ele.projectImg.map((e) => (
                                            <div key={e}>
                                                <img src={process.env.PUBLIC_URL + e} alt={ele.title} />
                                            </div>
                                        ))
                                        }
                                    </Carousel>
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