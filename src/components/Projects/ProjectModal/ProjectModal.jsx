import "./ProjectModal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export const ProjectModal = ({ ele, setModal }) => {

    const { title, projectImg, video, url, source, skills, tech, techIcons } = ele;

    return (
        <div className="modal-container">
            <div className="project-modal">
                <i className="fa-solid fa-xmark close-modal" onClick={()=>setModal(false)}></i>

                <h5>{title}</h5>

                <div className="project-img">
                    <span className="badge">{tech}</span>

                    <Carousel showThumbs={false}>
                        {projectImg.map((e) => (
                            <div key={e}>
                                <a href={process.env.PUBLIC_URL + e} rel="noreferrer" target="_blank">
                                    <img src={process.env.PUBLIC_URL + e} alt={title} />
                                </a>
                            </div>
                        ))
                        }
                        {video.trim().length > 0 ? <div>
                            <a href={video} rel="noreferrer" target="_blank">
                                <iframe src={video} title="Project Video" frameBorder="0" allowFullScreen></iframe>
                            </a>
                        </div> : ""}
                    </Carousel>
                </div>

                <div className="skills-grid">
                    {techIcons.map((e, i) => {
                        return (
                            <div className="skill" key={i}>
                                <img src={process.env.PUBLIC_URL + e} alt={skills[i]} />
                                <span>{skills[i]}</span>
                            </div>
                        )
                    })}
                </div>

                <button><a href={url} rel="noreferrer" target="_blank">Preview</a></button>
                <button><a href={source} rel="noreferrer" target="_blank">Source</a></button>
            </div>
        </div>
    );
}