"use server"

import { createHash, randomUUID } from "crypto";
import { redirect } from "next/navigation";

import { createSession } from "@/utils/auth";

const SECRET = "37bedb25d256038c8013a60222f69dbead6e7ebe75cc8239bacfef351160d622";
export async function login(prevState: unknown, data: FormData) {
  const id = randomUUID();
  const hash = createHash("sha256");
  const password = data.get("pwd") as string;

  console.log("login", { id, password });

  const hashedPassword = hash.update(password).digest("hex");

  if (hashedPassword !== SECRET) {
    return { error: "Contraseña incorrecta" };
  }

  await createSession(id);

  redirect("/auth/");
}
