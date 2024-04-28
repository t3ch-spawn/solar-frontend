import { useEffect, useState } from "react";

import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import clsx from "clsx";

export default function ToogleDarkMode() {
  const [currectMode, setCurrentMode] = useState("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentMode("light");
    }
  }, []);

  function toogleDarkMode() {
    setCurrentMode(mode => {
      console.log(mode);
      if (mode === "dark") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        return "light";
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        return "dark";
      }
    });
  }

  return (
    <>
      <button
        className={clsx(
          "h-12 w-12 rounded-full border border-white border-opacity-25 flex justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out",
          currectMode === "dark" ? "bg-[#FFFFFF08]" : "bg-theme-orange"
        )}
        onClick={toogleDarkMode}>
        {currectMode === "dark" ? (
          <img src={MoonIcon} alt="" width={24} height={24} />
        ) : (
          <img src={SunIcon} alt="" width={24} height={24} />
        )}
      </button>
    </>
  );
}
