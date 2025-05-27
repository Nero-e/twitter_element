import Link from "next/link";

import getUsers from "@/src/services/users/getUsers";
import { UserType } from "@/src/db/schema/users";
import { revalidatePath } from "next/cache";
import { orm } from "@/src/db";

export default async function User() {
  // const users = await getUsers();
  // vuelve a cargar la información ✨
  // revalidatePath("/users");

  const users = await orm.query.users.findMany({
    limit: 10,
  })

  return (
    <>
      <div className="flex min-h-full h-screen flex-col items-center p-20">
        {/* Twitter Container */}
        <div className="flex flex-col mx-auto max-w-sm w-full gap-2 rounded-xl bg-rich-black-900">
          <strong className="px-4 py-3 text-xl text-ghost-white">
            Usuarios
          </strong>
          {users?.map((user: UserType) => {
            return (
              <>
                <div key={user.id} className="px-4 py-3 text-ghost-white">
                  <Link href={`/users/${user.username}`}>{user.name}</Link>
                    <strong>{user.name}</strong>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
