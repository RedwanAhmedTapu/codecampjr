"use client";

import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FcSimCardChip } from "react-icons/fc";
import Payment from "./Payment";
import Link from "next/link";

const FooterJr = () => {
  const [payment, setPayment] = useState(false);
  console.log(payment)

  return (
    <>
      <div className="containerFooter ">
        <div className="flex flex-col text-slate-900 dark:text-white justify-between items-center pb-4 max-[450px]:pr-2 pr-10">
          <div className="flex ">
            <ImSpinner9 className=" w-16 h-8 " />
            <p className="text-slate-900 dark:text-white  text-2xl font-bold max-[420px]:text-[0.97rem]">
              CodecampJr.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-black dark:text-white">
              ©️ 2023 CodecampJr. Inc.{" "}
            </p>
            <div className="flex gap-x-2 max-[400px]:hidden">
              <CiLinkedin className="iconFooter text-black dark:text-white" />
              <span className="text-black dark:text-slate-400">|</span>
              <AiFillTwitterCircle className="iconFooter text-black dark:text-white" />
              <span className="text-black dark:text-slate-400">|</span>
              <AiOutlineInstagram className="iconFooter text-black dark:text-white" />
              <span className="text-black dark:text-white">|</span>
              <CiFacebook className="iconFooter text-black dark:text-white" />
              <span className="text-black dark:text-slate-400">|</span>
            </div>
            {/*  for mobile */}
            <div className="flex gap-x-2 max-[400px]:flex-col min-[401px]:hidden">
              <div className="flex gap-x-2">
                <CiLinkedin className="iconFooter text-black dark:text-white" />
                <span className="text-black dark:text-slate-400">|</span>

                <AiFillTwitterCircle className="iconFooter text-black dark:text-white" />
                <span className="text-black dark:text-slate-400">|</span>
              </div>
              <div className="flex gap-x-2">
                <AiOutlineInstagram className="iconFooter text-black dark:text-white" />
                <span className="text-black dark:text-white">|</span>
                <CiFacebook className="iconFooter text-black dark:text-white" />
                <span className="text-black dark:text-slate-400">|</span>
              </div>
            </div>
            <div className="flex gap-x-2"></div>
          </div>
        </div>
        <div className="ItemFooter">
          <p className="text-slate-900 font-bold dark:text-white">Languages</p>
          <Link href="/cprogramming-blog">
            {" "}
            <p className="textColor">C</p>
          </Link>
          <Link href="/cppProgramming-blog">
            {" "}
            <p className="textColor">C++</p>
          </Link>
          <Link href="/cSharpprogramming-blog">
            {" "}
            <p className="textColor">C#</p>
          </Link>
          <Link href="/pythonProgramming-blog">
            {" "}
            <p className="textColor">Python</p>
          </Link>
          <Link href="/htmlProgramming-blog">
            {" "}
            <p className="textColor">Html</p>
          </Link>
          <Link href="/cssprogrammming-blog">
            {" "}
            <p className="textColor">Css</p>
          </Link>
          <Link href="/javascriptProgramming-blog">
            {" "}
            <p className="textColor">Javascript</p>
          </Link>
          <Link href="/javaProgramming-blog">
            {" "}
            <p className="textColor">Java</p>
          </Link>
        </div>
        <div className="ItemFooter">
          <p className="text-slate-900 font-bold dark:text-white">
            Introduction Courses
          </p>
          <Link href="/cprogramming-blog">
            {" "}
            <p className="textColor">C Introduction</p>
          </Link>

          <Link href="/cppProgramming-blog">
            {" "}
            <p className="textColor">C++ Introduction</p>
          </Link>
          <Link href="/cSharpprogramming-blog">
            {" "}
            <p className="textColor">C# Introduction</p>
          </Link>
          <Link href="/pythonProgramming-blog">
            {" "}
            <p className="textColor">Python Introduction</p>
          </Link>
          <Link href="/htmlProgramming-blog">
            {" "}
            <p className="textColor">Html Introduction</p>
          </Link>
          <Link href="/cssprogrammming-blog">
            {" "}
            <p className="textColor">Css Introduction</p>
          </Link>
          <Link href="/javascriptProgramming-blog">
            {" "}
            <p className="textColor">Javascript Introduction</p>
          </Link>
          <Link href="/javaProgramming-blog">
            {" "}
            <p className="textColor">Java Introduction</p>
          </Link>
        </div>
        <div className="ItemFooter">
          <p className="text-slate-900 font-bold dark:text-white">
            Intermediate Courses
          </p>
          <Link href="/cprogramming-blog">
            {" "}
            <p className="textColor">Intermediate C </p>
          </Link>

          <Link href="/cppProgramming-blog">
            {" "}
            <p className="textColor"> Intermediate C++</p>
          </Link>
          <Link href="/cSharpprogramming-blog">
            {" "}
            <p className="textColor">Intermediate C#</p>
          </Link>
          <Link href="/pythonProgramming-blog">
            {" "}
            <p className="textColor"> Intermediate Python</p>
          </Link>
          <Link href="/htmlProgramming-blog">
            {" "}
            <p className="textColor">Intermediate Html</p>
          </Link>
          <Link href="/cssprogrammming-blog">
            {" "}
            <p className="textColor">Intermediate Css</p>
          </Link>
          <Link href="/javascriptProgramming-blog">
            {" "}
            <p className="textColor">Intermediate Javascript</p>
          </Link>
          <Link href="/javaProgramming-blog">
            {" "}
            <p className="textColor">Intermediate Java</p>
          </Link>
        </div>
      </div>
      <Payment setPayment={setPayment} />
      {payment && (
        <div className="relative  w-full h-full flex_center">
          <div className="bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-md p-8 max-[470px]:w[15rem] max-[600px]:w[20rem]  w-[30rem] h-[20rem] shadow-md flex flex-col justify-between text-white  mt-20">
            <div className="flex justify-between">
              <div className="w-24 h-20  rounded-md">
                <FcSimCardChip className="w-full h-full" />
              </div>
              <div className="max-[500px]:text-xl text-3xl text-white font-sans">
                course Fee:5000/-
              </div>
            </div>
            <div className="max-[500px]:text-sm text-lg font-semibold mt-4 uppercase">
              
            </div>
            <div className="max-[500px]:text-sm text-lg mt-4 text font-sans">
              1234 5678 9012 3456
            </div>
            <div className="flex justify-between">
              <div className="max-[500px]:text-sm text-base mt-4 font-sans">
                {new Date("2023-09-02T15:30:00Z").toLocaleString()}
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg max-[500px]:text-sm" onClick={async()=>{
                 const res = await axios
                 .post(`https://codecampjrbackend.onrender.com/active-user/order/${email}`)
                 .then((res) => {
                   console.log(res.data.url);
                   router.push(`${res.data.url}`)
                 });
              }}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterJr;
