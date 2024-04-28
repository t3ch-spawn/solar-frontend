import React, { useEffect, useState } from "react";
import Dash from "../../../../assets/images/dash.png";
import District from "../../../../assets/images/district.png";
import HeroBanner from "../../../../assets/images/hero-banner.png";
import CreditCard from "../../../../assets/images/credit-card.png";
import CreditCard2 from "../../../../assets/images/credit-card1.png";
import CreditCardDark from "../../../../assets/images/credit-card-dark.png";
import CreditCard2Dark from "../../../../assets/images/credit-card1-dark.png";

export default function MiddleArea() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="section flex flex-col items-center">
      <div className="relative w-fit mx-auto -mt-20">
        <img src={HeroBanner} alt="" />
        <img
          src={Dash}
          alt=""
          className="absolute top-60 -left-24 animate-GFG"
        />
        <img
          src={District}
          alt=""
          className="absolute bottom-10 left-5 animate-GFGRev"
        />
        {/* Right Side */}
        <>
          <img
            src={CreditCardDark}
            alt=""
            className="absolute top-60 right-0 animate-GFGRev hidden dark:block"
          />
          <img
            src={CreditCard}
            alt=""
            className="absolute top-60 right-0 animate-GFGRev dark:hidden block"
          />
        </>
        {/* Left Side */}
        <>
          <img
            src={CreditCard2Dark}
            alt=""
            className="absolute bottom-10 right-5 animate-GFG hidden dark:block"
          />
          <img
            src={CreditCard2}
            alt=""
            className="absolute bottom-10 right-5 animate-GFG dark:hidden block"
          />
        </>
      </div>
      <button
        className="flex flex-col justify-center items-center gap-3 mt-10 text-center"
        onClick={scrollDown}
      >
        <span className="dark:text-white text-black">Scroll down</span>
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9536 5.47928C15.2964 5.83918 15.2825 6.40887 14.9226 6.7517L8.62214 12.7533C8.2745 13.0844 7.7282 13.0844 7.3806 12.7533L1.08003 6.7517C0.720131 6.40887 0.706283 5.83918 1.04911 5.47928C1.39195 5.11937 1.96163 5.10553 2.32153 5.44835L8.00138 10.8586L13.6811 5.44835C14.0411 5.10553 14.6107 5.11937 14.9536 5.47928ZM14.9536 0.679278C15.2964 1.03918 15.2825 1.60887 14.9226 1.9517L8.62214 7.95331C8.2745 8.28439 7.7282 8.28439 7.3806 7.95331L1.08003 1.9517C0.720131 1.60887 0.706283 1.03918 1.04911 0.679278C1.39195 0.319374 1.96163 0.305526 2.32153 0.648354L8.00138 6.05866L13.6811 0.648354C14.0411 0.305526 14.6107 0.319374 14.9536 0.679278Z"
            fill="currentColor"
            class="dark:fill-white fill-black"
          />
        </svg>
      </button>
    </section>
  );
}
