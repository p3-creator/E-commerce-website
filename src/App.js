import React from "react";
import { BrowserRouter, Router, Routes, Route }
from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Form from './Form';
import "bootstrap/dist/css/bootstrap.min.css";







function App() {
  return (
    <div>
      <BrowserRouter basename="/E-commerce-website">
       <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
