import DocsSection from "./Docs";
import FaqSection from "./FAQ";
import HeroSection from "./Hero";
import JoinCommunitySection from "./JoinCommunity";
import LatestNewsSection from "./LatestNews";
import OurImpactSection from "./OurImpact";
import StakeSection from "./Stake";
import TeamSection from "./Team";
import WhatsDifferentSection from "./WhatsDifferent";

export default function HomePage() {
  return (
    <main className="grid gap-20">
      <HeroSection />
      <WhatsDifferentSection />
      <StakeSection />
      <TeamSection />
      <DocsSection />
      <OurImpactSection />
      <LatestNewsSection />
      <JoinCommunitySection />
      <FaqSection />
    </main>
  );
}
