import { useState } from "react";
import './styles/Navbar.css';
import { IoReorderFour } from "react-icons/io5";


const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
    return (
    <div className="navbar" id= {expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick = {() => {setExpandNavbar((prev) => !prev)}}> 
          <IoReorderFour /> 
        </button>
      </div>
      <nav className="links">
        <a href="#about" onClick={() => setExpandNavbar(false)}>About</a>
        <a href="#skills" onClick={() => setExpandNavbar(false)}>Skills</a>
        <a href="#projects" onClick={() => setExpandNavbar(false)}>Projects</a>
        <a href="#contacts" onClick={() => setExpandNavbar(false)}>Contacts</a>
      </nav>
    </div>
    )
}
export default Navbar