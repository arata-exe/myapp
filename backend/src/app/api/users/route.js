// app/api/route.js
import { Client } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

export async function GET() {
  try {
        const result = await client.query('SELECT * FROM tbl_users');
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json" },
        });
  } catch (error) {
    
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json" },
        });
  }
}

export async function POST(request) {
  try {
  const { firstname, lastname, username, password } = await request.json();
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const res = await client.query('INSERT INTO tbl_users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, username, hashedPassword]);
  return new Response(JSON.stringify(res.rows[0]), {
  status: 201,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  });
  } catch (error) {
  console.error(error);
  return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
  status: 500,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  });
  }
  }

  export async function PUT(request) {
    try {
      // รับข้อมูลจากคำขอ
      const { id, firstname, lastname, username, password } = await request.json();
  
      // ตรวจสอบข้อมูลที่ได้รับ
      if (!id || !firstname || !lastname || !username) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        });
      }
  
      // Hash password ถ้ามีการส่ง password
      const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  
      // สร้าง query สำหรับการอัปเดต
      const updateFields = [
        'firstname = $1',
        'lastname = $2',
        'username = $3',
        hashedPassword ? 'password = $4' : ''
      ].filter(Boolean).join(', ');
  
      const values = [firstname, lastname, username];
      if (hashedPassword) values.push(hashedPassword);
      values.push(id);
  
      const query = `
        UPDATE tbl_users
        SET ${updateFields}
        WHERE id = $${values.length}
        RETURNING *;
      `;
  
      const res = await client.query(query, values);
  
      if (res.rows.length === 0) {
        return new Response(JSON.stringify({ error: 'User not found' }), {
          status: 404,
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        });
      }
  
      return new Response(JSON.stringify(res.rows[0]), {
        status: 200,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      });
    }
  }
  

export async function DELETE(request) {
  try {
  const { id } = await request.json();
  const res = await client.query('DELETE FROM tbl_users WHERE id = $1 RETURNING *', [id]);
  if (res.rows.length === 0) {
  return new Response(JSON.stringify({ error: 'User not found' }), {
  status: 404,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  });
  }
  return new Response(JSON.stringify(res.rows[0]), {
  status: 200,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  });
  } catch (error) {
  console.error(error);
  return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
  status: 500,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  });
  }
  }