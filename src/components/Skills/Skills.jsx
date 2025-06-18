import { useState } from "react";
import SkillCard from "./SkillCard/SkillCard";
import { SKILLS } from "../../utils/Data";
import "./Skills.css";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    function handleSelectSkill(data) {
        setSelectedSkill(data);
    }

    return (
        <section className="skills-container" id="skills">
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((e) => {
                        return (
                            <SkillCard
                            key={e.title}
                            iconUrl={e.icon}
                            title={e.title}
                            isActive={selectedSkill.title === e.title}
                            onClick={() => {
                                handleSelectSkill(e);
                            }} />
                        )
                    })}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} techIcons={selectedSkill.techIcons} />
                </div>
            </div>
        </section>
    );
}

export default Skills;