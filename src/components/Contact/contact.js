import React,{useRef} from 'react';
import "../../css/contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yx17tgy','template_3e7m5ee',form.current, 'Hus8PWcJ0xlSSNrBc')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) =>{
                console.log(error.text);
            });
    }

    return(
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="ContactDesc">Please fill out the form below to contact me</span>
        <form className="contactForm" ref={form}onSubmit={sendEmail}>
            <input type= "text" className="name" placeholder="Your Name" name='your_name'></input>
            <input type= "email" className="email" placeholder="Your Email" name="your_email"></input>
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link"/>
                <img src={TwitterIcon} alt="Twitter" className="link"/>
                <img src={YouTubeIcon} alt="YouTube" className="link"/>
                <img src={InstagramIcon} alt="Instagram" className="link"/>
                </div>    
        </form>
        </div>
    )
}
export default Contact