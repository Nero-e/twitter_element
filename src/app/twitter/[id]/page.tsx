import getCharacter from "@/src/services/characters/getCharacter";
import { type } from "os";

type;

export default async function pageCharacter(props: {
  params: { id: number };
}) {
  const params = await props.params;
  const character = await getCharacter(params.id);
  return (
    <>
      <h1 className="text-5xl font-bold">{character.name}</h1>
    </>
  );
}
