import "dotenv/config";
import { users, UserType } from "./schema/users";

import { orm } from "@/src/db";

const USERS: UserType[] = [
  {
    name: "Platzi Team",
    age: 25,
    email: "platzi@gmail.com",
  },
  {
    name: "Kevin David",
    age: 25,
    email: "kedav.e12@gmail.com",
  },
];

async function main() {
  console.log(`🚀 Inserting ${USERS.length} users...`);
  await orm.insert(users).values(USERS);
  console.log("✨ Done!");

  process.exit();
}

main();

//npx drizzle-kit push

//npx tsx src/db/populate.