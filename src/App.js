import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstLandingPage from './pages/firstPage'; 
import SecondLandingPage from './pages/secondpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstLandingPage />} />
          <Route path="/mockups" element={<SecondLandingPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

