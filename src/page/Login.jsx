import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/fonts/circular-std/style.css';
import '../assets/libs/css/style.css';
import '../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire ici
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="splash-container">
      <div className="card">
        <div className="card-header text-center">
          <Link ><img className="logo-img" src="./assets/images/logo.png" alt="logo" /></Link>
          <span className="splash-description">Please enter your user information.</span>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox" />
                <span className="custom-control-label">Remember Me</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
          </form>
        </div>
        <div className="card-footer bg-white p-0">
          <div className="card-footer-item card-footer-item-bordered">
          <Link to="/signup" className="footer-link">Create An Account</Link>
          </div>
          <div className="card-footer-item card-footer-item-bordered">
            <Link to="/home" className="footer-link">Forgot Password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
