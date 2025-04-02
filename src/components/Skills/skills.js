import React from 'react';
import '../../css/skills.css';
import WebDev from '../../assets/web_dev_logo.png';
import AIML from '../../assets/ai_ml_logo.png';
import Electronics from '../../assets/electronics_logo.png'


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I am a learner exploring Web Development, Artificial Intelligence, Machine Learning, and Electronics. I enjoy building websites, working with AI and ML models, and experimenting with electronics. I am always looking for new things to learn and improve my skills. </span> 
            <div className='skillBars'>
                <div className="skillBar">
                    <img src={WebDev} alt="WebDev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Web Development</h3>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AIML} alt="AI/ML" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Artifical Intelligence and Machine Learning</h3>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Electronics} alt="Electronics" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Electronics</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;