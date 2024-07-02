import "./Certificates.css";
import { certificates } from "../../../public/data";

function Certificates() {
  return (
    <div className="card-general-div flex-v-center" id="certifications">
      <h2 className="heading-secondary">Certifications</h2>
      <div className="card-general-container flex-h-center">
        {certificates.map((certificate, index) => (
          <div key={index} className="card-general">
            <img src={certificate.image} alt={certificate.title} />
            <h3 className="card-general-title">{certificate.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
