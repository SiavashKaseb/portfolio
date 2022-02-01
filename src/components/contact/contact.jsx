import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import toast , {Toaster} from "react-hot-toast"
import "./contact.css"
import GithubImg from "../../img/github.png"
import GmailImg from "../../img/gmail.png"
import LinkedinImg from "../../img/LinkedIn.png"
import Zilink from "../../img/zilink.png"

const Contact = () => {
    const fRef = useRef()
    
    const submitForm = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_1cj67ug', 'template_o1rxb2e', fRef.current, 'user_EZ3FZGG2RUzDmVI3uhfs1')
        .then((result) => {
            console.log(result.text);
            toast.success('Thank you !')
        }, (error) => {
            console.log(error.text);
            toast.error(error.text)
        });
    }
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">So now is the time to talk about your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img className="info-icon" src={GithubImg} alt="github" />
                            <a className="link-info" target="_blank" href="https://github.com/mohammadMahdiKaseb" rel="noreferrer">Mohammad Mahdi Kaseb</a>
                        </div>
                        <div className="contact-info-item">
                            <img className="info-icon" src={GmailImg} alt="Gmail" />
                            <a className="link-info" target="_blank" href="mailto:mohammadmahdikaseb@gmail.com" rel="noreferrer">Send Email</a>
                        </div>
                        <div className="contact-info-item">
                            <img className="info-icon" src={LinkedinImg} alt="Linkedin" />
                            <a className="link-info" target="_blank" href="https://www.linkedin.com/in/mohammadmahdikaseb" rel="noreferrer">Linkedin</a>
                        </div>
                        <div className="contact-info-item">
                            <img className="info-icon" src={Zilink} alt="Linkedin" />
                            <a className="link-info" target="_blank" href="https://zil.ink/MoMaKa" rel="noreferrer">Zilink</a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="info-desc">
                    You can contact me, relax yourself and send a message, I will be happy to talk to you                    </p>
                    <form ref={fRef} onSubmit={submitForm} >
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea name="message" id="" cols="30" rows="5"></textarea>
                        <button className="submitBtn" type="submit">Submit</button>
                        
                    </form>
                </div>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    )
}

export default Contact
