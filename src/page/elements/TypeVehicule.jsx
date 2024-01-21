import React from 'react';
import Footer  from '../component/Footer';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/fonts/circular-std/style.css';
import '../../assets/libs/css/style.css';
import '../../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';

const TypeVehicule = () => {
  // Mettez les noms de classes entre accolades pour JSX (className)
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
                      <li className="breadcrumb-item active" aria-current="page">Type de véhicule</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
               <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="card">
                         <h5 class="card-header">Listes de type vehicules</h5>
                         <div class="card-body">
                              <table class="table table-hover">
                              <thead>
                                   <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <th scope="row">hhh</th>
                                        <td><Link class="btn btn-warning btn-rounded btn-fw"><i class="mdi mdi-autorenew"></i></Link></td>
                                        <td><Link class="btn btn-danger btn-rounded btn-fw"><i class="mdi mdi-delete"></i></Link></td>
                                   </tr>
                                   <tr>
                                        <th scope="row">kkkk</th>
                                        <td><Link class="btn btn-warning btn-rounded btn-fw"><i class="mdi mdi-autorenew"></i></Link></td>
                                        <td><Link class="btn btn-danger btn-rounded btn-fw"><i class="mdi mdi-delete"></i></Link></td>
                                   </tr>
                              </tbody>
                              </table>
                         </div>
                    </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="card">
                         <h5 class="card-header">Nouveau</h5>
                         <div class="card-body">
                              <form action="#" id="basicform" data-parsley-validate="">
                              <div class="form-group">
                                   <label for="inputUserName">Type</label>
                                   <input id="inputUserName" type="text" name="name" data-parsley-trigger="change" required="" placeholder="Enter user name" autocomplete="off" class="form-control"/>
                              </div>
                              <div class="row">
                                   <div class="col-sm-2 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                   </div>
                                   <div class="col-sm-10 pl-0">
                                        <p class="text-right">
                                             <button type="submit" class="btn btn-space btn-primary">Enregistrer</button>
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

export default TypeVehicule;
