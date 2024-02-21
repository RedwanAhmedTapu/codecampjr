"use client";
import Image from "next/image";
import GlobeInnerRay from "./GlobeInnerRay";
import Link from "next/link";
const SectionHeadingText = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 justify-start max-[800px]:justify-center text-start max-[800px]:pl-4 pl-20">
      <div className="flex flex-col justify-evenly -gap-2">
      <p className="head_text_light dark:head_text text-start dark:text-start">
        Unlock the
      </p>
      <p className="head_text_light  dark:head_text text-start dark:text-start">
        Power of Code
      </p>
      <p className="head_text_light  dark:head_text font-semibold dark:font-semibold text-start text-[1rem] dark:text-[1rem] leading-6 text-slate-500 dark:text-start">
        CodeCampJR is your gateway to a world of coding knowledge and creativity. Our online learning platform is designed to empower young minds with the skills .
      </p>
      </div>

      <Link href="/free-trial-class" ><div className="Book_free_class_button head_text text-xl rounded-lg"></div></Link>
      <div className="flex gap-x-2  max-[500px]:gap-y-4 max-[400px]:pl-0 ">
              <Link href="/login" prefetch>
                <button className="max-[350px]:w-32 max-[380px]:w-40 w-44 bg-[#0d0d33]   text-white font-bold py-2 px-4 rounded-md  border-[0.001rem] border-slate-200 transition-all duration-300 ">
                  Login
                </button>
              </Link>
              <Link href="/signup" prefetch>
                <button className="max-[350px]:w-32 max-[380px]:w-40 w-44 bg-[#0d0d33]  text-white font-bold py-2 px-4 rounded-md  border-[0.001rem] border-slate-200 transition-all duration-300 ">
                  
                  Sign up
                </button>
              </Link>
            </div>
    </div>
  );
};

export default SectionHeadingText;
