/* eslint-disable react/prop-types */
import { FaCode } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

function DescriptionCard({ project }) {
  return (
    <div className="card-description">
      <h2>{project.title}</h2>
      <p className="description-text">{project.description}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="card-links">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="card-link button"
        >
          <FaGlobe />
          Live
        </a>
        <a
          href={project.gitHub}
          target="_blank"
          rel="noreferrer"
          className="card-link button"
        >
          <FaCode /> Code
        </a>
      </div>
    </div>
  );
}

export default DescriptionCard;
