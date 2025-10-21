import clientPromise from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("workshop-app");
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      status: "ok",
      collections: collections.map((c) => c.name),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "error", message: String(e) }, { status: 500 });
  }
}
