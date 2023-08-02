"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { ImSpinner9 } from "react-icons/im";
import { FcMenu } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(true);

  const isLoggedIn = true;

  useEffect(() => {
    // const setProviders = async () => {
    //   const response = await getProviders();
    //   setProviders(response);
    // };
    // setProviders();
  }, []);

  return (
    <>
      <nav className="flex justify-evenly  items-center w-full h-16 shadow-lg  p-8 bg_color">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 text-white"
        >
          {/* <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={80}
          height={50}
        ></Image> */}
          <ImSpinner9 className=" w-16 h-8 animate" />
          <p className=" orange_gradient max-[420px]:text-[0.97rem]">
            CodecampJr.
          </p>
        </Link>
        <FcMenu
          className="w-16 h-8 min-[900px]:hidden text-white opacity-[200%]"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <ul className="w-[30rem] h-2 flex justify-evenly items-center max-[900px]:hidden ">
          <li className="navlist list">Home</li>
          <li className="navlist list">About</li>
          <li className="navlist list">Contact</li>
        </ul>

        <input
          type="text"
          className="input max-[900px]:hidden w-96 px-4 py-2 bg-black rounded-md shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search..."
        />
      </nav>
      {/* mobile responsive */}
      {toggle && (
        <ul className="absolute top-[0rem] min-[900px]:hidden w-full h-64 z-20 bg-slate-900 flex flex-col justify-evenly items-center ">
          <RxCross2
            className="relative -top-4 -right-32 text-white w-16 h-16"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <li className="navlist list">Home</li>
          <li className="navlist list">About</li>
          <li className="navlist list">Contact</li>
        </ul>
      )}
    </>
  );
};

export default Nav;
