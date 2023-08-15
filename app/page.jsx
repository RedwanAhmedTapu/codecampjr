// import Feed from "@components/Feed";
"use client";
// import Script from 'next/script';
import CardPrompt from "@components/CardPrompt";
// import Videofx from "@components/Videofx";
import SlidingComponent from "@components/SlidingComponent";
// import { useEffect } from "react";
// import Matter from 'matter-js';
// import Comp from "@components/Comp";
import ProPracticeCard from "@components/ProPracticeCard";
import SectionHeadingText from "@components/SectionHeadingText";
import InlineHr from "@components/InlineHr";
import Card from "@components/Card";
import ActiveStudent from "@components/ActiveStudent";
// import CodeEditor from "@components/CodeEditor";
import FooterJr from "@components/FooterJr";
import Login from "@components/Login";
import Link from "next/link";
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
      <section className="bg_color w-full flex flex-col     h-[40rem]  mt-20">
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
          <div className="flex gap-x-2 max-[500px]:flex-col max-[500px]:gap-y-4">
            <Link href="/login">
              <button className="w-64 bg-transparent hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-md  border-2 hover:border-pink-500 transition-all duration-300 ">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-64 bg-transparent hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-md  border-2 hover:border-pink-500 transition-all duration-300 ">
                Sign up
              </button>
            </Link>
          </div>
        </div>

        <section className="flex flex-col max-[600px]:gap-36 gap-8  relative top-10">
          {/* <CodeEditor/> */}
          <SlidingComponent />
          <Card />
          <ActiveStudent />
          <ProPracticeCard />
          <FooterJr />
        </section>

        {/* <div class="custom_shape">
    <svg className="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
   
</div> */}
      </section>
    </>
  );
};

export default Home;
