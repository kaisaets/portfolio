import "./styles/Projects.css";
import ProjectItem from "./ProjectItem";
import katselabor from "../assets/katselabor.png";
import vepso from "../assets/vepso.png";
import minitoit from "../assets/minitoit.png";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        <ProjectItem
          name="Katselabor"
          image={katselabor}
          description="My very first website"
          techIcons={[<FaHtml5 className="techIcon" key={"icon1"}/>,
                      <FaCss3Alt className="techIcon" key={"icon2"}/>,
                    <FaBootstrap className="techIcon" key={"icon3"}/>]}
          url="https://vso24ets.ita.voco.ee/veebiarendus/lopuprojekt/index.html"
        />
        <ProjectItem
          name="Internet safety quiz"
          image={vepso}
          description="Educational game made for a school competition in a team"
          techIcons={[<FaReact className="techIcon" key={"icon4"}/>]}
          url="https://vepso.ita.voco.ee/"
        />
        <ProjectItem
          name="Minitoit"
          image={minitoit}
          description="Recipe collection with adding and update functions made with teammate"
          techIcons={[<FaReact className="techIcon" key={"icon5"}/>]}
          url="https://vso24viigi.ita.voco.ee/minitoit2/"
        />
      </div>
    </div>
  );
};

export default Projects;
