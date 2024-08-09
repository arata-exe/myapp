'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Page() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = { firstname, lastname, username, password };
    console.log('Sending data:', data);
  
    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await res.json();
      console.log('Server response:', result);
  
      // รีเซ็ตฟอร์มหลังจากส่งข้อมูล
      setFirstName('');
      setLastName('');
      setUserName('');
      setPassWord('');
  
      alert('Sign up successful!');
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            SignUp Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="basic-url" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};