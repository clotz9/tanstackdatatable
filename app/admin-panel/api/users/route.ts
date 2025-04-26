import { NextResponse } from 'next/server';
import { usersData } from '../../utils/data';


export async function GET() {
  // get mock data to return as a response
  return NextResponse.json(usersData);
}

export async function POST(request: Request) {
  const newUser = await request.json();
  usersData.push({ id: usersData.length + 1, ...newUser });
  return NextResponse.json(newUser, { status: 201 });
}