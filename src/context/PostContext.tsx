import React, { createContext, useState } from "react";
import type { Post } from "../pages/blog";

export interface IPostContext {
  post: Post;
  handlePostSet: (obj: Post) => void;
}

export const PostContext = createContext({});
interface Props {
  children: JSX.Element;
}

export const PostProvider = ({ children }: Props): JSX.Element => {
  const [post, postSet] = useState<Post | null>(null);
  const handlePostSet = (obj: Post): void => {
    postSet(obj);
  };

  return (
    <PostContext.Provider value={{ post, handlePostSet }}>
      {children}
    </PostContext.Provider>
  );
};
