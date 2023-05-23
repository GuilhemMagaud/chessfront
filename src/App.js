import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Accueil from './components/Accueil';
import './styles/app.css'
import Shop from './components/shop/Shop';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Accueil />}/>
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  )
}

export default App;
