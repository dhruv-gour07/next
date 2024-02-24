"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmoothDemo } from "./TyprwriterEffect";

export default function BackgroundBeamsDemo() {
  return (
    <>
<Navbar/>
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="bg-gradient-to-b from-slate-50 to-neutral-800 font-extrabold text-transparent bg-clip-text pb-1 max-w-6xl mx-auto my-2 text-4xl text-center relative z-10">
          We Built You A Website
        </h1>
        <h1 className="relative z-10 text-lg md:text-1xl pt-7  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-extrabold">
           Welcome Abord, we create best website for your business.
          <br/>Our services are reliable, scalable, and customizable for your business.
          <br/> We have got you covered.
        </h1>
      </div>
      <BackgroundBeams />
    </div>
    </>
  );
}

