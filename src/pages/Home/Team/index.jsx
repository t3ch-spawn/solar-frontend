import clsx from "clsx";
import { useRef, useState } from "react";

import { TeamData } from "../../../config/const";

import TeamBG from "../../../assets/backgrounds/TeamBG.png";
import TeamLines from "../../../assets/backgrounds/TeamLines.png";
import TeamLinesLight from "../../../assets/backgrounds/TeamLinesLight.png";

import NextIcon from "../../../assets/icons/next";
import PrevIcon from "../../../assets/icons/prev";

export default function TeamSection() {
  const membersContainerRef = useRef();
  const [selectedTeam, setSelectedTeam] = useState(0);

  const scrollBy = n => {
    membersContainerRef.current.scrollBy({
      top: 0,
      left: n * 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="section relative">
      <img src={TeamBG} alt="" width={2100} height={1566} />
      <img
        src={TeamLines}
        alt=""
        width={1239}
        height={571}
        className="absolute top-1/2 -translate-y-1/2 -z-10 object-cover object-center dark:block hidden"
      />
      <img
        src={TeamLinesLight}
        alt=""
        width={1239}
        height={571}
        className="absolute top-1/2 -translate-y-1/2 -z-10 object-cover object-center dark:hidden block"
      />
      <div className="absolute grid gap-4 w-full top-1/2 -translate-y-1/2">
        <div className="flex overflow-auto scrollbar-none mx-auto p-2 gap-[10px] rounded-full dark:bg-[#0C0C0F] bg-white w-fit">
          {TeamData.members.map(({ type }, index) => (
            <button
              className={clsx(
                "font-semibold text-base rounded-full py-2 px-5 w-fit transition-all",
                index === selectedTeam &&
                  "bg-theme-orange text-white dark:text-theme-bg"
              )}
              key={index}
              onClick={() => setSelectedTeam(index)}>
              {type}
            </button>
          ))}
        </div>
        <div
          className="flex overflow-auto w-full gap-6 scrollbar-none snap-x text-white"
          ref={membersContainerRef}>
          {TeamData.members[selectedTeam].members.map(
            ({ name, href, job, icon }, index) => (
              <MemberCard
                name={name}
                href={href}
                job={job}
                icon={icon}
                key="index"
              />
            )
          )}
        </div>
        <div className="flex gap-4 mx-auto">
          <button
            onClick={() => scrollBy(-1)}
            className="rounded-full h-12 w-12 flex justify-center items-center bg-white/5 border fill-[#999999] border-[#999999] transition-all hover:border-theme-orange hover:fill-theme-orange">
            <PrevIcon />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="rounded-full h-12 w-12 flex justify-center items-center bg-white/5 border fill-[#999999] border-[#999999] transition-all hover:border-theme-orange hover:fill-theme-orange">
            <NextIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ name, href, job, icon }) {
  return (
    <div
      className="p-[1px] rounded-xl snap-center"
      style={{
        backgroundImage: `radial-gradient(163.27% 64.37% at 121.3% 37.79%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)), radial-gradient(at left bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), radial-gradient(at top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`,
      }}>
      <div className="h-[312px] w-[212px] p-3 rounded-xl flex flex-col shrink-0 bg-[#0C0C0F]">
        <div className="flex-1">
          <img src={icon} alt="" className="h-full w-full object-cover" />
        </div>
        <a className="pt-6" href={href}>
          <p className="font-semibold text-lg">{name}</p>
          <p className="opacity-60 text-xs">{job}</p>
        </a>
      </div>
    </div>
  );
}
