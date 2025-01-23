import { UserType } from "@/src/db/schema/users";
export default async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const users = (await response.json()) as { data: UserType[] };

  return users.data;
}
