import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/scrollToTop';
import MoreAboutMe from './pages/aboutPage';
import FirstLandingPage from './pages/firstPage'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<FirstLandingPage />} />
          <Route path="/aboutme" element={<MoreAboutMe />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

