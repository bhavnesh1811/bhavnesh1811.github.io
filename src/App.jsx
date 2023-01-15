import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Skills from "./Pages/skills/Skills";
import Github from "./Pages/Github";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Skills />
      <Github/>
      <Contacts />
      <Resume />
    </div>
  );
};

export default App;
