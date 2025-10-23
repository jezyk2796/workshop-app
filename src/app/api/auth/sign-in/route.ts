import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { login, password, rememberUser } = await request.json();
  } catch (error) {
    console.log("Sign in error", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
