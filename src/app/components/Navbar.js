'use client'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        <img src="/images/logo.png" alt="Logo" className="custom-logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/Service" className="nav-link">Service</Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link href="/signup" className="btn btn-outline-success">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link href="/users" className="btn btn-success">SignIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
