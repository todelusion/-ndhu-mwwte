import React, { useContext } from "react";
import { IPostContext, PostContext } from "../context/PostContext";

const usePost = (): IPostContext => {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error("usePost() muse be used inside a BlogContext");
  }

  return context as IPostContext;
};

export default usePost;
