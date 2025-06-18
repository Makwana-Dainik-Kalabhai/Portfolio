import { LANGUAGES } from "../../utils/Data";
import "./Languages.css";

export const Languages = () => {
    return (
        <section className="languages-container" id="skills">
            <h5>All Skills</h5>

            <div className="languages-grid">
                {LANGUAGES.map((ele, i) => {
                    return (
                        <div className="language">
                            <img src={process.env.PUBLIC_URL + ele.icon} alt={ele.language} />
                            <span>{ele.language}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}