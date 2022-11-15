import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../hooks/usePost";

type Props = {};

const Post = (props: Props) => {
  const { post } = usePost();
  console.log(post);

  return <h1>test</h1>;
};

export default Post;
