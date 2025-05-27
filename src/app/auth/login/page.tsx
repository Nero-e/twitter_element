"use client"

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { login } from "./actions";
export default function Login() {
  const [ state, action ] = useActionState(login, { error: ''});
  const status = useFormStatus();

  return (
    <div className="flex justify-center items-center h-screen text-ghost-white">
      <div className="flex w-[500px] h-auto p-5 border-ghost-white border-[8px] bg-rich-black-900">
        <div className="space-y-4 w-full">
          <h1 className="text-2xl font-extrabold uppercase tracking-wider">
            Login
          </h1>
          <form action={action} className="flex flex-col gap-4">
            {/* <input
              className="w-full p-2 text-ghost-white placeholder-gray-400 focus:border-raspberry border-b-[4px] bg-transparent"
              type="text"
              placeholder="Correo electrónico"
            /> */}
            <input
              className="w-full p-2 text-ghost-white placeholder-gray-400 focus:border-raspberry border-b-[4px] bg-transparent"
              type="password"
              placeholder="Contraseña"
              name="pwd"
            />
            <button className="w-1/2 px-4 py-2 text-white bg-rich-black-700 hover:bg-raspberry">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

