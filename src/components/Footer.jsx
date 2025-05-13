import React from "react";
import './styles/Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div id="contacts" className="footer">
           <div className="icons">
            <a href="https://github.com/kaisaets" target="_blank" rel="noopener noreferrer">
           <FaGithub className="icon" />
           </a>
           <a href="https://www.linkedin.com/in/kaisa-ets/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin className="icon" />
           </a>
           <p className="email">
           Send me an email: <br />
           kaisa.ets@voco.ee
           </p>
           </div>
           {/* //script? */}
           <p className="copyright"> &copy; 2025</p> 
        </div>
    )
}
export default Footer