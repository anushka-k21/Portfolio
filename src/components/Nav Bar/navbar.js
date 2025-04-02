import React from 'react';
import '../../css/navbar.css';
import logo from '../../assets/logo.png'; //../ means coming out of that folder once
import { Link } from 'react-scroll';

const navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            </div>
            <button className="desktopMenuBtn"onClick={()=>{
                document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
            }}>
            Contact Me
            </button>
        </nav >
    )
}
export default navbar