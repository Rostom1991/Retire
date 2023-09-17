import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hotel from "./components/Hotel";
import Localisation from "./components/Localisation";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
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
      <Hotel />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
