import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills, techIcons }) => {
    return (
        <>
            <div className="skills-info-card">
                <h6>{heading}</h6>

                <div className="skills-info-content">
                    {skills.map((val, ind) => {
                        return (
                            <div key={ind}>
                                <div className="skill-info">
                                    <p>{val}</p>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress"></div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="icons">
                        {techIcons.map((val, ind) => {
                            return <div key={val}>
                                <img src={(process.env.PUBLIC_URL) + val} alt="img not found" />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsInfoCard;