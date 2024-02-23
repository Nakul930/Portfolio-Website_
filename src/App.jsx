import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import Parralax from "./components/parralax/Parralax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parralax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parralax type="portfolio" />
      </section>
      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
