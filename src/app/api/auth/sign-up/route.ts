import clientPromise from "@/lib/db/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    const client = await clientPromise;
    const db = client.db("workshop");
    const users = db.collection("users");
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await users.insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User created successfully", userId: newUser.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.log("Sign up error", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
