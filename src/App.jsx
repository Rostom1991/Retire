import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Localisation from "./components/Localisation";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Localisation />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
