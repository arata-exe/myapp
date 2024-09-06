'use client';

import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params;

  const [items, setItems] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`https://myapp-backend-beige.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const { firstname, lastname, username, password } = data[0];
          setFirstName(firstname);
          setLastName(lastname);
          setUserName(username);
          setPassWord(password);
        } else {
          console.warn('Data is not an array or empty');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (id) {
      getUsers();
    }
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://myapp-backend-beige.vercel.app/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ id, firstname, lastname, username, password }),
      });

      if (!res.ok) {
        console.error('Failed to update data');
        return;
      }

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleUpdateSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input 
                    id="firstname"
                    type="text"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input 
                    id="lastname"
                    type="text"
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
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input 
                    id="username"
                    type="text"
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
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input 
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
