import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, link }) => {
    return (
        <>
            <div className="contact-details-card">
                <div className="icon">
                    <img src={iconUrl} alt={link} />
                </div>
                <a href={(link.includes("@gmail.com")) ? `mailto: ${link}` : link}>{link}</a>
            </div>
        </>
    );
}

export default ContactInfoCard;