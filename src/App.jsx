import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage/Home";
import Plan from "./Pages/HomePage/Plan";
import Service from "./Pages/ServicesPage/Service";
import Trainer from "./Pages/ServicesPage/Trainer";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <Plan />
      <Service />
      <Trainer />
      <About />
      <Contact />
    </div>
  );
};

export default App;
