import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { cookies } from "next/headers";

import {
  isSeesionValid,
  COOKIE_NAME as SESSION_COOKIE_NAME,
} from "../utils/auth";

export const supportedLocales = ["es", "en"];
const defaultLocale = ["es"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Authentication
  // -------------

   // 1. Ignorar todo lo que no sea de nuestra ruta /auth
  if (pathname.startsWith("/auth") && pathname !== "/auth/login") {
    const allCookies = await cookies();

    // 2. Verificar si hay una cookie de sesion valida
    const hasSession = await isSeesionValid(
      allCookies.get(SESSION_COOKIE_NAME)?.value
    );

    // 3. Si la hay se peude continuar
    if (hasSession) return;

    // 4. si no, redireccionar a la pagina de inicio de sesion
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.rewrite(url);
  }

    // I18n
  // -------------

  // 1. Ignore todo lo que no sea de nuestra ruta /i18n
  if (!pathname.startsWith("/i18n")) return;

  // 2. Si el path ya contiene un local, ignorelo (ya esta ok)
  //    e.j.: /i18n/es
  const hasLocal = hasPathnameLocale(pathname);
  if (hasLocal) return;

  // 3. Si no hay local, agregar el local a la URL
  //    e.j.: /i18n -> /i18n/es
  // const locale = getLocale({
  //   "accept-language": request.headers.get("Accept-Language") || "",
  // });
  // request.nextUrl.pathname = `${pathname}/${locale}`;

}

function hasPathnameLocale(pathname: string): boolean {
  return supportedLocales.some(
    (locale: string) =>
      pathname.includes(`/${locale}/`) || pathname.endsWith(`/${locale}`)
  );
}

// function getLocale(headers: { "accept-language": string }): string {
//   const languages = new Negotiator({ headers }).languages();

//   return match(languages, supportedLocales, defaultLocale);
// }
