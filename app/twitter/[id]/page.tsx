import getCharacter from "@/app/api/character/getCharacter";
import { type } from "os";

type;

export default async function pageCharacter({
  params,
}: {
  params: { id: number };
}) {
  const character = await getCharacter(params.id);
  return (
    <>
      <h1 className="text-5xl font-bold">{character.name}</h1>
    </>
  );
}
