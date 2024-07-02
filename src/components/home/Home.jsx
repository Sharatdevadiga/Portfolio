// import smoothScrollTo from "../../util/smoothScroll";
import "./Home.css";
import smoothScrollTo from "../../util/smoothScroll";

function Home() {
  function handleClick(id) {
    smoothScrollTo(id, 1000);
  }
  return (
    <div className="home-container flex-v-center" id="home">
      <div className="flex-v-center home-textContainer">
        <h1 className="heading-primary">
          Let&apos;s code Your Vision into Reality
        </h1>
        <h3 className="welcome-text">And Bring your Ideas to Life</h3>
      </div>

      <button
        className="button button-cta"
        onClick={() => handleClick("footer")}
      >
        Lets Grow together{" "}
      </button>
      <div className="intro">
        <p>
          Hi, I am <em>Sharath Devadiga</em>, a passionate web developer
          dedicated to transforming your innovative ideas into fully functional
          and visually stunning web experiences.
        </p>
      </div>
    </div>
  );
}

export default Home;
