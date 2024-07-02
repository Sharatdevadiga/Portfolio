import { useState } from "react";
import "./Navbar.css";
import Navlinks from "./Navlinks";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleHamClick = () => {
    setIsHamOpen((isHamOpen) => !isHamOpen);
  };

  const closeHam = () => {
    setIsHamOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <img className="nav-logo" src="" alt="" />
      </div>
      <div className="nav-button-container">
        <Navlinks />
      </div>
      <button className="ham-button" onClick={() => handleHamClick()}>
        {isHamOpen ? (
          <IoClose className="ham-icon" />
        ) : (
          <HiMiniBars3BottomRight className="ham-icon" />
        )}
      </button>
      {isHamOpen ? (
        <>
          <div className="nav-bar-container-mobile">
            <Navlinks closeHam={closeHam} />
          </div>
          <div className="hamOverlay" onClick={() => closeHam()}></div>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;
