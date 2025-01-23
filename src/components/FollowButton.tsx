"use client";

import { useState } from "react";

const FollowButton = () => {
  const [following, setFollowing] = useState(true);
  const buttonClass = following
    ? "px-4 py-2 rounded-full text-sm font-bold border-0 text-ghost-white bg-rich-black-700"
    : "px-4 py-2 rounded-full text-sm font-bold border-0 text-ghost-white bg-raspberry";

  // const buttonClassName = `px-4 py-2 rounded-full text-sm font-bold border-0 ${
  //     following ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
  //   }`;

  return (
    <>
      <button onClick={() => setFollowing(!following)} className={buttonClass}>
        {following ? "Seguir" : "Siguiendo"}
      </button>
    </>
  );
};

export default FollowButton;
