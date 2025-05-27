"use client";
import { UserType } from "@/src/db/schema/users";
import getUsers, { getUsersByEmail } from "@/src/services/users/getUsers";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function PageClient() {
//   const [status, setStatus] = useState<"success" | "error" | "loading">();

// uso de primise.all para hacer en una sola peticion varios consumos de apis ❤️‍🔥
// const [users, bookmarks] =  await Promise.all([getUsers(), getBookmarks()]);

  preload("");

  const { data: users, status} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
       return fetch("./api/users")
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        return data as UserType[];
      });
    }
  })
}

// manera para consumir una api (traer informacion) en el cliente ✨

function preload(userEmail:string) {
  void getUsersByEmail(userEmail); // undefined
}
