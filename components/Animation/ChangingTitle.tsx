"use client";
import { FC, useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import useInterval from "@/hooks/useInterval";

interface ChangingTitleProps {}

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ChangingTitle: FC<ChangingTitleProps> = ({}) => {
  const controls = useAnimation();
  const [role, setRole] = useState("Front-end");
  const [color, setColor] = useState("bg-blue-500");
  const ref = useRef(null);

  const changeRole = () => {
    if (role === "Front-end") {
      setRole("Back-end");
      setColor("bg-green-500");
    } else if (role === "Back-end") {
      setRole("CI/CD");
      setColor("bg-red-500");
    } else if (role === "CI/CD") {
      setRole("Front-end");
      setColor("bg-blue-500");
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [role]);

  useInterval(() => {
    controls.start("hidden").then(() => {
      changeRole();
    });
  }, 4000);

  return (
    <>
      <span className="sr-only">{role} Developer</span>
      <h1 aria-hidden className={"text-4xl sm:text-6xl flex flex-col"}>
        <motion.div
          initial="hidden"
          animate={controls}
          ref={ref}
          transition={{ staggerChildren: 0.1 }}
        >
          {role.split("").map((char, index) => (
            <motion.span
              variants={defaultAnimations}
              className={cn("inline-block first:pl-4 last:pr-4", color)}
              key={index}
            >
              {char}
            </motion.span>
          ))}{" "}
        </motion.div>
        <span className="ml-4">Developer</span>
      </h1>
    </>
  );
};

export default ChangingTitle;
