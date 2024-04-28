import TymtBG from "../assets/backgrounds/Tymt.png";
import SolarBG from "../assets/backgrounds/solar.png";
import DistrictBG from "../assets/backgrounds/Distic53.png";
import SolarCardBG from "../assets/backgrounds/SolarCard.png";

import appleDownload from "../assets/Apple.png";
import googleDownload from "../assets/Google.png";

import DposIcon from "../assets/icons/dpos.png";
import FastIcon from "../assets/icons/fast.png";
import VoltingIcon from "../assets/icons/voting.png";
import ExceprtIcon from "../assets/icons/Expert.png";
import AdvanceIcon from "../assets/icons/advance.png";
import SolutionIcon from "../assets/icons/Solution.png";

import GithubIcon from "../assets/logo/github.png";
import MediumIcon from "../assets/logo/medium.png";
import DiscordIcon from "../assets/logo/Discrod.png";
import TelegramIcon from "../assets/logo/telegram.png";
import TwitterIcon from "../assets/logo/prime_twitter.png";

import GateIoLogo from "../assets/logo/GateIo.png";
import BitgetLogo from "../assets/logo/Bitget.png";
import SolarLogo from "../assets/logo/Solar.png";
import BinanceLogo from "../assets/logo/Binance.png";
import CoinmarketcapLogo from "../assets/logo/Coinmarketcap.png";

import GateIoLogoLight from "../assets/logo/GateIoLight.png";
import BitgetLogoLight from "../assets/logo/BitgetLight.png";
import SolarLogoLight from "../assets/logo/Solar-light.png";
import BinanceLogoLight from "../assets/logo/Binance-light.png";
import CoinmarketcapLogoLight from "../assets/logo/coinmarketcap-light.png";

import Image1 from "../assets/news/image.png";
import Image2 from "../assets/news/image2.png";
import Image3 from "../assets/news/image3.png";
import Image4 from "../assets/news/image4.png";
import Image5 from "../assets/news/image5.png";
import OurImpactStar from "../assets/images/ourimpact.png";
import OurImpactStar1 from "../assets/images/numbers.png";
import OurImpactStar2 from "../assets/images/numbers (1).png";
import OurImpactStar3 from "../assets/images/numbers (2).png";
import expert from "../assets/icons/Expert.png";
import solution from "../assets/icons/Solution.png";

import ArmandPic from "../assets/images/Armand.png";

export const HeroData = {
  bottom: {
    icons: [SolarLogo, BinanceLogo, CoinmarketcapLogo, BitgetLogo, GateIoLogo],
    iconsLight: [
      SolarLogoLight,
      BinanceLogoLight,
      CoinmarketcapLogoLight,
      BitgetLogoLight,
      GateIoLogoLight,
    ],
  },
};

export const StakeData = [
  {
    name: "Tymt",
    desc: "A game launcher like no other: any game, on any chain.",
    href: "#hhh",
    imageSrc: TymtBG,
    bulletPoints: [
      "The next-generation game launcher.",
      "Social crypto wallet.",
      "Multi-chain, multi-platform.",
    ],
  },
  {
    name: "The Solar Mobile Wallet",
    imageSrc: SolarBG,
    desc: "The easiest way to manage your crypto.",
    bulletPoints: [
      "Great for beginners.",
      "Compatible across chains.",
      "Easy to use, easy to share.",
      "New tokens every month.",
    ],
    CustomFooter: (
      <div className="w-full flex gap-6">
        <button className="border border-white border-opacity-0 hover:border-opacity-50 hover:-translate-y-1 transition-all duration-200 ease-in-out rounded-lg overflow-hidden">
          <img src={googleDownload} alt="" />
        </button>
        <button className="border border-white border-opacity-0 hover:border-opacity-50 hover:-translate-y-1 transition-all duration-200 ease-in-out rounded-lg overflow-hidden">
          <img src={appleDownload} alt="" />
        </button>
      </div>
    ),
    isBig: true,
  },
  {
    name: "Solar Card",
    imageSrc: SolarCardBG,
    desc: "Empowering cryptocurrency holders worldwide.",
    bulletPoints: [
      "Great for beginners.",
      "Compatible across chains.",
      "Easy to use, easy to share.",
      "New tokens every month.",
    ],
    isBig: true,
  },
  {
    name: "District 53",
    imageSrc: DistrictBG,
    desc: "Our voxel on-chain Metaverse.",
    bulletPoints: [
      "Voxel Metaverse.",
      "Mine, craft, build & earn.",
      "Growing community & economy.",
    ],
    href: "#hey",
  },
];

export const HeroTopData = {
  title:
    'Welcome to Brighter <br /><span style="color: rgb(237 92 21)">Blockchain solutions</span>',
  desc: `Our mission is to empower people worldwide with Blockchain-based
        solutions. <br />
        We are developing useful and user-friendly products - from Finance, to
        Gaming, and E-commerce.`,
  btnText: "Join community",
};

export const DifferenceData = {
  title: 'What makes us <span style="color: rgb(237 92 21)">different?</span>',
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. ",
  differences: [
    {
      title: "DPoS Consensus",
      desc: "The Solar Blockchain employs a forked Delegated Proof of Stake Consensus from ARK Core, featuring 53 block producers in its network.",
      imgSrc: DposIcon,
    },
    {
      title: "Fast & Secure",
      desc: "The Solar Blockchain excels with 53 block producers and a rapid 8-second block-time, cementing its status in the blockchain industry.",
      imgSrc: FastIcon,
    },
    {
      title: "Voting",
      desc: "You can engage with the network as a block producer or vote for one of the 53 producers to potentially earn network commissions.",
      imgSrc: VoltingIcon,
    },
    {
      title: "Advanced Ecosystem",
      desc: "Solar offers developers and users a robust toolkit, fostering innovation to keep the Solar Blockchain at the industry forefront.",
      imgSrc: AdvanceIcon,
    },
  ],
};

export const FooterData = {
  email: "info@solar.enterprises",
  copyrightMessage:
    "© 2024 Solar Enterprises.<br/><br/>All rights reserved. Unauthorized reproduction, copying, or redistribution of any content on this website is strictly prohibited without express written permission. Solar Enterprises™ and its associated logos are trademarks of Solar Enterprises Technologies Inc. The information provided on this site is for general informational purposes only and is not intended as financial advice. Use of this website is subject to our Terms of Service and Privacy Policy. Solar Enterprises Technologies Inc. reserves the right to make changes or updates to the site content and policies at any time without prior notice.",
  copyrightPages: [
    { title: "Terms of Service", href: "#test" },
    { title: "Privacy Policy", href: "#test" },
  ],
  copyright: "Copyright © 2024  All rights reserved",
  socials: [
    {
      href: "#twitter",
      img: TwitterIcon,
    },
    {
      href: "#discord",
      img: DiscordIcon,
    },
  ],
  AboutUs: [{ title: "We are not Hiring!", hre: "#hire" }],
  Products: [
    { title: "Solar Wallet", hre: "#hire" },
    { title: "Tymt Launcher", hre: "#hire" },
    { title: "District 53", hre: "#hire" },
    { title: "Solar Card", hre: "#hire" },
  ],
  Blog: [
    { title: "Medium", hre: "#hire" },
    { title: "Reddit", hre: "#hire" },
  ],
};

export const DocsData = {
  title:
    'Dive Into Our Documentation & <span style="color: rgb(237 92 21)">Unlock</span> the Full Potential of <span style="color: rgb(237 92 21)">Solar Innovation</span>',
  desc: "Discover everything you need to harness the power of the Solar Network with Solar Enterprises. Our comprehensive documentation provides in-depth insights into our cutting-edge solutions and services, empowering you to elevate your solar experience. ",
  points: [
    {
      title: "Complete Solution Guides",
      desc: "Access detailed walkthroughs to navigate our products and services effortlessly, maximizing your operational efficiency.",
      img: SolutionIcon,
    },
    {
      title: "Expert Support",
      desc: "Tap into a wealth of knowledge from industry experts, offering you the support to innovate effectively within the solar ecosystem.",
      img: ExceprtIcon,
    },
  ],
};

export const OurImpactData = {
  title: "Our Impact by the Numbers.",
  desc: "Discover how Solar Enterprises is making a tangible impact in the solar industry. From the megawatts of clean energy we've generated to the number of sustainable projects successfully implemented, our numbers tell a story of significant progress and dedication to renewable energy. Explore the milestones we've achieved and how we're contributing to a greener planet.",
  btnText: "Join community",
  btnHref: "#hey",
  cards: [
    {
      icon: solution,
      title: "Complete Solution Guides",
      desc: "Access detailed walkthroughs to navigate our products and services effortlessly, maximizing your operational efficiency.",
    },
    {
      icon: expert,
      title: "Expert Support",
      desc: "Tap into a wealth of knowledge from industry experts, offering you the support to innovate effectively within the solar ecosystem.",
    },
  ],
  impacts: [
    {
      icon: OurImpactStar,
      heading: "Explore more about</br>Solar Enterpises",
    },
    {
      icon: OurImpactStar3,
      heading: "Years of experience in crypto space",
    },
    {
      icon: OurImpactStar2,
      heading: "Users have already joined our community",
    },
    {
      icon: OurImpactStar1,
      heading: "Digital products in development",
    },
  ],
};

export const LatestNewsData = {
  title: 'Latest <span style="color: rgb(237 92 21)">news</span>',
  news: [
    {
      title: "Tymt — Opening the Gates to Crypto for all Gamers!",
      date: "APRIL 24, 2024",
      img: Image1,
    },
    {
      title: "Join our Coin Contest",
      date: "APRIL 24, 2024",
      img: Image2,
    },
    {
      title: "Solar Mobile Wallet: Your Q&A Guide",
      date: "APRIL 24, 2024",
      img: Image3,
    },
    {
      title: "Introducing Solar Enterprises: Brighter blockchain solutions",
      date: "APRIL 24, 2024",
      img: Image4,
    },
    {
      title: "Solar Card- Update",
      date: "APRIL 24, 2024",
      img: Image5,
    },
  ],
};

export const JoinCommunityData = {
  title: "Join the community",
  desc: "Become a part of the Solar Enterprises community today and engage with a network of professionals, innovators, and enthusiasts who are all dedicated to advancing the Solar Network ecosystem.",
  btnText: "Subscribe",
  inputPlaceHolder: "Enter your email",
  communities: [
    {
      name: "Telegram",
      desc: "Join our community.",
      href: "",
      icon: TelegramIcon,
    },
    {
      name: "Medium",
      desc: "News and updates",
      href: "",
      icon: MediumIcon,
    },
    {
      name: "Github",
      desc: "Docs.",
      href: "",
      icon: GithubIcon,
    },
  ],
};

export const FaqData = {
  title:
    'Frequently Asked Questions <span style="color: rgb(237 92 21)">(FAQ)</span>',
  desc: "Discover more about how Solar Enterprises enhances the Solar Network ecosystem with innovative blockchain solutions tailored for growth and development.",
  questions: [
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
    {
      ques: "What is the main focus of Solar Enterprises?",
      ans: "Solar Enterprises is dedicated to advancing the Solar Network ecosystem through innovative solutions that promote growth and development.",
    },
  ],
};

export const TeamData = {
  members: [
    {
      type: "Management",
      members: [
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
      ],
    },
    {
      type: "Design & Marketing",
      members: [
        {
          name: "Armdadaand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
      ],
    },
    {
      type: "Development",
      members: [
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
        {
          name: "Armand",
          job: "COO / Product Owner",
          icon: ArmandPic,
          href: "#hey",
        },
      ],
    },
  ],
};
