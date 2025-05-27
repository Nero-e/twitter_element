import { Suspense } from "react";

import { getUser, getUsersByUsername } from "@/src/services/users/getUsers";
import isInWhileList from "../utils/whitelist";
import Loading from "../../loading";

export default async function pageUser({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = await getUsersByUsername(username);

  if (!user) {
    return <p>User not found</p>;
  }

  const check = await isInWhileList(user);

  preload;

  return (
    <>
      <Suspense fallback={<Loading/>}>
        {check && (
          <h1 className="text-5xl font-bold">heyyyyyyy {user?.name}</h1>
        )}
      </Suspense>
    </>
  );
}

const preload = (userId: number) => {
  void getUser(userId); // undefiend
};
