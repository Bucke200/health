// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LinkForm from './Components/LinkForm';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/LinkForm" element={<LinkForm />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
