import { FC } from "react";
import ChangingTitle from "./Animation/ChangingTitle";
import { AnimatedText, defaultAnimations } from "./Animation/AnimatedText";
import ParallaxText from "@/components/Animation/ParallaxText";

interface DeveloperSectionProps {}

const DeveloperSection: FC<DeveloperSectionProps> = ({}) => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`;

  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-0 w-full">
        <ChangingTitle />

        <p className="text-xl block sm:text-3xl">{description}</p>
      </div>
      <section className="w-full mt-20 absolute bottom-0">
        <ParallaxText>Development</ParallaxText>
      </section>
    </section>
  );
};

export default DeveloperSection;
