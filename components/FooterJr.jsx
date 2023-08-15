"use client";

import { ImSpinner9 } from "react-icons/im";
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram,AiFillTwitterCircle } from "react-icons/ai";
const FooterJr = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="flex flex-col text-white justify-between items-center pb-20 pr-10">
          <div className="flex ">
            <ImSpinner9 className=" w-16 h-8 " />
            <p className=" text-white bg-clip-text text-transparent text-2xl font-bold max-[420px]:text-[0.97rem]">
              CodecampJr.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-white">©️ 2023 CodecampJr. Inc. </p>
            <div className="flex gap-x-2">
              <CiLinkedin className="iconFooter text-white" />
              <span className="text-slate-400">|</span>
              <AiFillTwitterCircle className="iconFooter text-white" />
              <span className="text-slate-400">|</span>
              <AiOutlineInstagram className="iconFooter text-white" />
              <span className="text-white">|</span>
              <CiFacebook className="iconFooter text-white" />
              <span className="text-slate-400">|</span>
            </div>
            <div className="flex gap-x-2"></div>
          </div>
        </div>
        <div className="ItemFooter">
          <p className="text-white">Languages</p>
          <p className="textColor">C</p>
          <p className="textColor">C++</p>
          <p className="textColor">C#</p>
          <p className="textColor">Python</p>
          <p className="textColor">Html</p>
          <p className="textColor">Css</p>
          <p className="textColor">Javascript</p>
          <p className="textColor">java</p>
        </div>
        <div className="ItemFooter">
          <p className="text-white">Introduction Courses</p>
          <p className="textColor">C Introduction</p>
          <p className="textColor">C++ Introduction</p>
          <p className="textColor">C# Introduction</p>
          <p className="textColor">Python Introduction</p>
          <p className="textColor">Html Introduction</p>
          <p className="textColor">Css Introduction</p>
          <p className="textColor">Javascript Introduction</p>
          <p className="textColor">java Introduction</p>
        </div>
        <div className="ItemFooter">
          <p className="text-white">Intermediate Courses</p>
          <p className="textColor">Intermediate C</p>
          <p className="textColor">Intermediate C++</p>
          <p className="textColor">Intermediate C#</p>
          <p className="textColor">Intermediate Python</p>
          <p className="textColor">Intermediate Html</p>
          <p className="textColor">Intermediate Css</p>
          <p className="textColor">Intermediate Javascript</p>
          <p className="textColor">Intermediate java</p>
        </div>
      </div>
    </>
  );
};

export default FooterJr;
