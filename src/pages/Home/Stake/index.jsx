import clsx from "clsx";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import StakeBg from "../../../assets/images/stake.svg";
import StarIcon from "../../../assets/shapes/star.svg";
import ArrowUpRight from "../../../assets/icons/arrow-up-right.svg";

import { StakeData } from "../../../config/const.js";

export default function StakeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const staggerDelay = 0;
  const delayIncrement = 0.4;
  const initialGradient = `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), radial-gradient(at left bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), radial-gradient(at top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`;
  const hoverGradient = `radial-gradient(63.27% 80.37% at 111.3% 3.79%, rgba(237, 92, 21, 0.5), rgba(237, 92, 21, 0.2)), radial-gradient(at left bottom, rgba(237, 92, 21, 0.1), rgba(237, 92, 21, 0)), radial-gradient(at top, rgba(237, 92, 21, 0.1), rgba(237, 92, 21, 0))`;

  return (
    <section className="py-5 !max-w-fit section" ref={ref}>
      <img
        src={StakeBg}
        alt=""
        className="absolute -z-10 h-[1225.5px] object-cover right-0"
      />
      <section className="flex gap-4 flex-wrap justify-center items-center">
        {StakeData.map(
          (
            { name, desc, imageSrc, href, bulletPoints, isBig, CustomFooter },
            index
          ) => (
            <Card
              name={name}
              desc={desc}
              href={href}
              isBig={isBig}
              imageSrc={imageSrc}
              bulletPoints={bulletPoints}
              CustomFooter={CustomFooter}
              delay={
                index < 2
                  ? index * staggerDelay
                  : (index - 2) * staggerDelay + delayIncrement * 2
              }
              key={index}
              inView={inView}
              hoverGradient={hoverGradient}
              initialGradient={initialGradient}
            />
          )
        )}
      </section>
    </section>
  );
}

const Card = ({
  name,
  desc,
  imageSrc,
  href,
  bulletPoints,
  isBig,
  CustomFooter,
  delay,
  inView,
  hoverGradient,
  initialGradient,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{
        scale: 0.99,
        backgroundImage: hoverGradient,
        transition: { duration: 0.1, ease: "easeInOut" },
      }}
      className="p-[3px] rounded-[32px] text-white cursor-pointer"
      style={{
        backgroundImage: initialGradient,
      }}
    >
      <div
        className={clsx(
          "relative rounded-[32px] overflow-hidden bg-theme-bg",
          isBig ? "min-w-[700px]" : "min-w-[514px]"
        )}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full object-cover h-full object-center"
        />
        <div className="px-6 py-6 bottom-0 absolute grid gap-4 w-full">
          <div className="border border-theme-orange text-xs rounded-full py-2 px-3 w-fit">
            <span className="h-2 w-2 bg-theme-orange rounded-full inline-block mr-2" />
            {desc}
          </div>
          <h3 className="font-bold text-[32px]">{name}</h3>
          <ul className="text-base mb-4 opacity-80">
            {bulletPoints.map((desc, index) => (
              <li key={index} className="flex gap-2 mb-1">
                <img src={StarIcon} alt="" />
                {desc}
              </li>
            ))}
          </ul>
          {href && (
            <a
              href={href}
              className="text-theme-orange flex justify-between w-full items-center font-bold outline-none"
            >
              Visit website
              <img src={ArrowUpRight} alt="" />
            </a>
          )}
          {CustomFooter && CustomFooter}
        </div>
      </div>
    </motion.div>
  );
};
