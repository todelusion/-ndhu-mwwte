import { motion } from "framer-motion";
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
      className="flex-center fixed top-0 bottom-0 left-0 right-0 z-20 bg-black/50"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex-center h-3/4 w-3/4 rounded-3xl bg-white md:rounded-full"
      >
        <p className="text-black">{article.author}</p>
        <button
          className="text-black"
          type="button"
          onClick={() => toggleModal(false)}
        >
          按鈕
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
