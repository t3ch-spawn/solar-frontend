import { HeroTopData } from "../../../../config/const";

import ArrowUpRight from "../../../../assets/icons/arrow-up-right.svg";

export default function TopArea() {
  return (
    <div className="grid gap-6 mt-5">
      <h1
        className="leading-[63px] font-bold text-[32px] lg:text-[64px]"
        dangerouslySetInnerHTML={{ __html: HeroTopData.title }}
      />
      <p
        className="font-normal text-base"
        dangerouslySetInnerHTML={{ __html: HeroTopData.desc }}
      />
      <a
        href="#join"
        className="mx-auto bg-theme-orange font-semibold text-base rounded-full py-2 pl-5 pr-2 w-fit flex gap-4 items-center">
        {HeroTopData.btnText}
        <span>
          <img src={ArrowUpRight} alt="" className="bg-white rounded-full" />
        </span>
      </a>
    </div>
  );
}
