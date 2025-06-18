import { useRef, useState } from 'react';
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
import { PulseLoader } from 'react-spinners'

const ContactForm = () => {
    const form = useRef();

    const [emailAlert, setEmailAlert] = useState({
        color: "#ff3333",
        display: false
    });

    const [isPending, setIsPending] = useState(false);

    const sendEmail = (e) => {
        setIsPending(true);
        e.preventDefault();

        emailjs
            .sendForm('service_ixbcbqs', 'template_98q7vhp', form.current, {
                publicKey: '2m8z4rMMANE-AAyd3',
            })
            .then(
                () => {
                    setEmailAlert({
                        color: "#00e600",
                        display: true
                    });
                },
                (error) => {
                    setEmailAlert({
                        color: "#ff3333",
                        display: true
                    });
                },
            ).then(() => {
                setIsPending(false);
                setTimeout(() => {
                    setEmailAlert({
                        color: "#ff3333",
                        display: false
                    });
                }, 2200);
            });
    }

    return (
        <div className="contact-form-content">
            <div className='alert' style={{ display: (emailAlert.display) ? "block" : "none" }}>
                &emsp;<i className="fa-solid fa-circle-exclamation"></i>&emsp;{(emailAlert.color === "#00e600") ? "Email Sent Successfully" : "Something Went Wrong"}&emsp;&emsp;
                <div style={{ backgroundColor: `${emailAlert.color}` }}></div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className='email-container'>
                    <input type="text" name="name" placeholder='Full Name' required />
                    <input type="email" name="email" placeholder="Email ID" required />
                </div>
                <input type="text" name="title" placeholder='Title / Subject' />
                <textarea type="text" name="message" placeholder="Message" rows="3" required />
                <button type="submit">{(isPending) ? <PulseLoader /> : "SEND"}</button>
            </form>
        </div>
    );
};

export default ContactForm;