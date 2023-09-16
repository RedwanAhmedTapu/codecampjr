"use client";
import {HiCheckBadge} from "react-icons/hi2";
import Link from "next/link";
const data = [
  {
    heading: "Level-A",
    speed: "2500",
    class: "1 FREE Trial class",
    liveClass: "2 weekly Live Classes",
    maxStudent: "Maximum 10 Students",
  },
  {
    heading: "Level-B",
    speed: "4000",
    class: "1 FREE Trial class",
    liveClass: "2 weekly Live Class",
    maxStudent: "Maximum 10 Students",
  },
  {
    heading: "Level-C",
    speed: "7500",
    class: "1 FREE Trial class",
    liveClass: "2 weekly Live Class",
    maxStudent: "Maximum 10 Students",
  },
];
const ProPracticeCard = () => {
  return (
    <div className="flex_center flex-col gap-y-20 bg-none dark:bg-[#000] w-screen max-[1235]:h-[70rem]vh-[60rem]">
      <div className="flex_center pt-16 max-[450px]:flex-wrap">
        <h1 className="head_text_light dark:text-white max-[449px]:text-3xl max-[636px]:text-4xl text-6xl ">
          Invest Yourself with
        </h1>
        <div className="bg-yellow-300 max-[449px]:text-3xl text-4xl text-orange-900 w-32 h-14 rounded-full flex_center">
          PRO
        </div>
      </div>
      <div className="flex_center max-[1260px]:flex-wrap gap-2 ">
        {data.map((curElem, index) => {
          return (
            <>
              <div className="proPracticeCardBg bg-slate-100  dark:bg-black  max-[449px]:w-[20rem] w-[25rem] h-96 flex flex-col gap-y-8 pl-14 pt-6 border-0  dark:border-2 dark:border-slate-600 rounded-lg shadow-slate-300 dark:shadow-none shadow-2xl">
                <h1 className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 bg-clip-text text-transparent font-bold dark:text-white text-4xl">{curElem.heading}</h1>
                <p className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent dark:text-orange-300 text-5xl font-bold ">
                  ৳{curElem.speed}
                </p>
                <p className="text-slate-900 dark:text-slate-100 text-xl hover:text-slate-700 group transition-colors duration-500 flex_center justify-start gap-x-2">


                <span className="bg-slate-950 dark:bg-slate-900 rounded-full text-yellow-50 text-center group-hover:bg-slate-700">

                    {" "}
                    <HiCheckBadge />
                  </span>
                  {curElem.class}
                </p>
                <p className="text-slate-900 dark:text-slate-100 text-xl hover:text-slate-700 group transition-colors duration-500 flex_center justify-start gap-x-2">


                <span className="bg-slate-950 dark:bg-slate-900 rounded-full text-yellow-50 text-center group-hover:bg-slate-700">


                    {" "}
                    <HiCheckBadge />
                  </span>
                  {curElem.liveClass}
                </p>

                <p className="text-slate-900 dark:text-slate-100 text-xl hover:text-slate-700 group transition-colors duration-500 flex_center justify-start gap-x-2">


                <span className="bg-slate-950 dark:bg-slate-900 rounded-full text-yellow-50 text-center group-hover:bg-slate-700">


                    {" "}
                    <HiCheckBadge />
                   
                  </span>
                  {curElem.maxStudent}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex_center flex-col gap-y-8">
        <div className="flex_center font-semibold max-[800px]:flex-col max-[800px]:gap-y-12">
          <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">
          <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge />
            </span>
            Unlimited practice
          </p>
                    <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

                    <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge />
            </span>
            Group working
          </p>
          <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

          <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge />
            </span>
            project discussion
          </p>
          <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

          <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge />
            </span>
            New Idea Implementation
          </p>
        </div>
        <div className="flex_center font-semibold max-[800px]:flex-col max-[800px]:gap-y-12">
        <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

        <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge className=""/>
            </span>
            Assignments
          </p>
          <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

          <span className="text-slate-950 dark:text-orange-300">


              <HiCheckBadge />
            </span>
            Award of being first
          </p>
          <p className="flex gap-x-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent dark:text-orange-400 text-2xl">

            <span className="text-slate-950 dark:text-orange-300">
              <HiCheckBadge />
            </span>
            pro Coding
          </p>
        </div>
      </div>
      
     
      
      <Link href="/free-trial-class">

      <div className="pro  flex_center max-[450px]:flex-wrap max-[450px]:text-xl text-2xl text-white font-bold rounded-md max-[450px]:w-[15rem] max-[700px]:w-[20rem] w-[35rem] h-20 "></div>
      </Link>
    </div>
  );
};

export default ProPracticeCard;
