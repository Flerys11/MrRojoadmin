import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';
import Marque from './page/elements/Marque';
import Client from './page/client/Client';
import Couleur from './page/elements/Couleur';
import BoiteVitesse from './page/elements/BoiteVitesse';
import Energie from './page/elements/Energie';
import Equipement from './page/elements/Equipement';
import Etat from './page/elements/Etat';
import Genre from './page/client/Genre';
import Localisation from './page/elements/Localisation';
import Model from './page/elements/Model';
import TypeVehicule from './page/elements/TypeVehicule';
import Profil from './page/client/Profil';
import Valider from './page/annonce/valider/Valider';
import DetailValider from './page/annonce/valider/DetailValider';
import ClientStat from './page/statistique/client/ClientStat';
import Huhu from './page/elements/Huhu';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/marque" element={<Marque />} />
      <Route path="/couleur" element={<Couleur />} />
      <Route path="/client" element={<Client />} />
      <Route path="/boiteVitesse" element={<BoiteVitesse />} />
      <Route path="/energie" element={<Energie />} />
      <Route path="/equipement" element={<Equipement />} />
      <Route path="/etat" element={<Etat />} />
      <Route path="/genre" element={< Genre />} />
      <Route path="/localisation" element={< Localisation />} />
      <Route path="/model" element={< Model />} />
      <Route path="/typeVehicule" element={< TypeVehicule />} />
      <Route path="/profil" element={< Profil />} />
      <Route path="/valider" element={< Valider />} />
      <Route path="/DetailValider" element={< DetailValider />} />
      <Route path="/ClientStat" element={< ClientStat />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);