import { NextResponse } from "next/server";
import { signInSchema } from "@/lib/schemas/sign-in.schema";
import z from "zod";
import clientPromise from "@/lib/db/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = signInSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Invalid data", details: z.treeifyError(parsedData.error) },
        { status: 400 },
      );
    }

    const { email, password, rememberUser } = parsedData.data;
    const client = await clientPromise;
    const db = client.db("workshop");
    const users = db.collection("users");
    const user = await users.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not set");
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
        email: user.email,
      },
      process.env.JWT_SECRET!,
      { expiresIn: rememberUser ? "17d" : "1d" },
    );

    const response = NextResponse.json({
      message: "Logged in! Welcome!",
      user: {
        id: user._id.toString(),
        email: user.email,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: rememberUser ? 17 * 24 * 60 * 60 : 24 * 60 * 60, // 17 days or 1 day
    });

    return response;
  } catch (error) {
    console.log("Sign in error", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
