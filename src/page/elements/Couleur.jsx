import React, { useState, useEffect } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/fonts/circular-std/style.css';
import '../../assets/libs/css/style.css';
import '../../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Couleur = () => {
  const [colors, setColors] = useState([]);
  const [nom, setNom] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://backspring-production-246e.up.railway.app/varotrafiaraback/couleurs')
      .then(response => {
        const responseData = response.data;

        if (responseData.error) {
          setError(responseData.error);
        } else {
          setColors(responseData.data);
        }
      })
      .catch(error => console.error('Erreur lors de la récupération des couleurs', error));
  }, []);

  const handleSubmit = async (e) => {
    
     console.log('Valeur de nom:', nom);
   
     const couleurData = {
          idcouleur : null,
           nomcouleur : nom
     };
     try {
          const response = await fetch("https://backspring-production-246e.up.railway.app/varotrafiaraback/couleur", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(couleurData)
          });
          
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          console.log("rien data");
          console.log(data);
          console.log(data.data);
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }
        e.preventDefault();
   };
   const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://backspring-production-246e.up.railway.app/varotrafiaraback/couleur?id=${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
      });
  
      if (!response.ok) {
        throw new Error('Problème lors de la suppression des données');
      }
  
       // Mettez à jour l'état local en excluant l'élément supprimé
      setColors(prevColors => prevColors.filter(color => color.idcouleur !== id));

      const data = await response.json();
      console.log("Données de suppression :", data);
  
      // Mettez à jour l'état ou effectuez d'autres actions après la suppression
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  };
  return (
    <div className="dashboard-main-wrapper">
      <Navbar />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
                <h2 className="pageheader-title">FIARA OKAZ </h2>
                <p className="pageheader-text"></p>
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link className="breadcrumb-link">Eléments</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Couleur</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header">Listes de marques</h5>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Nom</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {colors.map((color, index) => (
                        <tr key={index}>
                          <td>{color.nomcouleur}</td>
                          <td><Link className="btn btn-warning btn-rounded btn-fw"><i className="mdi mdi-autorenew"></i></Link></td>
                          <td>
                              <button className="btn btn-danger btn-rounded btn-fw" onClick={() => handleDelete(color.idcouleur)}>
                                <i className="mdi mdi-delete"></i>
                              </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header">Nouveau</h5>
                <div className="card-body">
                  <form onSubmit={handleSubmit} id="basicform" data-parsley-validate="">
                    <div className="form-group">
                      <label htmlFor="inputUserName">Nom</label>
                      <input
                         id="inputUserName"
                         type="text"
                         name="nom"
                         value={nom}
                         onChange={(e) => setNom(e.target.value)}
                         data-parsley-trigger="change"
                         required=""
                         placeholder=""
                         autoComplete="off"
                         className="form-control"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-2 pb-2 pb-sm-4 pb-lg-0 pr-0"></div>
                      <div className="col-sm-10 pl-0">
                        <p className="text-right">
                          <button type="button" onClick={handleSubmit} className="btn btn-space btn-primary">Enregistrer</button>
                          <button type="reset" className="btn btn-space btn-light">Annuler</button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Couleur;
