import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/scrollToTop';
import MoreAboutMe from './pages/aboutPage';
import BlackGold from './pages/blackGoldPage';
import ContactMe from './pages/contactPage';
import Home from './pages/homePage'; 
import Medisync from './pages/medisyncPage';
import Projects from './pages/projectsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutme" element={<MoreAboutMe />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/contact_me" element={<ContactMe />} />
          <Route path="/medisync" element={<Medisync />} />
          <Route path="/black_gold" element={<BlackGold />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

