import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Github from "./Pages/Github";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contacts />
    </div>
  );
};

export default App;
