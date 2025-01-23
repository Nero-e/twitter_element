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

// de esta forma no se expone la url de la api
async function getUsers() {
  const res = await orm.query.users.findMany({
    limit: 10,
  })
}

async function getUsersByEmail(email: string) {
  const res = await orm.query.users.findFirst({
    where: (entry, { eq }) => eq(entry.email, email),
  });
}