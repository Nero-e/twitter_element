import Link from "next/link";
import FollowButton from "./FollowButton";
import Image from "next/image";

interface TwitterFollowCardProps {
  name?: string;
  hashtag?: string;
  image: string;
  id: number;
  isFollowing?: () => void;
}

const TwitterFollowCard = (props: TwitterFollowCardProps) => {
  const { name, hashtag, image, id, isFollowing } = props;
  return (
    <>
      <div
        key={id}
        className="flex flex-row w-full items-center justify-between px-4 py-3"
      >
        <div className="flex items-center">
          <div className="flex flex-col rounded-full w-[48px] h-[48px] justify-center items-center bg-ghost-white">
            <Image
              alt="jeje"
              src={image}
              height={500}
              width={500}
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="flex flex-col text-left leading-5 ml-3 gap-1">
            <strong className="text-[15px] text-ghost-white">
              <Link href={`/twitter/${id}`}>{name}</Link>
            </strong>

            <span className="text-[15px] text-[#71767b]">{hashtag}</span>
          </div>
        </div>
        <div className="flex">
          <FollowButton />
        </div>
      </div>
    </>
  );
};

export default TwitterFollowCard;
