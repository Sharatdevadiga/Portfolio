import smoothScrollTo from "../../util/smoothScroll";

// eslint-disable-next-line react/prop-types
function Navlinks() {
  const handleClick = (id) => {
    smoothScrollTo(id, 1000);
  };

  return (
    <>
      <button className="nav-button" onClick={() => handleClick("home")}>
        Home
      </button>
      <button className="nav-button" onClick={() => handleClick("projects")}>
        projects
      </button>
      <button
        className="nav-button button-cta"
        onClick={() => handleClick("footer")}
      >
        Contact
      </button>
    </>
  );
}

export default Navlinks;
