// src/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../Pages/Homepage';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import HireMe from '../Pages/HireMe';
import Page404 from '../Pages/Page404';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <HomePage /> </Layout>} />
        <Route path="/about" element={<Layout> <About/> </Layout>} />
        <Route path="/projects" element={<Layout> <Projects /> </Layout>} />
        <Route path="/contact" element={<Layout> <Contact/> </Layout>} />
        <Route path="/HireMe" element={<Layout> <HireMe/> </Layout>} />
        <Route path="*" element={<Layout> <Page404/> </Layout>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
