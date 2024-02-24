"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";

export default function BackgroundBeamsDemo() {
  return (
    <>
<Navbar/>
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="bg-gradient-to-b from-slate-50 to-neutral-800 font-extrabold text-transparent bg-clip-text pb-4 max-w-6xl mx-auto my-2 text-4xl text-center relative z-10">
          Contact Us On!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
          Email us: dxdhruv333@gmail.com / divvysharma2002@gmail.com
        </p>
      </div>
      <BackgroundBeams />
    </div>
    </>
  );
}

