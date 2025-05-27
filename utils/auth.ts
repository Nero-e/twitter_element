"server-only";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { env } from "process";

export const COOKIE_NAME = "__session__";

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const _cookies = await cookies();
  const session = await encrypt({ userId }, expiresAt)

  _cookies.set(COOKIE_NAME, session, {
    httpOnly: true, // en false el cliente tiene acceso a este parametro o cookie -- para seguridad hay que tener este parametro en true
    secure: true, // En true esta cookie solo se utilizara en un contexto de https a exepcion de localhost
    expires: expiresAt,
    sameSite: "strict", // le dice al servidor y al navegador hacia donde tiene que enviar la cookie que tienen nuestros usuarios 🔍 averiguar mas -
    path: "/",
  });
}

type SessionPayload = {
  userId: string;
};

const secretKey = process.env.SESSION_SECRET;

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(
  payload: SessionPayload,
  expireTime?: number | string | Date
): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expireTime ?? "7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("failed to verify session", error);
  }
}

export async function isSeesionValid(
  cookieValue: string | undefined | null
): Promise<boolean> {
  if (!cookieValue) {
    return false;
  }

  const session = await decrypt(cookieValue);

  return Boolean(session);
}
