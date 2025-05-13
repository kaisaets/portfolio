import React from "react";

const ProjectItem = ({ image, name, description, url, techIcons }) => {
    return (
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h2> {name} </h2>
            <p> {description} </p>
            <div className="techIcons">
                {techIcons}
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="viewProjectLink"><p>View project</p></a>
        </div>
    )
}

export default ProjectItem;