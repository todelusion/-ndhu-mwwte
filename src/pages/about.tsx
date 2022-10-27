import { motion } from "framer-motion";
import React from "react";
import Markdown from "react-markdown";
import posts from "../db/posts.json";

type Props = {};

const about = (props: Props) => {
  console.log("in about");
  return (
    <motion.div
      initial={{ x: "100vw", background: "rgb(44 62 80)" }}
      animate={{ x: 0, background: "rgb(255 255 255)" }}
      transition={{ duration: 1 }}
      className="absolute top-0"
    >
      <ul className="grid gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <div className="flex-center after-position-init relative h-72 w-96 border-2 border-black bg-white p-5 after:-z-10 after:translate-x-2 after:translate-y-2 after:bg-second after:content-['']">
            <h2>{post.title}</h2>
          </div>
        ))}
      </ul>
    </motion.div>
  );
};

export default about;
