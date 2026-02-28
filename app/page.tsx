import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Pricing />
    </>
  );
}
