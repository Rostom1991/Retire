import React, { Suspense } from "react";
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
  const LazyServices = React.lazy(() => import("./components/Services"));
  const LazyLocalisation = React.lazy(() =>
    import("./components/Localisation")
  );

  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<span>loading..</span>}>
        <LazyLocalisation />
        <LazyServices />
      </Suspense>

      <Team />
      <Hotel />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
