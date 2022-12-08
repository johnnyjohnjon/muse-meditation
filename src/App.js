import React from 'react';
import '/Users/JohnD/muse/src/App.css';
import Navbar from '/Users/JohnD/muse/src/Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/JohnD/muse/src/Pages/Home.js';
import Journal from './Pages/Journal.js';
import Products from "/Users/JohnD/muse/src/Pages/Products.js";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Messages from './Pages/Messages.js';
import Profile from './Pages/Profile.js';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>

      <Route path='/' exact element={<Home/>} />
      <Route
            path="/Journal"
            element={
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <Journal />
                </PersistGate>
              </Provider>
            }
          />

      <Route path="/products" element={<Products />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  </Router>
    </>
  );
}

export default App;
