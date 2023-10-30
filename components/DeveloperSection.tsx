import { FC } from "react";
import ChangingTitle from "./Animation/ChangingTitle";
import { AnimatedText, defaultAnimations } from "./Animation/AnimatedText";
import ParallaxText from "@/components/Animation/ParallaxText";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import MyContacts from "./MyContacts";

interface DeveloperSectionProps {}

const DeveloperSection: FC<DeveloperSectionProps> = ({}) => {
  const description =
    "It's not just about coding. It's about being a digital problem solver. We craft solutions that wield technology to elevate efficiency, accessibility, and user experiences.";

  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center ">
      <div className="absolute top-20 ">
        <MyContacts />
      </div>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-0 w-full">
        <ChangingTitle />

        <p className="text-xl block sm:text-3xl leading-6">{description}</p>
      </div>
      <section className="w-full mt-20 absolute bottom-0">
        <ParallaxText>Development</ParallaxText>
      </section>
    </section>
  );
};

export default DeveloperSection;
