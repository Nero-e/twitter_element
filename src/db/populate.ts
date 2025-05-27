import "dotenv/config";
import { users, UserType2 } from "./schema/users";

import { orm } from "@/src/db";

const USERS: UserType2[] = [
  {
    name: "Platzi Team",
    age: 25,
    email: "platzi@gmail.com",
    username: "platzi",
  },
  {
    name: "Kevin David",
    age: 25,
    email: "kedav.e12@gmail.com",
    username: "kedav",
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

//npx tsx src/db/populate.ts
