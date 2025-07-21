import "./ProjectModal.css";

export const ProjectModal = ({ ele, setModal }) => {

    const { title, projectImg, url, github, skills, tech, techIcons } = ele;

    return (
        <div className="modal-container">
            <div className="project-modal">
                <h5>{title}</h5>
                <i className="fa-solid fa-close close-modal" onClick={() => setModal(false)}></i>

                <div className="project-img">
                    <span className="badge">{tech}</span>
                    <a href={url}><img src={process.env.PUBLIC_URL + projectImg} /></a>
                </div>

                <div className="skills-grid">
                    {techIcons.map((e, i) => {
                        return (
                            <div className="skill">
                                <img src={process.env.PUBLIC_URL + e} alt={skills[i]} />
                                <span>{skills[i]}</span>
                            </div>
                        )
                    })}
                </div>

                <button><a href={url}>View</a></button>
                <button><a href={github}>Github</a></button>
            </div>
        </div>
    );
}