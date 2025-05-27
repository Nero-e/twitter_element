import { NextResponse } from "next/server";
import { orm } from "@/src/db";

// GET request to fetch users
export async function GET() {
  try {
    const res = await orm.query.users.findMany({
      limit: 10,
    });

    return NextResponse.json({ data: res });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}