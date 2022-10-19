import { motion } from "framer-motion";
import { url } from "inspector";
import React from "react";
import { string } from "zod";

interface IModalProps {
  article: {
    title: string;
    path: string;
    author: string;
    date: string;
    location: string;
    descript: string;
  };
  toggleModal: (arg0: boolean) => void;
}

const Modal = ({ article, toggleModal }: IModalProps): JSX.Element => {
  console.log("in modal");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-center fixed top-0 bottom-0 left-0 right-0 z-20 overflow-clip bg-black/50"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ backgroundImage: `url(${article.path})` }}
        className="flex-end relative h-2/3 w-4/5 bg-white bg-contain bg-fixed bg-top bg-no-repeat text-black scrollbar-thin scrollbar-thumb-second/50 sm:h-2/3 lg:h-5/6 lg:w-3/4"
      >
        <ul className="absolute top-2/3 bottom-0 left-0 right-0 min-h-max rounded-t-3xl border-2 border-black bg-white px-5 py-10 font-medium md:left-20 md:right-20">
          <li className="mb-5 text-lg font-bold">{article.title}</li>
          <li>講者：{article.author}</li>
          <li>時間：{article.date}</li>
          <li className="mb-20">地點：{article.location}</li>
          <li>{article.descript}</li>
        </ul>
      </motion.div>
      <button
        type="button"
        onClick={() => toggleModal(false)}
        className="fixed right-14 top-14 select-none rounded-full bg-white p-2 font-sans font-black leading-3 text-second"
      >
        X
      </button>
    </motion.div>
  );
};

export default Modal;
