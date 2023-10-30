import DeveloperSection from "@/components/DeveloperSection";
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="min-h-screen flex flex-col items-center justify-center bg-hero-background bg-cover bg-center bg-no-repeat">
      <HeroSection />
    </MaxWidthWrapper>
  );
}
