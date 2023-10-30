"use client";
import { FC } from "react";
import {
  AnimatePresence,
  MotionStyle,
  motion,
  useAnimate,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MousePointer,
  MousePointer2,
  MousePointerClick,
} from "lucide-react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const [scopeParagraph, animateParagraph] = useAnimate();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 1,
      },
      exit: {
        scale: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const paragraphVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  const buttonVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={"hero-section"}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        variants={container}
        onAnimationComplete={() => {
          animateParagraph(
            scopeParagraph.current,
            { rotate: 4 },
            {
              delay: 0.5,
            }
          );
        }}
        className="p-6 md:p-20 flex items-center justify-center gap-8 flex-col"
      >
        <motion.h1
          variants={titleVariants}
          className="text-4xl text-center leading-tight text-black font-light bg-white rounded-md px-2"
        >
          I don&apos;t make websites
        </motion.h1>
        <motion.p
          ref={scopeParagraph}
          variants={paragraphVariants}
          className="text-black font-semibold bg-yellow-300 text-center w-full md:w-4/5"
        >
          I turn your idea into reality.
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Link href={"/my-skills"}>
            <Button variant={"outline"} className="flex items-center gap-2">
              Follow me Along my journey{" "}
              <MousePointerClick className="w-5 h-5 mt-[2px] hover:" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSection;
