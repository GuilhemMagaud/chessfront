import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Accueil from './components/Accueil';
import Header from './components/Header/Header';
import './styles/app.css'
import Shop from './components/shop/Shop';
import Footer from './components/Footer/Footer';
import Sinscrire from './components/Connexion/Sinscrire';
import Connexion from './components/Connexion/Connexion';
import InfoCompte from './components/InfoCompte';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/inscription" element={<Sinscrire />}/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path='/infocompte' element={<InfoCompte/>} />
      </Routes>
    </Router>
  )
}

export default App;
