import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoPath from "../assets/LOGO.png";
import images, { aboutPath } from "../assets/images";
import arrowDownPath from "../assets/arrow_down.svg";
import Carousel from "../components/Carousel";

const LandingPage = (): JSX.Element => {
  const { scrollY } = useScroll();
  const moveY = useTransform(scrollY, [0, 500], [0, -150]);
  const baseY = useTransform(scrollY, [0, 500], [0, 50]);

  /* 獲得每個section的 ref
  const addToRefs = (el: HTMLElement): void => {
    if (el === null || sectionRef.current.includes(el)) return;
    sectionRef.current.push(el);
    console.log(sectionRef);
  };
  */

  return (
    <div className="font-serif text-white">
      <nav className="fixed z-10 px-4 pt-8">
        <img src={logoPath} alt="logo" className="w-20" />
      </nav>
      <section className="flex-center relative h-screen font-semibold">
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
      <section className="flex-center relative h-screen text-base font-thin lg:text-lg">
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
      <section className="flex-col-center h-screen text-base font-thin lg:text-lg">
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
        <Carousel items={images} />
      </section>
    </div>
  );
};

export default LandingPage;
