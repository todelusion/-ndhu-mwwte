import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoPath from "../assets/LOGO.png";
import arrowDownPath from "../assets/arrow_down.svg";

const LandingPage = (): JSX.Element => {
  const { scrollY } = useScroll();
  const arrowDownY = useTransform(scrollY, [0, 500], [0, -150]);
  const titleY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="font-serif text-white">
      <nav className="fixed z-10 px-4 pt-8">
        <img src={logoPath} alt="logo" className="w-20" />
      </nav>
      <section className="flex-center relative h-screen font-semibold">
        <motion.div style={{ y: titleY }}>
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
          style={{ y: arrowDownY }}
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
        >
          <img src={arrowDownPath} alt="slide down" />
        </motion.div>
      </section>
      <section className="flex-center relative h-screen font-thin">
        <div className="px-14">
          <h2 className="relative mb-10 w-max text-2xl font-semibold">
            關於我們
            <motion.div
              initial={{ right: "100%" }}
              whileInView={{ right: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
            />
          </h2>
          <div className="leading-7 tracking-wider">
            <p className="mb-8">
              帶領學生從移工與老人的主體經驗，重新理解老年、照顧、性別與遷移等全球化脈絡下重要的議題。
            </p>
            <p>
              透過社會人文科學的視角，
              透過實地參與或文本、報導的閱讀，希望更加貼近並理解移工及老人在社會中的當今處境！
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 -z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:z-10 before:bg-slate-600/50  before:content-['']">
          <img src="https://i.imgur.com/YtVtc7m.png" alt="about" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
