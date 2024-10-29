import React, { useState } from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills, techIcons }) => {
    // Active Skill Bassed on icon
    const [activeSkill, setActiveSkill] = useState(-1);
    return (
        <>
            <div className="skills-info-card">
                <h6>{heading}</h6>

                <div className="skills-info-content">
                    {skills.map((val, ind) => {
                        if (activeSkill === -1) {
                            return (
                                <React.Fragment key={`skill_${ind}`}>
                                    <div className="skill-info">
                                        <p>{val.skill}</p>
                                        <p className="percentage">{val.percentage}</p>
                                    </div>
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress" style={{ width: val.percentage }}></div>
                                    </div>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <React.Fragment key={`skill_${ind}`}>
                                    <div className={`${activeSkill === ind ? "active-skill" : "unactive-skill"}`}>
                                        <div className="skill-info">
                                            <p>{val.skill}</p>
                                            <p className="percentage">{val.percentage}</p>
                                        </div>
                                        <div className="skill-progress-bg">
                                            <div className="skill-progress" style={{ width: val.percentage }}></div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                    <div className="icons">
                        {techIcons.map((val, ind) => {
                            return <div key={val} onMouseEnter={() => { setActiveSkill(ind) }} onMouseLeave={() => { setActiveSkill(-1) }}>
                                <img src={val} alt="img not found" />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsInfoCard;