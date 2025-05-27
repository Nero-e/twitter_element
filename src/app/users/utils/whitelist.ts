import { orm } from "@/src/db";
import { UserType } from "@/src/db/schema/users";

const isInWhileList = async (user: UserType): Promise<boolean> => {
  const users = await orm.query.users.findMany({
    limit: 3,
    where: (entry, { eq }) => eq(entry.id, user.id!),
  });

  await sleep(2000);

  return true;
};

function sleep(ms = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default isInWhileList;
