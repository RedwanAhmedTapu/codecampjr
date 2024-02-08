"use client";

import Link from "next/link";
import Menubar from "./Menubar";
import { useState, useEffect, useMemo } from "react";
import { ImSpinner9 } from "react-icons/im";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import HoverableDropdown from "./HoverableDropdown";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [user, setuser] = useState({});
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(toggle);

  const isLoggedIn = true;
  const router = useRouter();
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      applyDarkMode();
    }
    if (typeof localStorage !== "undefined") {
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

  const memoizedComponent = useMemo(
    () => (
      <>
        <nav className="bg-[#fffcfc] dark:bg_color   flex justify-around sm:justify-around  items-center w-full h-16 dark:shadow-lg  py-8 max-[551px]:pr-10 fixed top-0 z-50">
          <Link
            href="/"
            className="flex justify-center items-center  text-orange-600  dark:text-white"
          >
            {/* <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={80}
          height={50}
        ></Image> */}
            <div className=" max-[600px]:w-32 w-44  h-auto self-center  overflow-hidden">
              <svg
                width="215"
                height="25"
                viewBox="0 0 215 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full "
              >
                <g clip-path="url(#clip0_529_2373)">
                  <path
                    d="M3.46244 12.6514L11.4057 16.1283V20.4743L0 14.8089V11.7047L3.46244 12.6514ZM11.4057 9.81099L3.46244 13.3499L0 14.2346V11.1458L11.4057 5.48047V9.81099Z"
                    fill="#0297D0"
                  />
                  <path
                    d="M200.962 0L194.084 24.5396H190.857L197.766 0H200.962Z"
                    fill="#0297D0"
                  />
                  <path
                    d="M211.475 13.2723L203.453 9.79544V5.48047L215 11.1614V14.2657L211.475 13.2723ZM203.453 16.1438L211.475 12.6049L215 11.7047V14.8089L203.453 20.4588V16.1438Z"
                    fill="#0297D0"
                  />
                  <path
                    d="M15.9546 13.7134C15.9546 11.7108 16.3589 9.92749 17.1675 8.36352C17.9953 6.79951 19.1696 5.58838 20.6906 4.73009C22.2114 3.85274 24.0018 3.41406 26.0617 3.41406C27.833 3.41406 29.4116 3.74784 30.7977 4.41539C32.2031 5.06387 33.339 5.9889 34.2053 7.1905C35.0908 8.39206 35.6781 9.79393 35.9669 11.3961H29.2095C28.9014 10.7285 28.4586 10.2135 27.8811 9.85117C27.3228 9.46974 26.6779 9.27902 25.9463 9.27902C24.8682 9.27902 24.0114 9.67953 23.3762 10.4806C22.7601 11.2817 22.4521 12.3593 22.4521 13.7134C22.4521 15.0676 22.7601 16.1453 23.3762 16.9463C24.0114 17.7474 24.8682 18.1479 25.9463 18.1479C26.6779 18.1479 27.3228 17.9667 27.8811 17.6043C28.4586 17.2229 28.9014 16.6983 29.2095 16.0308H35.9669C35.6781 17.6329 35.0908 19.0348 34.2053 20.2364C33.339 21.4379 32.2031 22.3725 30.7977 23.0401C29.4116 23.6886 27.833 24.0128 26.0617 24.0128C24.0018 24.0128 22.2114 23.5837 20.6906 22.7254C19.1696 21.8481 17.9953 20.6274 17.1675 19.0634C16.3589 17.4994 15.9546 15.7161 15.9546 13.7134Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M48.2376 24.0725C46.3124 24.0725 44.5412 23.6243 42.9241 22.7278C41.3262 21.8314 40.0555 20.5916 39.1122 19.0086C38.1689 17.4256 37.6973 15.6423 37.6973 13.6586C37.6973 11.6751 38.1689 9.89175 39.1122 8.30871C40.0555 6.72564 41.3262 5.49543 42.9241 4.61808C44.5412 3.72165 46.3124 3.27344 48.2376 3.27344C50.1628 3.27344 51.9243 3.72165 53.5222 4.61808C55.1201 5.49543 56.3811 6.72564 57.3052 8.30871C58.2485 9.89175 58.7202 11.6751 58.7202 13.6586C58.7202 15.6423 58.2485 17.4256 57.3052 19.0086C56.3811 20.5916 55.1104 21.8314 53.4933 22.7278C51.8954 23.6243 50.1435 24.0725 48.2376 24.0725ZM48.2376 18.1503C49.5082 18.1503 50.49 17.7498 51.1831 16.9487C51.8761 16.1286 52.2227 15.0319 52.2227 13.6586C52.2227 12.2663 51.8761 11.1696 51.1831 10.3686C50.49 9.5484 49.5082 9.13835 48.2376 9.13835C46.9477 9.13835 45.9563 9.5484 45.2632 10.3686C44.5701 11.1696 44.2236 12.2663 44.2236 13.6586C44.2236 15.0319 44.5701 16.1286 45.2632 16.9487C45.9563 17.7498 46.9477 18.1503 48.2376 18.1503Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M69.5522 3.61719C71.6891 3.61719 73.5565 4.04633 75.1544 4.90461C76.7715 5.76289 78.0133 6.95495 78.8796 8.48078C79.7459 10.0066 80.1791 11.7423 80.1791 13.6877C80.1791 15.6141 79.7459 17.3497 78.8796 18.8946C78.0133 20.4395 76.7715 21.6601 75.1544 22.5566C73.5565 23.434 71.6891 23.8727 69.5522 23.8727H61.0332V3.61719H69.5522ZM68.9746 18.208C70.4185 18.208 71.564 17.817 72.411 17.035C73.2582 16.253 73.6817 15.1372 73.6817 13.6877C73.6817 12.2382 73.2582 11.1223 72.411 10.3404C71.564 9.55838 70.4185 9.16741 68.9746 9.16741H67.4441V18.208H68.9746Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M88.9048 8.68104V11.17H95.2577V15.9478H88.9048V18.8088H96.1243V23.8727H82.4941V3.61719H96.1243V8.68104H88.9048Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M102.87 13.7134C102.87 11.7108 103.274 9.92749 104.082 8.36352C104.91 6.79951 106.085 5.58838 107.605 4.73009C109.126 3.85274 110.917 3.41406 112.977 3.41406C114.748 3.41406 116.327 3.74784 117.713 4.41539C119.118 5.06387 120.254 5.9889 121.121 7.1905C122.005 8.39206 122.593 9.79393 122.882 11.3961H116.124C115.816 10.7285 115.374 10.2135 114.796 9.85117C114.238 9.46974 113.593 9.27902 112.861 9.27902C111.783 9.27902 110.927 9.67953 110.291 10.4806C109.675 11.2817 109.367 12.3593 109.367 13.7134C109.367 15.0676 109.675 16.1453 110.291 16.9463C110.927 17.7474 111.783 18.1479 112.861 18.1479C113.593 18.1479 114.238 17.9667 114.796 17.6043C115.374 17.2229 115.816 16.6983 116.124 16.0308H122.882C122.593 17.6329 122.005 19.0348 121.121 20.2364C120.254 21.4379 119.118 22.3725 117.713 23.0401C116.327 23.6886 114.748 24.0128 112.977 24.0128C110.917 24.0128 109.126 23.5837 107.605 22.7254C106.085 21.8481 104.91 20.6274 104.082 19.0634C103.274 17.4994 102.87 15.7161 102.87 13.7134Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M169.393 3.61719V23.8727H163.011V13.7735L159.863 23.8727H154.376L151.229 13.7735V23.8727H144.818V3.61719H152.672L157.177 15.7762L161.567 3.61719H169.393Z"
                    fill="#3F3D56"
                  />

                  <path
                    d="M189.006 10.5693C189.006 11.8471 188.707 13.0106 188.11 14.0596C187.513 15.0895 186.628 15.9097 185.454 16.52C184.298 17.1303 182.893 17.4355 181.238 17.4355H178.697V23.8727H172.286V3.61719H181.238C183.74 3.61719 185.655 4.24659 186.985 5.5054C188.332 6.76422 189.006 8.45216 189.006 10.5693ZM180.515 12.4289C181.844 12.4289 182.508 11.809 182.508 10.5693C182.508 9.3295 181.844 8.70966 180.515 8.70966H178.697V12.4289H180.515Z"
                    fill="#3F3D56"
                  />

                  <path
                    d="M131.679 7.13281L121.649 22.8713H128.267L131.679 18.3396V7.13281Z"
                    fill="#06A9A9"
                  />
                  <path
                    d="M131.677 7.52734L141.823 23.2984H135.206L131.677 18.6403V7.52734Z"
                    fill="#0297D0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M131.795 5.96875L120.332 23.7894H143.258L131.795 5.96875ZM131.795 8.45419L122.776 22.4757H140.814L131.795 8.45419Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M131.677 18.2969L135.932 23.7882H127.423L131.677 18.2969Z"
                    fill="#E9FE84"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M131.677 18.2969L127.423 23.7882H135.932L131.677 18.2969ZM131.677 20.1825L129.729 22.6974H133.626L131.677 20.1825Z"
                    fill="#3F3D56"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M133.967 4.06146L130.851 9.56261L129.918 9.06753L133.035 3.56641L133.967 4.06146Z"
                    fill="#3F3D56"
                  />

                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M129.208 4.22335L132.582 9.58076L133.49 9.04488L130.117 3.6875L129.208 4.22335Z"
                    fill="#3F3D56"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_529_2373">
                    <rect width="215" height="24.6721" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <div className="w-8 h-8 rounded-lg min-[900px]:hidden   relative -right-10">
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
          <div className="relative -top-10 -right-0  text-white  w-4 h-full  min-[900px]:hidden">
            <Menubar className="bg-slate-950" setToggle={setToggle} />
          </div>

          <ul className="w-[30rem] h-2 max-[900px]:hidden flex justify-evenly items-center max-[900px]:hidden ">
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
          <div className="w-8 h-8 rounded-lg max-[901px]:hidden   relative -right-10">
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

          {user && (
            <div
              className="max-[500px]:w-10 max-[500px]:h-10 w-16 h-16 max-[900px]:hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-full text-white flex_center"
              onClick={() => {
                router.push(`/user-dashboard?userEmail=${user.email}`);
              }}
            >
              profile
            </div>
          )}
        </nav>
        {/* mobile responsive */}

        {toggle && (
          <>
            <div
              id="Main"
              className={`${
                toggle
                  ? "rounded-r     flex justify-start items-start bg-gray-900 flex-col min-[900px]:hidden w-full h-screen  absolute top-16 z-50  transition-all duration-1000 ease-in-out "
                  : " h-0"
              }`}
            >
              {/* <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
    <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
      <svg className="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p className="text-base leading-4 ">Dashboard</p>
    </button>
    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
      <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p className="text-base leading-4 ">Users</p>
    </button>
  </div> */}
              <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
                <ul className="fixed top-[4.2rem] min-[900px]:hidden w-full h-64 z-20 bg-slate-900 flex flex-col justify-evenly items-center ">
                  <li className="navlist list text-white">
                    {" "}
                    <Link href="/">About</Link>
                  </li>
                  <HoverableDropdown className="navlist list" />
                  <li className="navlist list"></li>
                </ul>

                {/* <button onclick="showMenu1(true)" className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
      <p className="text-sm leading-5  uppercase">Profile Overview</p>
      <svg id="icon1" className="transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Messages</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Security</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 6H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Settings</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Notifications</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Passwords</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 4L19 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Goals</p>
      </button>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
    <button onclick="showMenu2(true)" className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
      <p className="text-sm leading-5 uppercase">VENDORS</p>
      <svg id="icon2" className="transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div className="hidden flex justify-start flex-col items-start pb-5 ">
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Messages</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Security</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 6H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Settings</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Notifications</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Passwords</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 4L19 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Goals</p>
      </button>
    </div>
  </div>
  <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
    <button onclick="showMenu3(true)" className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
      <p className="text-sm leading-5  uppercase">SERVICES</p>
      <svg id="icon3" className="rotate-180 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div className="hidden flex justify-start flex-col items-start pb-5 ">
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Messages</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.85 12.15L19 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 8L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Security</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 6H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Settings</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Notifications</p>
      </button> */}
                {/* <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Passwords</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 21V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 4L19 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-base leading-4  ">Goals</p>
      </button>
    </div>
    <div className=" flex justify-between items-center w-full">
      <div className="flex justify-center items-center  space-x-2">
        <div>
          <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
        </div>
        <div className="flex justify-start flex-col items-start">
          <p className="cursor-pointer text-sm leading-5 text-white">Alexis Enache</p>
          <p className="cursor-pointer text-xs leading-3 text-gray-300">alexis81@gmail.com</p>
        </div>
      </div>
      <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div> */}
              </div>
            </div>
          </>
        )}
        <hr className="" />
      </>
    ),
    [user, toggle, isDarkMode]
  );

  return memoizedComponent;
};

export default Nav;
