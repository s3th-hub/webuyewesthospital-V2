import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Clinics from './pages/Clinics';
import Charter from './pages/Charter';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;