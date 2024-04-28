import { DocsData } from "../../../config/const";

import DocsBG from "../../../assets/backgrounds/DocsBG.png";
import DocsLines from "../../../assets/backgrounds/DocsLines.png";

import Card from "../../../assets/images/cards.png";

export default function DocsSection() {
  return (
    <section className="containerAlt overflow-hidden h-[800px] w-full px-36 text-white">
      <img
        src={DocsBG}
        alt=""
        className="absolute -z-10 left-0 w-full h-[800px]"
        width={1600}
        height={800}
      />
      <img
        src={DocsLines}
        alt=""
        className="w-auto left-0 absolute h-[800px] -z-10"
        height={800}
      />
      <div className="h-[800px] w-full grid grid-cols-2">
        <div className="my-auto">
          <div className="max-w-[448px] grid gap-6">
            <h2
              dangerouslySetInnerHTML={{ __html: DocsData.title }}
              className="font-bold text-[32px]"
            />
            <p>{DocsData.desc}</p>

            <div className="mt-7 grid gap-6">
              {DocsData.points.map(({ title, desc, img }, index) => (
                <div className="flex" key={index}>
                  <img src={img} alt="" className="object-cover" />
                  <div>
                    <h6 className="text-2xl font-bold">{title}</h6>
                    <p className="dark:text-white/80">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src={Card} alt="" className="h-full w-auto" />
        </div>
      </div>
    </section>
  );
}
