import React from "react";
import { useParams } from "react-router-dom";
import { BlogProvider } from "../context/PostContext";
import useBlog from "../hooks/usePost";

type Props = {};

const Post = (props: Props) => {
  const { post } = useBlog();
  console.log(post);

  return <h1>test</h1>;
};

export default Post;
