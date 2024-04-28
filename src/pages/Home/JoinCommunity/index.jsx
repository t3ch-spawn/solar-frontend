import clsx from "clsx";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { JoinCommunityData } from "../../../config/const";

import GlobeIcon from "../../../assets/icons/globe.svg";
import JoinCommunityBg from "../../../assets/backgrounds/JoinCommunity.png";

export default function JoinCommunitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="containerAlt px-36 py-20 w-full">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="bg-theme-bg rounded-[32px] relative overflow-hidden"
        ref={ref}
      >
        <div className="w-full h-full relative z-20 rounded-[32px] overflow-hidden bg-[linear-gradient(180deg,_rgba(20,_20,_24,_0)_0%,_#141418_68.5%)] text-white">
          <div className="py-16 px-8 grid lg:grid-cols-2">
            <div className="lg:max-w-[450px]">
              <h3 className="font-bold text-5xl mb-5">
                {JoinCommunityData.title}
              </h3>
              <p className="font-normal text-base">{JoinCommunityData.desc}</p>
            </div>
            <div className="h-full grid items-end">
              <div className="p-2 pl-4 mt-auto border border-white/10 rounded-full bg-theme-bg flex">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full placeholder-opacity-50 "
                  placeholder={JoinCommunityData.inputPlaceHolder}
                />
                <button className="bg-theme-orange font-semibold text-base rounded-full py-2 px-5">
                  {JoinCommunityData.btnText}
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3">
            {JoinCommunityData.communities.map(
              ({ name, desc, href, icon }, index) => (
                <CommunitiesCard
                  name={name}
                  desc={desc}
                  href={href}
                  icon={icon}
                  index={index}
                  key={index}
                />
              )
            )}
          </div>
        </div>
        <img
          src={JoinCommunityBg}
          alt=""
          className="absolute w-full h-full z-10 object-cover top-0 left-0"
        />
      </motion.div>
    </section>
  );
}

function CommunitiesCard({ name, desc, href, icon, index }) {
  return (
    <div
      className={clsx(
        "flex flex-col border-t border-r border-white/10 p-8",
        index !== 0 && index % 2 === 0 && "border-r-0"
      )}
    >
      <img src={icon} alt="" className="w-8 h-8" width={32} height={32} />
      <span className="opacity-50 text-sm font-normal my-8">{desc}</span>
      <a
        href={href}
        className="w-full bg-[#0C0C0F] rounded-full text-base font-bold py-[14px] px-4 flex justify-between items-center cursor-pointer"
      >
        {name}
        <img
          src={GlobeIcon}
          alt=""
          className="w-4 h-4"
          width={16}
          height={16}
        />
      </a>
    </div>
  );
}
