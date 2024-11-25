import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = (props) => {
    return (
        <div className="projects-card">
            <h5>{props.title}</h5>
            <hr />
            <img src={props.projectImg} alt="" />
            <div className="projects-card-info">
            </div>
        </div>
    )
}

export default ProjectsCard;