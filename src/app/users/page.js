'use client';
import Link from 'next/link'
import Navbar from '../components/Navbar';

import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('https://myapp-backend-beige.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval); // Ensure cleanup function is returned correctly
  }, []);
  

const handleDelete = async (id) => {
  // Include the user ID in the confirmation message
  const isConfirmed = window.confirm(`Are you sure you want to delete user ID ${id}?`);
  if (!isConfirmed) {
    return; // Exit the function if the user cancels
  }

  try {
    const res = await fetch(`https://myapp-backend-beige.vercel.app/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await res.json();
    console.log(result);
    // Remove the deleted item from the UI
    setItems(items.filter(item => item.id !== id));
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

  return (
    <>
    <Navbar />
    <br /><br /><br /><br />
    <div className="container">
    <div className="card">
      <div className="card-header">
        Users List
      </div>
      <div className="card-body">
        <div className="row">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className='col-md-2 text-center'>#</th>
                <th className='col-md-4'>Firstname</th>
                <th className='col-md-4'>Lastname</th>
                <th className='col-md-1'>Edit</th>
                <th className='col-md-1'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className='text-center'>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <Link href={`/users/edit/${item.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}>
                      <i className="fa fa-trash"></i> Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
    <br /><br />

    </>
  );
}