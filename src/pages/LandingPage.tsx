import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoPath from "../assets/LOGO.png";
import arrowDownPath from "../assets/arrow_down.svg";

const LandingPage = (): JSX.Element => {
  const { scrollY } = useScroll();
  const arrowDownY = useTransform(scrollY, [0, 300], [0, -150]);
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);

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
      <section className="flex-center h-screen font-semibold">
        <h2 className="relative text-2xl">
          關於我們
          <motion.div
            initial={{ right: "100%" }}
            whileInView={{ right: 0 }}
            transition={{ delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-0 left-0 top-[85%] -z-10 bg-primary"
          />
        </h2>
      </section>
    </div>
  );
};

export default LandingPage;
