import "./ProjectModal.css";

export const ProjectModal = ({ ele, setModal }) => {

    const { title, projectImg, url, source, skills, tech, techIcons } = ele;

    return (
        <div className="modal-container">
            <div className="project-modal">
                <h5>{title}</h5>
                <i className="fa-solid fa-close close-modal" onClick={() => setModal(false)}></i>

                <div className="project-img">
                    <span className="badge">{tech}</span>
                    <a href={url} target="_blank">
                        {(title === "Food Spoilage Detection - IOT based project") ?
                            <iframe src="https://drive.google.com/file/d/1Cu3xaBNZ6fwVpPovwzKYxu6_AbSTWA96/preview" allow="autoplay" allowfullscreen style={{ width: "100%", height: "55vh", borderRadius: "1.65rem" }}></iframe>
                            : <img src={process.env.PUBLIC_URL + projectImg} alt={title} />}
                    </a>
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

                <button><a href={url} target="_blank">Preview</a></button>
                <button><a href={source} target="_blank">Source</a></button>
            </div>
        </div>
    );
}