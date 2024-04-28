import TopArea from "./Top";
import MiddleArea from "./Middle";
import BottomArea from "./Bottom";

import Ellipse from "../../../assets/shapes/Ellipse 1.svg";
import HeroBackground from "../../../assets/backgrounds/hero.svg";

export default function HeroSection() {
  return (
    <section className="section text-center overflow-hidden">
      <img
        src={HeroBackground}
        alt=""
        className="absolute -z-10 object-cover top-0 left-0"
      />
      <img
        src={Ellipse}
        alt=""
        className="absolute -z-10 object-cover top-0 right-0"
      />
      <TopArea />
      <MiddleArea />
      <BottomArea />
    </section>
  );
}
