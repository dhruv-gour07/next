import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const myWork = () => {
  const myLink = "https://naayra-travels.vercel.app/";
  return (
    <>
      <Navbar />
      <div className="mx-auto flex items-center justify-center mt-28 flex-col">
        <Link href={myLink}>
          <p className="bg-gradient-to-b mb-7 from-slate-50 to-neutral-800 font-extrabold text-transparent bg-clip-text text-2xl">
            Naayra Travels Website
          </p>
          <Image
            src="/naayra-travels.PNG"
            width={500}
            height={500}
            alt="ScreenShot image of naayra travels website"
          />
        </Link>
      </div>
    </>
  );
};

export default myWork;
