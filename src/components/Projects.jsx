import React from 'react'
import './styles/Projects.css'
import ProjectItem from './ProjectItem';
import katselabor from '../assets/katselabor.png';
import vepso from '../assets/vepso.png';
import minitoit from '../assets/minitoit.png'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Katselabor" image={katselabor} description="My very first website built with HTML and CSS" url="https://vso24ets.ita.voco.ee/veebiarendus/lopuprojekt/index.html" />
        <ProjectItem name="Internet safety quiz" image={vepso} description="Educational game made for a school competition in a team" url="https://vepso.ita.voco.ee/" />
        <ProjectItem name="Minitoit" image={minitoit} description="Recipe collection" url="https://vso24viigi.ita.voco.ee/minitoit2/"/>
      </div>
    </div>
  )
}

export default Projects;