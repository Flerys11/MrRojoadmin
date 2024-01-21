import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer  from '../component/Footer';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/fonts/circular-std/style.css';
import '../../assets/libs/css/style.css';
import '../../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';




const Energie = () => {

     const [energies, setEnergies] = useState([]);
     //const [nom, setNomEnergie] = useState('');
     const [nom, setNomEnergie] = useState([]);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       axios.get('https://backspring-production-246e.up.railway.app/varotrafiaraback/energies')
         .then(response => {
           const responseData = response.data;
   
           if (responseData.error) {
             setError(responseData.error);
           } else {
               setEnergies(responseData.data);
           }
         })
         .catch(error => console.error('Erreur lors de la récupération des couleurs', error));
     }, []);

     
  const handleSubmit = async (e) => {
    
     console.log('Valeur de nom:', nom);
   
     const energieData = {
          idenergie : null,
          nomenergie : nom
     };
     try {
          const response = await fetch("https://backspring-production-246e.up.railway.app/varotrafiaraback/energie", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(energieData)
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
       const response = await fetch(`https://backspring-production-246e.up.railway.app/varotrafiaraback/energie?id=${id}`, {
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'
           },
       });
   
       if (!response.ok) {
         throw new Error('Problème lors de la suppression des données');
       }
       
        setNomEnergie(prevNomEnergie => prevNomEnergie.filter(energ => energ.idenergie !== id));
 
       const data = await response.json();
       console.log("Données de suppression :", data);
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
                      <li className="breadcrumb-item"><Link className="breadcrumb-link">Elements</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Energie</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
               <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="card">
                         <h5 class="card-header">Listes des energies</h5>
                         <div class="card-body">
                              <table class="table table-hover">
                              <thead>
                                   <tr>
                                        <th scope="col">Nom</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                   </tr>
                              </thead>
                              <tbody>
                              {energies.map((energ, index) => (
                                   <tr key={index}>
                                        <th scope="row">{energ.nomenergie}</th>
                                        <td><Link class="btn btn-warning btn-rounded btn-fw"><i class="mdi mdi-autorenew"></i></Link></td>
                                        <td>
                                        <button className="btn btn-danger btn-rounded btn-fw" onClick={() => handleDelete(energ.idenergie)}>
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
                    <div class="card">
                         <h5 class="card-header">Nouveau</h5>
                         <div class="card-body">
                         <form onSubmit={handleSubmit}id="basicform" data-parsley-validate="">
                              <div class="form-group">
                                   <label for="inputUserName">Nom</label>
                                   
                                   <input id="inputUserName" 
                                    value={nom}
                                    onChange={(e) => setNomEnergie(e.target.value)}
                                   type="text" name="nom" data-parsley-trigger="change" required="" placeholder="" autocomplete="off" class="form-control"/>
                              </div>
                              <div class="row">
                                   <div class="col-sm-2 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                   </div>
                                   <div class="col-sm-10 pl-0">
                                        <p class="text-right">
                                             <button type="button" onClick={handleSubmit} class="btn btn-space btn-primary">Enregistrer</button>
                                             <button class="btn btn-space btn-light">Annuler</button>
                                        </p>
                                   </div>
                              </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Energie;
