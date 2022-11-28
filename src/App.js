import React from 'react';
import './App.css';
import Navbar from '/Users/JohnD/muse/src/Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/JohnD/muse/src/Pages/Home.js';
import Reports from '/Users/JohnD/muse/src/Pages/Reports.js';
import Products from "/Users/JohnD/muse/src/Pages/Products.js";
import Messages from './Pages/Messages';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/messages' element={<Messages/>} />
      
    </Routes>
  </Router>
    </>
  );
}

export default App;
