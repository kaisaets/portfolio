import React from "react";
import './styles/Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



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
           <p>
           Send me an email: <br />
           kaisa.ets@voco.ee
           </p>
           </div>
           {/* //script? */}
           <p> &copy; 2025</p> 
        </div>
    )
}
export default Footer