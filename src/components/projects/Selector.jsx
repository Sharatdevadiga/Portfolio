import Card from "./Card";
import { mainProjectsData } from "../../../public/data";

function Selector() {
  return (
    <div className="cardSelector-container flex-v-center" id="projects">
      <h2 className="heading-secondary">These are some of my Work</h2>
      <div className="card-container flex-v-center">
        {mainProjectsData.map((project, index) => (
          <Card key={index} project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default Selector;
