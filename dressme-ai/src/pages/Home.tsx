import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { AvatarSection } from "@/components/sections/AvatarSection";
import { AISection } from "@/components/sections/AISection";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Reveal } from "@/components/effects/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Reveal><Problem /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><AppShowcase /></Reveal>
      <Reveal><AvatarSection /></Reveal>
      <Reveal><AISection /></Reveal>
      <Reveal><Benefits /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><CTA /></Reveal>
      <Footer />
    </main>
  );
}
