"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "We",
    },
    {
      text: "Built",
    },
    {
      text: "You",
    },
    {
      text: "A",
    },
    {
      text: "Website.",
      className: "text-blue-500 dark:text-slate-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <h1 className="relative z-10 text-lg md:text-1xl pt-7  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-extrabold">
           Welcome Abord, we create best website for your business.
          <br/>Our services are reliable, scalable, and customizable for your business.
          <br/> We have got you covered.
        </h1>
      
      </div>
  );
}

export default TypewriterEffectSmooth;