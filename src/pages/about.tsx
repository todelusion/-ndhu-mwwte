import React from "react";
import Markdown from "react-markdown";
import posts from "../posts.json";

type Props = {};

const about = (props: Props) => {
  console.log("in about");
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <>
            <Markdown className="text-white">{post.content}</Markdown>
          </>
        ))}
      </ul>
    </div>
  );
};

export default about;
