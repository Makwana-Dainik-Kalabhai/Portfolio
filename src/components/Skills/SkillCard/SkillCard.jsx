import React from "react";
import "./SkillCard.css";

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
    return (
        <>
        <div className={`skill-card ${isActive?"active":""}`}
        onClick={() => {onClick()}}>
            <div className="skill-icon">
                <img src={(process.env.PUBLIC_URL)+iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
        </>
    );
}

export default SkillCard;