/* eslint-disable react/prop-types */
function ImageCard({ project }) {
  function handleClick() {
    window.open(project.link, "_blank");
  }
  return (
    <div className="card card-transform" onClick={() => handleClick()}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <h3 className="card-title">GO to Live Project</h3>
    </div>
  );
}

export default ImageCard;
