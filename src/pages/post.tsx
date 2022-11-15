import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../hooks/usePost";

const Post = (): JSX.Element => {
  const { post } = usePost();
  const { type } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (post === undefined) {
      navigate(`/blog/${type as string}`);
    }
  }, []);

  if (post === undefined) return <p>重新返回上一頁</p>;
  console.log(post);
  return (
    <div className="flex-center select-text pt-28">
      <article className="w-2/3 text-white">
        <h2 className="font-serif text-4xl font-black">{post.title}</h2>
        <ReactMarkdown>{`作者：${post.author}`}</ReactMarkdown>
        <hr className="my-8 h-px border-0 bg-gray-400" />
        <ReactMarkdown className="mb-32">{post.content}</ReactMarkdown>
        {/* {post.thumbnail !== undefined && (
          <div className="flex-center">
            <img src={post.thumbnail} alt="thumbnail" className="rounded-3xl" />
          </div>
        )} */}
      </article>
    </div>
  );
};

export default Post;
