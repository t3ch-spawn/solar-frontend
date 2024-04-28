import { OurImpactData } from "../../../config/const";
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import ArrowUpRight from "../../../assets/icons/arrow-up-right.svg";
import OurImpactLines from "../../../assets/backgrounds/OurImpactLines.png";

import Elipse2 from "../../../assets/shapes/Ellipse 2.svg";
import Elipse3 from "../../../assets/shapes/Ellipse 3.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurImpactSection() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const impactDivs = gsap.utils.toArray(".impactDivs");

    ScrollTrigger.create({
      trigger: impactDivs[0],
      endTrigger: impactDivs[impactDivs.length - 1],
      end: "bottom 50%",
      animation: gsap.to(".impactDivs-container", {
        position: "sticky",
        top: 0,
      }),
    });

    impactDivs.forEach((impact, idx, array) => {
      const height = impact.getBoundingClientRect().height;
      ScrollTrigger.create({
        trigger: impact,
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        scrub: true,
        animation: gsap.to(impact, {
          // y: `-${height}px`,
          position: "sticky",
          top: 100,
          opacity: 0,
        }),
      });
    });

    // ScrollTrigger.create({
    //   trigger: impactDivs[0],
    //   endTrigger: impactDivs[impactDivs.length - 1],
    //   start: "top 40%",
    //   end: "bottom 50%",
    //   scrub: true,
    //   animation: gsap.to(".impactDivs-container", {
    //     position: "sticky",
    //     top: 0,
    //   }),
    // });
    ScrollTrigger.create({
      trigger: impactDivs[0],
      endTrigger: impactDivs[impactDivs.length - 1],
      start: "top 40%",
      end: "bottom 80%",
      scrub: true,
      animation: gsap.to(".impact-ellipse", {
        position: "fixed",
        top: 30,
        opacity: 1,
        onComplete: () => {
          gsap.to(".impact-ellipse", {
            // position: "absolute",
            opacity: 0,
          });
        },
      }),
    });
  }, []);

  return (
    <div className="relative">
      <section className="section py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-bold text-5xl mb-8">{OurImpactData.title}</h2>
          <p className="font-normal text-base max-w-[714px] mx-auto mb-8">
            {OurImpactData.desc}
          </p>
        </motion.div>
        <a
          ref={ref}
          href={OurImpactData.btnHref}
          className="mx-auto bg-theme-orange font-semibold text-base rounded-full py-2 pl-5 pr-2 w-fit flex gap-4 items-center mb-8"
        >
          {OurImpactData.btnText}
          <span>
            <img src={ArrowUpRight} alt="" className="bg-white rounded-full" />
          </span>
        </a>
        <div className="relative">
          <img
            src={OurImpactLines}
            alt=""
            className="mx-auto impact-ellipse absolute -z-10"
            height={666}
            width={1069.5}
          />

          <div className="flex justify-center items-center w-full gap-3 mb-[100px]">
            {OurImpactData.cards.map(({ icon, title, desc }) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9 }}
                  className="flex justify-center items-center max-w-[500px]"
                >
                  <img src={icon} alt="" />

                  <div className="flex flex-col gap-2 items-start text-left">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className=" impactDivs-container snap-y snap-mandatory scrollbar-none">
            {OurImpactData.impacts.map(({ heading, icon }, index) => {
              return (
                <div
                  className="w-full impactDivs relative snap-center h-full mb-[100px]"
                  key={index}
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-[666px] object-cover object-center mx-auto"
                  />
                  <div className="absolute top-0 left-0 h-full w-full bg-filter dark:block hidden" />
                  <div
                    className="absolute top-0 left-0 h-full w-full block dark:hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.31) 0%, #FFFFFF 100%)",
                    }}
                  />
                  <h2
                    className="bottom-0 left-1/2 absolute bg-theme-gradient -translate-x-1/2 text-transparent bg-clip-text text-[54px] font-semibold leading-[70px]"
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <img
        src={Elipse2}
        alt=""
        className="impact-ellipse absolute left-0 top-0 h-[887.85px] "
      />
      <img
        src={Elipse3}
        alt=""
        className="impact-ellipse absolute right-0 top-1/3 h-[887.85px] "
      />
    </div>
  );
}
