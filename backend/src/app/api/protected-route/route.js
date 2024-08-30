import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function GET(request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      return new Response(JSON.stringify({ error: 'No token provided' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // ทำสิ่งที่ต้องการกับข้อมูลที่ตรวจสอบแล้ว
    return new Response(JSON.stringify({ message: 'Authorized access', user: decoded }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
