'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the sign-in page
    router.push('/signin');
  };

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      router.push('/signin');
    }

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}  // Adjust as needed
          height={50}  // Adjust as needed
          className="custom-logo"
        />
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
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link href="/signup" className="btn btn-outline-success">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link href="/login" className="btn btn-success">SignIn</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;