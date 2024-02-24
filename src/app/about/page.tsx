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
      <h1 className="bg-gradient-to-b from-slate-50 to-neutral-700 font-extrabold text-transparent bg-clip-text pb-4 max-w-6xl mx-auto my-2 text-6xl text-center relative z-10">
          We are an Agency!
        </h1>
        <p></p>
        <p className="bg-gradient-to-b from-slate-100 to-neutral-600 text-transparent bg-clip-text max-w-6xl mx-auto my-2 text-xl text-center relative z-10">
         Our agency is been focused on creating as well as maintaining client website as of their needs. <br />
         We are focused on using latest technology for creating website. <br />
         We are currently working on more ways through which we can provide you values. <br />
         Stay tuned! <br />
        </p>
      </div>
      <BackgroundBeams />
    </div>
    </>
  );
}

