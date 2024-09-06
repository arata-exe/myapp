'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Page() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [loading, setLoading] = useState(false); // เพิ่มสถานะการโหลด
  const [error, setError] = useState(''); // เพิ่มสถานะข้อผิดพลาด

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ตั้งค่าการโหลดเป็น true
  
    const data = { firstname, lastname, username, password };
    console.log('Sending data:', data);
  
    try {
      const res = await fetch('https://myapp-backend-beige.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', // เพิ่ม Content-Type
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
      setError('Failed to sign up. Please try again.'); // ตั้งค่าข้อความข้อผิดพลาด
    } finally {
      setLoading(false); // ตั้งค่าการโหลดเป็น false
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
                <label htmlFor="firstname" className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input 
                    type="text" 
                    id="firstname"
                    className="form-control" 
                    value={firstname} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input 
                    type="text" 
                    id="lastname"
                    className="form-control" 
                    value={lastname} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
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
                  <span className="input-group-text" id="basic-addon4">
                    <i className="bi bi-person-vcard-fill"></i>
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
                <button 
                  type="submit" 
                  className="btn btn-success"
                  disabled={loading} // ปิดปุ่มเมื่อโหลด
                >
                  {loading ? 'Signing Up...' : <><i className="bi bi-box-arrow-right"></i> Sign Up</>}
                </button>
              </div>
              {error && <div className="alert alert-danger mt-2" role="alert">{error}</div>} {/* แสดงข้อความข้อผิดพลาด */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
