import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

interface ICarouselProps {
  items: string[];
}

const Carousel = ({ items }: ICarouselProps): JSX.Element => {
  const [carouselKey, carouselKeySet] = useState(0);
  const [leftConstraint, leftConstraintSet] = useState(0);
  console.log(`motion.div: ${carouselKey}, leftConstraint: ${leftConstraint}`);

  const handleLeftConstraint = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el === null) return;
    leftConstraintSet(el.scrollWidth - el.offsetWidth);
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      handleLeftConstraint("carouselWrapper");
      carouselKeySet((prev) => prev + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);
  return (
    <>
      <motion.div
        id="carouselWrapper"
        // 使用key值，強制framer motion重新認得更新後的leftConstraint
        key={carouselKey}
        // 由於dom渲染狀態需等component mounted才能作用，導致初始狀態沒有leftConstraint，
        // 因此使用onViewportEnter當畫面看到Carousel component時再觸發一次handleLeftConstraint
        onViewportEnter={() => {
          handleLeftConstraint("carouselWrapper");
        }}
        onViewportLeave={() => {
          handleLeftConstraint("carouselWrapper");
        }}
        className="max-w-xs cursor-grab overflow-hidden sm:max-w-md lg:max-w-5xl"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 100 }}
          drag="x"
          dragConstraints={{ right: 0, left: -leftConstraint }}
          className="flex"
        >
          {items.map((item) => (
            <div key={item} className="min-w-[200px] sm:min-w-[384px]">
              <img
                src={item}
                alt="about"
                className="pointer-events-none h-full w-full rounded-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carousel;
