import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import Selector from "./components/projects/Selector";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Home />
      </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <Selector />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
