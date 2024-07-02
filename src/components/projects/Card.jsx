// import { useContext } from "react";
import DescriptionCard from "./DescriptionCard";
import DescreptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";
import "./Selector.css";

// import { bookingContext } from "../../App";

/* eslint-disable react/prop-types */
function Card({ project }) {
  return (
    <div className="card-div flex-h-center ">
      <DescriptionCard project={project} />
      <ImageCard project={project} />
    </div>
  );
}

export default Card;
