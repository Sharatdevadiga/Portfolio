import Card from "./Card";
import { mainProjectsData } from "../../../public/data";
import { otherProjects } from "../../../public/data";
import { useEffect, useRef, useState } from "react";

function Selector() {
  const [open, setOpen] = useState(false);

  const otherProjectContainerRef = useRef(null);
  useEffect(() => {
    const container = otherProjectContainerRef.current;
    const handleScroll = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    if (!container) return;

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex-v-center">
      <div className="cardSelector-container flex-v-center" id="projects">
        <h2 className="heading-secondary">These are some of my Work</h2>
        <div className="card-container flex-v-center">
          {mainProjectsData.map((project, index) => (
            <Card key={index} index={index} project={project}></Card>
          ))}
        </div>
      </div>

      <button className="button" onClick={() => setOpen((open) => !open)}>
        {!open ? "Show More" : "Show Less"}
      </button>

      <div
        className={`cardSelector-container flex-v-center ${
          !open ? "hidden" : ""
        }`}
        id="projects"
      >
        <div
          className="card-container flex-v-center otherProject-container"
          ref={otherProjectContainerRef}
        >
          {otherProjects.map((project, index) => (
            <Card
              type="straight"
              key={index}
              index={index}
              project={project}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selector;
