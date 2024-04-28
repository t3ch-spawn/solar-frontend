import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import WhatsDifferentBg from "../../../assets/shapes/WhatsDifferent.png";
import WhatsDifferentContainerBg from "../../../assets/backgrounds/WhatsDifferentContainerBg.png";

import { DifferenceData } from "../../../config/const";

export default function WhatsDifferentSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="containerAlt flex flex-col items-center relative text-white">
      <img
        src={WhatsDifferentBg}
        alt=""
        width={1068}
        height={750}
        className="mx-auto object-cover -z-10 top-0 left-0"
      />
      <div className="absolute py-12 w-[80%] px-8 top-1/2 -translate-y-1/2 bg-theme-bg rounded-2xl overflow-hidden">
        <img
          src={WhatsDifferentContainerBg}
          alt=""
          width={1129}
          height={300.453}
          className="mx-auto absolute object-cover -z-10 top-0 left-0 h-full w-full opacity-40"
        />
        <div className="absolute -z-10 w-full h-full bg-[linear-gradient(180deg,_rgba(12,_12,_15,_0)_0%,_#0C0C0F_78%)] top-0 left-0" />
        <div className="top-0 px-4 lg:flex h-full gap-4">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="max-w-80 flex flex-col justify-between gap-4"
          >
            <h3
              className="font-bold text-xl flex-1"
              dangerouslySetInnerHTML={{ __html: DifferenceData.title }}
            />
            <p className="opacity-60 font-normal text-sm flex-1">
              {DifferenceData.desc}
            </p>
          </motion.div>
          <div className="grid gap-4 lg:grid-cols-2" ref={ref}>
            {DifferenceData.differences.map(
              ({ title, desc, imgSrc }, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.9 }}
                  className="flex items-start"
                >
                  <img src={imgSrc} alt="" className="w-24 h-24" />
                  <div>
                    <h6 className="text-xl font-bold">{title}</h6>
                    <p className="text-white/80 text-sm">{desc}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
