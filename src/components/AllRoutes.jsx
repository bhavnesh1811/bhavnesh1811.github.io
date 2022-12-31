import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Skills from "../Pages/Skills";

const AllRoutes = () => {
  return (
    <div>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes