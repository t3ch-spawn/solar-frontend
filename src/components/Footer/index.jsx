import Logo from "../../assets/logo.png";
import footerImage from "../../assets/images/footer-image.png";
import { FooterData } from "../../config/const";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <footer
      className="containerAlt px-36 pt-16 mt-40 dark:bg-theme-bg grid gap-5"
      ref={ref}
    >
      <div className="flex justify-between">
        <div className="grid gap-2">
          <img src={Logo} alt="" width={117.96} height={28.32} />
          <p className="font-medium text-sm">{FooterData.email}</p>
          <div className="flex gap-3">
            {FooterData.socials.map(({ href, img }, index) => (
              <a href={href} key={index}>
                <img src={img} width={40} height={40} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-20 text-[#A7A7A7]">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold dark:text-white">
              About Us
            </span>
            {FooterData.AboutUs.map(({ href, title }, index) => (
              <a href={href} key={index} className="cursor-pointer">
                {title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold dark:text-white">
              Products
            </span>
            {FooterData.Products.map(({ href, title }, index) => (
              <a href={href} key={index} className="cursor-pointer">
                {title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold dark:text-white">Blog</span>
            {FooterData.Blog.map(({ href, title }, index) => (
              <a href={href} key={index} className="cursor-pointer">
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p
        className="text-xs font-normal text-[#828282]"
        dangerouslySetInnerHTML={{ __html: FooterData.copyrightMessage }}
      />

      <div className="text-xs font-normal text-[#828282] flex justify-between">
        <div className="flex gap-3">
          {FooterData.copyrightPages.map(({ title, href }, index) => (
            <a href={href} key={index}>
              {title}
            </a>
          ))}
        </div>
        <p>{FooterData.copyright}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <img src={footerImage} alt="" width={1200} height={224} />
        <div
          className="absolute top-0 left-0 w-full h-full hidden dark:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(12, 12, 15, 0.31) 0%, #0C0C0F 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full block dark:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.31) 0%, #FFFFFF 100%)",
          }}
        />
      </motion.div>
    </footer>
  );
}
