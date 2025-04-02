import React from 'react';
import '../../css/intro.css'
import bg from "../../assets/girl.png"
import { Link } from 'react-scroll'
import btnImg from "../../assets/hireme.png"

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello </span>
                <span className="introText">I'm <span className="introName">Anushka</span></span>
                <p className="introPara">I am a passionate and dedicated aspiring web developer currently <br></br> pursuing my B.Tech in Electronics and Communication(ECE) at IIT, Roorkee.</p>
                {/*<Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire me</button></Link>*/}
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}
export default intro