"use client";
import { FC, MouseEvent, useEffect, useRef } from "react";

interface BouncingLineProps {}

const BouncingLine: FC<BouncingLineProps> = ({}) => {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 1;
    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
    }
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    if (!pathBound) return;
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <div className={"h-px mb-5 w-full relative"}>
      <div
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        className={
          "h-10 w-full relative -top-5 z-10 hover:h-[500px] hover:top-[-250px]"
        }
      ></div>
      <svg className="w-full absolute h-[500px] top-[-250px]">
        <path ref={path} className="stroke-primary stroke-1 fill-none"></path>
      </svg>
    </div>
  );
};

export default BouncingLine;
