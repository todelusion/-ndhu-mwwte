import React, { useContext } from "react";
import { IPostContext, PostContext } from "../context/PostContext";

const useBlog = (): IPostContext => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("useBlog() muse be used inside a BlogContext");
  }

  return context as IPostContext;
};

export default useBlog;
