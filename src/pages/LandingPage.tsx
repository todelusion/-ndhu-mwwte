import { motion, useScroll } from "framer-motion";
import logoPath from "../assets/LOGO.png";
import arrowDownPath from "../assets/arrow_down.svg";

const LandingPage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <div className="font-serif text-white">
      <nav className="absolute px-4 pt-8">
        <img src={logoPath} alt="logo" className="w-20" />
      </nav>
      <section className="flex-center relative min-h-screen font-semibold">
        <p>
          <span className="mb-2 block font-light">國立東華大學VIP課程</span>
          <span className="text-3xl">移工與她的老人</span>
          <br />
          <span className="tracking-wider">Migrant works with the elderly</span>
        </p>
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
        >
          <img
            src={arrowDownPath}
            alt="slide down"
            className="absolute bottom-5 left-1/2 -translate-x-1/2"
          />
        </motion.div>
      </section>
      <section className="flex-center min-h-screen font-semibold">
        <p>test</p>
      </section>
    </div>
  );
};

export default LandingPage;
