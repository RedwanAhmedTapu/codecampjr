// import Feed from "@components/Feed";
"use client";
import Image from "next/image";
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
import Svg from "@components/Svg";
import BlinkingCard from "@components/BlinkingCard";
import CoursesSchedule from "@components/CoursesSchedule";
import Level from "@components/Level";
import GlobeInnerRay from "@components/GlobeInnerRay";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import CodeDivDesignforHomePage from "@components/CodeDivDesignforHomePage";
import FingerprintLogin from "@components/FingerprintLogin";

const Home = () => {
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
      {/* <div className="absolute top-10 -left-12  w-64 h-[10]">
        <Image
          src="assets/images/bitmap_Layer 1_copy_6.svg"
          className="w-1/2 h-1/2"
          width={300}
          height={300}
        />
      </div> */}
      {/* <div className=" text-black dark:text-white absolute top-80 left-44">
        <HiOutlineRocketLaunch className="w-44 h-44 animate-bounce " />
      </div> */}

      <section className="bg-slate-100 dark:bg_color  w-full flex max-[800px]:flex-col justify-between    h-screen max-[800px]:h-full mt-[3.6rem] max-[500px]:gap-y-8">
        <div className="flex max-[800px]:w-full max-[1150px]:w-[40%]   w-[50%] h-full ">
          <div className="flex flex-col   w-full gap-y-24 self-center">
            <SectionHeadingText className=""/>

          
            {/* <InlineHr /> */}

            {/* <div className="flex gap-x-6">
            <button className="bg-orange-500 opacity-90 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Google
            </button>
            <button className="bg-gradient-to-bl from-slate-200 to-violet-100 hover:bg-slate-100 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Apple
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Facebook
            </button> 
           </div> */}

           
            
          </div>
         
        </div>

        <div className="max-[800px]:w-full max-[1150px]:w-[60%] w-[50%] h-full flex_center  ">
            <Image
            src="assets/images/Black Modern Hackathon Instagram Post (10).png"
             width={300}
              height={300}
              className="max-[500px]:w-[20rem] max-[500px]:h-[20rem] max-[1000px]:w-[30rem] max-[1000px]:h-[30rem] w-[40rem] h-[40rem]   text-black   overflow-hidden"
            />
          </div>
      </section>
      <section className="bg-[#fffcfc] dark:bg_color flex flex-col max-[600px]:gap-36 gap-8  relative  max-[700px]:top-10">
        {/* <CodeEditor/> */}
        {/* <CodeDivDesignforHomePage/> */}
        {/* <FingerprintLogin/> */}
        
        <SlidingComponent />

        <Level />
        <Card />
        <BlinkingCard />
        <ActiveStudent />
        <ProPracticeCard />
        <FooterJr />
        {/* <CoursesSchedule/> */}
        {/* <Svg/> */}
      </section>
    </>
  );
};

export default Home;
