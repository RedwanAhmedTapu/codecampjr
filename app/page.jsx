// import Feed from "@components/Feed";
"use client";
// import Script from 'next/script';
import CardPrompt from "@components/CardPrompt";
// import Videofx from "@components/Videofx";
import SlidingComponent from "@components/SlidingComponent";
// import { useEffect } from "react";
// import Matter from 'matter-js';
// import Comp from "@components/Comp";
import SectionHeadingText from "@components/SectionHeadingText";
import InlineHr from "@components/InlineHr";

const Home = () => {
  // const router=useRouter();
  const data = [
    {
      description: "Why Choose CodeCamp Junior?",
    },
    {
      description: "Why Choose CodeCamp Junior?",
    },
    {
      description: "Why Choose CodeCamp Junior?",
    },
  ];

  return (
    <>
      <section className="bg_color w-full flex flex-col     h-[100rem] md:pt-4 ">
        <div className="flex flex-col justify-center items-center gap-y-14">
          <SectionHeadingText />
          <button className="w-64 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
            Get Started
          </button>
          <InlineHr />
          <div className="flex gap-x-6">
            <button className="bg-orange-500 opacity-90 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Google
            </button>
            <button className="bg-gradient-to-bl from-slate-200 to-violet-100 hover:bg-slate-100 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Apple
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Facebook
            </button>
          </div>
        </div>
        <div className="relative top-16">
        <SlidingComponent />
        </div>
      </section>
    </>
  );
};

export default Home;
