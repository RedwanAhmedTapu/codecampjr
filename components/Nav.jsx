"use client";

import Link from "next/link";
import Menubar from "./Menubar";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import HoverableDropdown from "./HoverableDropdown";
const Nav = () => {
  const [user, setuser] = useState({});
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isLoggedIn = true;
console.log(user.fname)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      applyDarkMode();
    }
    if (typeof localStorage !== 'undefined') {
      setuser(JSON.parse(localStorage.getItem("loggedUser")));
      }
  }, []);

  //  apply dark mode
  const applyDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };

  //  apply light mode
  const applyLightMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  };
  
  return (
    <>
      <nav className="bg-[#fffcfc] dark:bg_color  flex justify-around sm:justify-evenly  items-center w-full h-16 dark:shadow-lg  p-8  fixed top-0 z-50">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 text-orange-600  dark:text-white"
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
        <div
          className="relative -top-6 -right-0 text-white  w-4 h-4 min-[900px]:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <Menubar className="bg-slate-950" />
        </div>

        <ul className="w-[30rem] h-2 flex justify-evenly items-center max-[900px]:hidden ">
          <li className="navlist list">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 text-slate-800  dark:text-white"
            >
              Home
            </Link>
          </li>
          <HoverableDropdown className="z-10 h-76" />

       
        </ul>

        <div className="w-8 h-8 rounded-lg  relative -right-10">
          {isDarkMode ? (
            <div className="w-8 h-8 text-white flex_center gap-x-1">
              <LightModeIcon
                className="w-8 h-8 text-slate-800  dark:text-white"
                onClick={() => {
                  applyLightMode();
                }}
              />
            </div>
          ) : (
            <div className="w-8 h-8 text-white flex_center gap-x-1">
              <DarkModeIcon
                className="w-8 h-8 text-slate-800  dark:text-white"
                // checked={isDarkMode}
                onClick={() => {
                  applyDarkMode();
                }}
              />
            </div>
          )}
        </div>
        {user &&
          <div className="w-20 h-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-full text-white flex_center">
            {user.fname}
          </div>
        }

      </nav>
      {/* mobile responsive */}

      {toggle && (
        <>
          <ul className="fixed top-[4.2rem] min-[900px]:hidden w-full h-64 z-20 bg-slate-900 flex flex-col justify-evenly items-center ">
            <li className="navlist list">
              {" "}
              <Link href="/">Home</Link>
            </li>
            <HoverableDropdown className="navlist list" />
            <li className="navlist list"></li>
          </ul>
        </>
      )}
      <hr className="" />
    </>
  );
};

export default Nav;
