import clsx from "clsx";
import { useLocation } from "react-router-dom";

import routes from "../../route";

import Logo from "../../assets/logo.png";
import LogoLight from "../../assets/logo-light.png";
import NewTagIcon from "../../assets/icons/new-tag.svg";
import ToogleDarkMode from "../ToogleDarkMode";

export default function Header() {
  return (
    <nav className="containerAlt px-36 flex justify-between w-full py-8 sticky backdrop-blur-md top-0 z-50 items-center text-base font-semibold">
      <div className="flex gap-8">
        <ul className="flex gap-10">
          <LogoRender />
          {routes.map(({ title, href }, index) => (
            <NavBtn title={title} href={href} key={index} />
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <ToogleDarkMode />
        <a
          href="#contact"
          className="text-theme-orange border border-theme-orange rounded-full py-2 px-6 flex outline-none items-center hover:bg-theme-orange hover:text-white transition-all duration-200 ease-in-out"
        >
          <span>Сontact us</span>
        </a>
      </div>
    </nav>
  );
}

function NavBtn({ title, href }) {
  const { pathname } = useLocation();
  return (
    <li
      className={clsx(
        "hover:text-theme-orange text-base transition-all duration-200 ease-in-out",
        pathname === href && "text-theme-orange"
      )}
    >
      <a href={href} className="flex gap-1 items-center">
        {title}
        {(href === "/docs" || href === "/news") && (
          <img
            src={NewTagIcon}
            alt=""
            className="fill-theme-orange"
            width={16}
            height={16}
          />
        )}
      </a>
    </li>
  );
}

function LogoRender() {
  return (
    <>
      {/* Dark theme */}
      <img
        src={Logo}
        alt=""
        height={30}
        width={118}
        className="w-[118px] h-[30px] dark:block hidden"
      />
      {/* Light Theme */}
      <img
        src={LogoLight}
        alt=""
        height={30}
        width={118}
        className="w-[118px] h-[30px] block dark:hidden"
      />
    </>
  );
}
