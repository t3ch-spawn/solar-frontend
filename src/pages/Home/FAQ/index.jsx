import { FaqData } from "../../../config/const";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import Accordion from "../../../components/Accordion";
import FaqBg from "../../../assets/backgrounds/FAQ.png";
import FaqBgLight from "../../../assets/backgrounds/FAQLight.png";

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="section pt-20 text-center w-full">
      <div className="absolute w-screen left-0" ref={ref}>
        <img
          src={FaqBg}
          alt=""
          className="absolute w-screen max-w-[1600px] left-1/2 -translate-x-1/2 lg:-translate-y-[18%] -z-10 dark:block hidden"
        />
        <img
          src={FaqBgLight}
          alt=""
          className="absolute w-screen max-w-[1600px] left-1/2 -translate-x-1/2 lg:-translate-y-[18%] -z-10 block dark:hidden"
        />
      </div>
      <h3
        className="text-5xl font-bold"
        dangerouslySetInnerHTML={{ __html: FaqData.title }}
      />
      <p className="max-w-[625px] mt-6 font-normal text-sm mx-auto">
        {FaqData.desc}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="max-w-[770px] mt-48 w-full grid gap-3 mx-auto"
      >
        {FaqData.questions.map(({ ques, ans }, index) => (
          <Accordion question={ques} answer={ans} key={index} />
        ))}
      </motion.div>
    </section>
  );
}
