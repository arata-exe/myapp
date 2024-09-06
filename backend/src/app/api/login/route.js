// app/api/login/route.js
import { Client } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Query to get user from database
    const res = await client.query('SELECT * FROM tbl_users WHERE username = $1', [username]);

    if (res.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      });
    }

    const user = res.rows[0];

    // Check password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      console.log('Invalid password for user:', username); // Debugging output
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ message: 'Login successful', token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error during login:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
