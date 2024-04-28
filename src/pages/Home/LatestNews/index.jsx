import clsx from "clsx";
import { LatestNewsData } from "../../../config/const";

export default function LatestNewsSection() {
  return (
    <section className="containerAlt px-36 grid lg:grid-cols-2">
      <div className="h-full lg:border-r border-white/20 lg:pr-8 flex flex-col gap-6">
        <h2
          className="text-[28px] font-bold"
          dangerouslySetInnerHTML={{ __html: LatestNewsData.title }}
        />
        <NewsCard
          title={LatestNewsData.news[0].title}
          img={LatestNewsData.news[0].img}
          date={LatestNewsData.news[0].date}
          wrapperClass="max-w-none max-h-none flex-1"
          imgClass="w-[292px] h-[164px] rounded-2xl"
        />
      </div>
      <ul className="grid grid-cols-2 lg:pl-8 gap-6">
        {LatestNewsData.news.slice(1, 5).map(({ title, img, date }, index) => (
          <NewsCard
            title={title}
            img={img}
            date={date}
            key={index}
            wrapperClass="self-center justify-center"
          />
        ))}
      </ul>
    </section>
  );
}

function NewsCard({ title, img, date, wrapperClass, imgClass }) {
  return (
    <div
      className={clsx(
        "flex max-h-20 max-w-[292px] overflow-hidden gap-3",
        wrapperClass && wrapperClass
      )}>
      <img
        src={img}
        alt=""
        height={80}
        width={142.22}
        className={clsx(
          "h-20 w-[142px] object-cover object-center rounded-lg",
          imgClass && imgClass
        )}
      />
      <div className="text-sm font-normal">
        <h6 className="line-clamp-2">{title}</h6>
        <p className="opacity-60 mt-3">{date}</p>
      </div>
    </div>
  );
}
