import smoothScrollTo from "../../util/smoothScroll";

// eslint-disable-next-line react/prop-types
function Navlinks({ closeHam }) {
  const handleClick = (id) => {
    smoothScrollTo(id, 1000);
    closeHam();
  };

  return (
    <>
      <button className="nav-button" onClick={() => handleClick("home")}>
        Home
      </button>
      <button className="nav-button" onClick={() => handleClick("projects")}>
        projects
      </button>
      <button className="nav-button" onClick={() => handleClick("about")}>
        About me
      </button>
      <a
        className="nav-button"
        href="https://docs.google.com/document/d/1k9g79yP7gntQS8wxfcD88VLYUIoUm9YBlRamOUivllY/edit?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      <button
        className="nav-button button-cta"
        onClick={() => handleClick("contact")}
      >
        Contact
      </button>
    </>
  );
}

export default Navlinks;
