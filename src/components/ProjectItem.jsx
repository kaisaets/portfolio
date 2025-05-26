const ProjectItem = ({ image, name, description, url, techIcons }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {description} </p>
        <div className="techIcons">{techIcons}</div>
      </div>
    </a>
  );
};

export default ProjectItem;
