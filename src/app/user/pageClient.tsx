"use client";
import { UserType } from "@/src/db/schema/users";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function PageClient() {
//   const [status, setStatus] = useState<"success" | "error" | "loading">();

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

// manera para consumir una api (traer informacion) en el cliente
