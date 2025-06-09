import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <>
        <div className="contact-container" id="contact">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard iconUrl={(process.env.PUBLIC_URL)+"/assets/email.svg"} link="dainikmakwana31@gmail.com" />
                    <ContactInfoCard iconUrl={(process.env.PUBLIC_URL)+"/assets/techImg/github.svg"} link="https://github.com/Makwana-Dainik-Kalabhai" />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactMe;