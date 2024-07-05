'use client'; 

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="Logo" className="custom-logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Service">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a class="btn btn-outline-success" href="#">SignUp</a>
          </li>
          <li className="nav-item">
            <a class="btn btn-success" href="#">SignIn</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
