import TwitterFollowCard from "./TwitterFollowCard";
import getCharacters from "../services/characters/getCharacters";

type CharacterProps = {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  image: string;
};

const TwitterComponent = async () => {
  const characters = await getCharacters();

  // console.log(characters);

  return (
    <>
      <div className="flex min-h-full h-screen flex-col justify-center items-center">
        {/* Twitter Container */}
        <div className="flex flex-col mx-auto max-w-sm w-full gap-2 rounded-xl bg-rich-black-900">
          <strong className="px-4 py-3 text-xl text-ghost-white">
            A quién seguir
          </strong>
          {characters?.slice(0, 3).map((post: CharacterProps) => {
            return (
              <TwitterFollowCard
                // isFollowing={handleFollow}
                key={post.id}
                id={post.id}
                name={post.name}
                hashtag={`@${post.status}`}
                image={post.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default TwitterComponent;
