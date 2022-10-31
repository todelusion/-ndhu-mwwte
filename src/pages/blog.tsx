import { motion, useScroll, useTransform } from "framer-motion";
import { useNav } from "../layout/Nav";
import Markdown from "react-markdown";
import notes from "../db/notes.json";
import activities from "../db/activities.json";
import outside04 from "../assets/outside04.jpg";
import { useParams } from "react-router-dom";

type Props = {};

const Blog = (props: Props) => {
  const { showNav } = useNav();
  const { scrollY } = useScroll();
  const { id } = useParams();
  console.log(id);
  const moveY = useTransform(scrollY, [0, 500], [0, -150]);
  const baseY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <>
      <motion.div style={{ y: baseY }} className="relative h-96 w-full">
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: showNav ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute h-full w-full bg-second"
        />
        <img
          src={outside04}
          alt="banner"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ y: moveY }}
        className="flex-col-center absolute top-96 w-full"
      >
        <ul className="grid gap-10 md:grid-cols-2">
          {activities.map((post) => (
            <div
              key={post.id}
              className="flex-center relative h-72 w-96 border-2 border-black bg-white p-5"
            >
              <h2>{post.title}</h2>
            </div>
          ))}
        </ul>
        <ul>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
          <li>lorem50</li>
        </ul>
      </motion.div>
    </>
  );
};

export default Blog;
