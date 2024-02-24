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
      <TypewriterEffectSmoothDemo>
      </TypewriterEffectSmoothDemo>
      </div>
      <BackgroundBeams />
    </div>
    </>
  );
}

