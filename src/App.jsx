import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import Selector from "./components/projects/Selector";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import About from "./components/about/About";
import Contact from "./components/contactForm/Contact";

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
        <Certificates />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
