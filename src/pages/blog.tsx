import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useNav } from "../layout/Nav";
import Markdown from "react-markdown";
import notes from "../db/notes.json";
import activities from "../db/activities.json";
import initBanner from "../assets/initBanner.jpg";
import usePost from "../hooks/usePost";
import { useEffect } from "react";

export interface Post {
  id: number;
  title: string;
  collection: string;
  author: string;
  date: string;
  time: string;
  thumbnail?: string;
  content: string;
}

const Blog = (): JSX.Element => {
  const { handlePostSet } = usePost();

  const { scrollY } = useScroll();
  const { type } = useParams();
  const navigate = useNavigate();
  const moveY = useTransform(scrollY, [0, 500], [0, -150]);
  const baseY = useTransform(scrollY, [0, 500], [0, 50]);

  const renderPostList = (): typeof activities => {
    switch (type) {
      case "activities":
        return activities;
      case "notes":
        return notes;
      default:
        return activities;
    }
  };
  const renderBanner = (): string => {
    const thumbailPost = renderPostList().find(
      (post: Post) => post.thumbnail !== undefined
    );
    const latestThumbailPost = thumbailPost as Post | undefined;
    if (latestThumbailPost?.thumbnail === undefined) return initBanner;
    return latestThumbailPost.thumbnail;
  };
  const handleClick = (post: Post): void => {
    if (type === undefined) return;
    handlePostSet(post);
    navigate(`/blog/${type}/${post.title}`);
  };

  return (
    <>
      <motion.div style={{ y: baseY }} className="relative h-96 w-full">
        <img
          src={renderBanner()}
          alt="banner"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ y: moveY }}
        className="absolute top-96 grid w-full grid-cols-1 justify-items-center gap-y-20 md:grid-cols-2"
      >
        {renderPostList().map((post: Post, index) => (
          <div
            key={post.id}
            onClick={() => handleClick(post)}
            onKeyUp={() => handleClick(post)}
            role="button"
            tabIndex={index}
            className="flex h-72 w-2/3 cursor-pointer items-center justify-between border-2 border-black bg-white transition hover:scale-105"
          >
            <h2 className="flex-center h-full w-2/3">
              <span>{post.title}</span>
            </h2>
            {post.thumbnail !== undefined && (
              <div className="relative h-full w-1/3">
                <img
                  src={post.thumbnail}
                  alt="thumbnail"
                  className="absolute right-0 h-full w-full object-cover object-center"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Blog;
