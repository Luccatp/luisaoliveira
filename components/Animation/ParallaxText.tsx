"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
}

export default function ParallaxText({ children }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30]
  );

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }

    if (velocityFactor.get() === 0) {
      baseX.set(baseX.get() + moveBy / 2); // Adjust the speed and direction here
    }
  });

  return (
    <div className="overflow-hidden  whitespace-no-wrap flex flex-no-wrap my-20 mx-auto tracking-[-2px] leading-3">
      <motion.div
        className="font-semibold uppercase text-6xl flex whitespace-no-wrap flex-no-wrap"
        style={{ x }}
      >
        <motion.span
          className="block mr-8"
          style={{ skew: skewVelocityFactor }}
        >
          {children}
        </motion.span>
        <motion.span
          className="block mr-8"
          style={{ skew: skewVelocityFactor }}
        >
          {children}
        </motion.span>
        <motion.span
          className="block mr-8"
          style={{ skew: skewVelocityFactor }}
        >
          {children}
        </motion.span>
        <motion.span
          className="block mr-8"
          style={{ skew: skewVelocityFactor }}
        >
          {children}
        </motion.span>
        <motion.span
          className="block mr-8"
          style={{ skew: skewVelocityFactor }}
        >
          {children}
        </motion.span>
      </motion.div>
    </div>
  );
}
