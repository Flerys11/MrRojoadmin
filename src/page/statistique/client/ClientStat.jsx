import React from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../../assets/vendor/fonts/circular-std/style.css';
import '../../../assets/libs/css/style.css';
import '../../../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import '../../../assets/vendor/datatables/css/dataTables.bootstrap4.css';
import '../../../assets/vendor/datatables/css/buttons.bootstrap4.css';
import '../../../assets/vendor/datatables/css/select.bootstrap4.css';
import '../../../assets/vendor/datatables/css/fixedHeader.bootstrap4.css';
import '../../../assets/vendor/charts/morris-bundle/morris.css';
import '../../../assets/vendor/bootstrap/js/bootstrap.bundle.js';

import { Link } from 'react-router-dom';

const ClientStat = () => {
  // Mettez les noms de classNamees entre accolades pour JSX (className)
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
                      <li className="breadcrumb-item"><Link className="breadcrumb-link">Administrateur</Link></li>
                      <li className="breadcrumb-item"><Link  className="breadcrumb-link">Annonces</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Non valider</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="card">
                         <h5 class="card-header">Line Chart</h5>
                         <div class="card-body">
                              <div id="morris_line"></div>
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

export default ClientStat;
