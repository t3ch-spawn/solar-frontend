import clsx from "clsx";
import { HeroData } from "../../../../config/const";

export default function BottomArea() {
  return (
    <div className="relative overflow-hidden">
      {/* Left Side Filter */}
      <Filter
        className="left-0 top-0 hidden dark:block"
        filterGradient="linear-gradient(270deg, rgba(12, 12, 15, 0) 0%, #0C0C0F 100%)"
      />
      {/* Light Mode */}
      <Filter
        className="left-0 top-0 dark:hidden block"
        filterGradient="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
      />

      {/* Right Side Filter */}
      <Filter
        className="right-0 top-0 rotate-180 hidden dark:block"
        filterGradient="linear-gradient(270deg, rgba(12, 12, 15, 0) 0%, #0C0C0F 100%)"
      />
      {/* Light Mode */}
      <Filter
        className="right-0 top-0 dark:hidden block rotate-180"
        filterGradient="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
      />

      <div className="flex gap-28 animate-marquee ">
        <LogoContainer className="left-0" />
        <LogoContainer className="animate-swap" />
      </div>
    </div>
  );
}

function LogoContainer({ className }) {
  return (
    <>
      {/* Dark More  */}
      <div
        className={clsx(
          "mt-24 mb-12 items-center justify-between gap-28 shrink-0 dark:flex hidden",
          className
        )}>
        {HeroData.bottom.icons.map((icon, index) => (
          <img src={icon} alt="" height={31} className="h-[31px]" key={index} />
        ))}
      </div>

      {/* Light More  */}
      <div
        className={clsx(
          "mt-24 mb-12 items-center justify-between gap-28 shrink-0 flex dark:hidden",
          className
        )}>
        {HeroData.bottom.iconsLight.map((icon, index) => (
          <img src={icon} alt="" height={31} className="h-[31px]" key={index} />
        ))}
      </div>
    </>
  );
}

function Filter({ className, filterGradient }) {
  return (
    <div
      className={clsx("absolute w-[125px] h-[214px] z-10", className)}
      style={{
        background: filterGradient,
      }}
    />
  );
}
