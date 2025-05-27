import { UserType } from "@/src/db/schema/users";
import { orm } from "@/src/db";

export default async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const users = (await response.json()) as { data: UserType[] };

  return users.data;
}

// de esta forma no se expone la url de la api
// async function getUsers() {
//   const res = await orm.query.users.findMany({
//     limit: 10,
//   })
// }

export async function getUsersByEmail(email: string) {
  orm.query.users.findFirst({
    where: (entry, { eq }) => eq(entry.email, email),
  });
}

export async function getUsersByUsername(username: string) {
  return orm.query.users.findFirst({
    where: (entry, { eq }) => eq(entry.username, username),
  });
}

export async function getUser(userId: number) {
  return orm.query.users.findFirst({
    where: (entry, { eq }) => eq(entry.id, userId),
  })
}