import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useState } from "react";
import logoPath from "../assets/LOGO.png";
import images, { aboutPath, activities, outsides } from "../assets/images";
import arrowDownPath from "../assets/arrow_down.svg";
import Carousel from "../components/Carousel";
import Modal from "../components/Modal";

const initialModalInfo = {
  title: "",
  path: "",
  author: "",
  date: "",
  location: "",
  descript: "",
};

const LandingPage = (): JSX.Element => {
  const { scrollY } = useScroll();
  const [modalInfo, modalInfoSet] = useState({
    toggle: false,
    initialModalInfo,
  });
  const moveY = useTransform(scrollY, [0, 500], [0, -150]);
  const baseY = useTransform(scrollY, [0, 500], [0, 50]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const fadeInChild = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const toggleModal = (boolean: boolean): void => {
    console.log("click");
    modalInfoSet((prev) => ({ ...prev, toggle: boolean }));
  };

  return (
    <div className="font-serif text-white">
      <nav className="fixed z-20 px-4 pt-8">
        <img src={logoPath} alt="logo" className="w-20" />
      </nav>
      <section className="flex-center relative min-h-screen font-semibold">
        <motion.div style={{ y: baseY }}>
          <h1>
            <span className="mb-2 block font-light">國立東華大學VIP課程</span>
            <span className="text-3xl">移工與她的老人</span>
            <br />
            <span className="tracking-wider">
              Migrant works with the elderly
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse",
            duration: 0.5,
          }}
          style={{ y: moveY }}
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
        >
          <img src={arrowDownPath} alt="slide down" />
        </motion.div>
      </section>
      <section className="flex-center relative min-h-screen text-base font-thin lg:text-lg">
        <div className="px-14">
          <h2 className="relative z-10 mb-10 w-max text-2xl font-semibold lg:text-4xl">
            關於我們
            <motion.div
              initial={{ right: "100%" }}
              whileInView={{ right: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
            />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.5 }}
            className="leading-7 tracking-wider"
          >
            <p className="mb-8">
              帶領學生從移工與老人的主體經驗，重新理解老年、照顧、性別與遷移等全球化脈絡下重要的議題。
            </p>
            <p>
              透過社會人文科學的視角，
              透過實地參與或文本、報導的閱讀，希望更加貼近並理解移工及老人在社會中的當今處境！
            </p>
          </motion.div>
        </div>
        <div className="before-position-init absolute left-0 top-1/2 -z-10 -translate-y-1/2 before:rounded-r-full before:bg-slate-700/90 before:content-['']">
          <img src={aboutPath} alt="about" className="rounded-r-full" />
        </div>
      </section>
      <section className="flex-col-center min-h-screen text-base font-thin lg:text-lg">
        <div className="mb-10 px-14">
          <h2 className="relative z-10 mb-10 w-max text-2xl font-semibold lg:text-4xl">
            課堂形式
            <motion.div
              initial={{ right: "100%" }}
              whileInView={{ right: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
            />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.5 }}
            className="leading-7 tracking-wider"
          >
            <p className="mb-8">
              由老師解析課程關懷的移工與老人與社會的關係，或者分享自己在過去的研究經歷及田野調查技巧。
            </p>
            <p>
              以小組形式規劃與課程報告及學習進度，透過自行排定主題、期程、計畫內容，培養同學在課程之餘的自主學習動力。
            </p>
          </motion.div>
        </div>
        <Carousel opacity="opacity-90" items={images} />
      </section>

      <section className="flex-col-center mb-10 min-h-screen text-base font-thin lg:text-lg">
        <h2 className="relative z-10 mb-10 w-max text-2xl font-semibold lg:text-4xl">
          活動紀錄
          <motion.div
            initial={{ right: "100%" }}
            whileInView={{ right: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
          />
        </h2>
        <motion.ul
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 gap-10 px-5"
        >
          {activities.map((activity) => (
            <React.Fragment key={activity.path}>
              <motion.li
                variants={fadeInChild}
                className="imgList relative max-h-28 select-none overflow-hidden rounded-full sm:max-h-40 md:max-h-80"
                onClick={() => {
                  modalInfoSet((prev) => ({
                    ...prev,
                    toggle: true,
                    initialModalInfo: activity,
                  }));
                }}
              >
                <p className="absolute z-10 h-full w-full opacity-0 duration-300">
                  <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-xs sm:text-base">
                    {activity.title}
                  </span>
                </p>
                <img
                  src={activity.path}
                  alt="imgList"
                  className="h-full w-full bg-slate-500 object-cover opacity-90 duration-300"
                />
              </motion.li>
            </React.Fragment>
          ))}
        </motion.ul>
      </section>
      <section className="flex-col-center min-h-screen text-base font-thin lg:text-lg">
        <h2 className="relative z-10 mb-10 w-max text-2xl font-semibold lg:text-4xl">
          移地教學－台東聖母醫院
          <motion.div
            initial={{ right: "100%" }}
            whileInView={{ right: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
          />
        </h2>
        <motion.ul
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 gap-10 px-5"
        >
          {outsides.map((outside) => (
            <React.Fragment key={outside.path}>
              <motion.li
                variants={fadeInChild}
                className="imgList relative max-h-28 overflow-hidden rounded-full sm:max-h-40 md:max-h-80"
              >
                <p className="absolute z-10 h-full w-full opacity-0 duration-150">
                  <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2">
                    {outside.title}
                  </span>
                </p>
                <img
                  src={outside.path}
                  alt="activity"
                  className="h-full w-full bg-slate-500 object-cover opacity-80 duration-150"
                />
              </motion.li>
            </React.Fragment>
          ))}
        </motion.ul>
      </section>
      <AnimatePresence>
        {modalInfo.toggle && (
          <Modal
            key="Modal"
            toggleModal={toggleModal}
            article={modalInfo.initialModalInfo}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
