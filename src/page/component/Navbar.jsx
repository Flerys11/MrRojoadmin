import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <Link className="navbar-brand" to="/">OKAZ</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input className="form-control" type="text" placeholder="Search.." />
              </div>
            </li>
            <li className="nav-item dropdown notification">
              <Link className="nav-link nav-icons" to="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></Link>
            </li>
            <li className="nav-item dropdown connection">
              <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-th"></i></Link>
            </li>
            <li className="nav-item dropdown nav-user">
              <Link className="nav-link nav-user-img" to="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/avatar-1.jpg" alt="" className="user-avatar-md rounded-circle" /></Link>
              <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
               <div class="nav-user-info">
                    <h5 class="mb-0 text-white nav-user-name">John Abraham</h5>
                    <span class="status"></span><span class="ml-2">Available</span>
               </div>
               </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
