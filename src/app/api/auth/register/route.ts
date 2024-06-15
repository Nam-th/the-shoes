import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `http://localhost:8080/api/v1/users/login`
const paginate = `?page=1&limit=10`
const API_KEY = process.env.DATA_API_KEY as string;

export async function POST(request: Request) {
     const { username, password }: UserLogin = await request.json();

     if (!username || !password) return NextResponse.json({ "message": "Missing required data" });

     const res = await fetch(DATA_SOURCE_URL, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               'API-Key': API_KEY
          },
          body: JSON.stringify({ username, password })
     })

     const user: UserLogin = await res.json();

     return NextResponse.json(user);
}