'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [error, setError] = useState(''); // Add error state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { username, password };
    
    try {
      const res = await fetch('https://myapp-backend-beige.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await res.json();
      localStorage.setItem('token', result.token); // Save token in localStorage
      alert('Login successful!');
      
      router.push('/users'); // Use relative URL for internal navigation
    } catch (error) {
      console.error('Error during fetch:', error);
      setError(error.message); // Set error message for user feedback
    }
  };

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Login Form
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
