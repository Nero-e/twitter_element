import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import dotenv from "dotenv"
import * as schema from "./schema/users";

dotenv.config()

// Check .env
if (!process.env.DATABASE_URL) {
  throw new Error("POSTGRESQL_ENDPOINT env var is not set")
}

export const client = postgres(process.env.DATABASE_URL)

export const orm = drizzle(client, {
  schema,
})