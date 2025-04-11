import React from "react";
import "./styles/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents, SiMysql, SiMariadbfoundation, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <ul className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            <IoLogoJavascript className="skillIcon" title="JavaScript" />
            <FaReact className="skillIcon" title="React" />
            <FaHtml5 className="skillIcon" title="HTML5" />
            <FaCss3Alt className="skillIcon" title="CSS3" />
            <SiStyledcomponents
              className="skillIcon"
              title="Styled Components"
            />
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            <FaNodeJs className="skillIcon" title="Node.js" />
            <SiMysql className="skillIcon" title="MySQL" />
            <SiMariadbfoundation className="skillIcon" title="MariaDB" />
            <SiMongodb className="skillIcon" title="Mongodb" />
          </span>
        </li>
        <li className="item githubStats">
          <h2>Most used languages according to my GitHub account</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaisaets&layout=compact&theme=default&bg_color=f9f5e3&hide_border=true&hide_title=true"
            alt="My GitHub Top Languages"
            className="statsCard"
          />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
