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
                id="eQrhBVx4o2M1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 260 25"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
              >
                <g
                  transform="matrix(.974671 0 0 1 6.852232 0.4604)"
                  clip-path="url(#eQrhBVx4o2M21)"
                >
                  <g>
                    <path
                      d="M3.46244,12.6514l7.94326,3.4769v4.346L0,14.8089v-3.1042l3.46244.9467ZM11.4057,9.81099L3.46244,13.3499L0,14.2346v-3.0888L11.4057,5.48047v4.33052Z"
                      fill="#0297d0"
                    />
                    <path
                      d="M200.962,0c-2.825522,7.654887-5.58418,18.598467-6.878,24.5396h-3.227L198.167144,0h2.794856Z"
                      transform="translate(40.7205 1.475145)"
                      fill="#0297d0"
                    />
                    <path
                      d="M210.758994,13.2723L203.453,9.79544v-4.31497l10.516369,5.68093v3.1043l-3.210375-.9934ZM203.453,16.1438l7.305994-2.8715l3.210375-1.5676v3.1042L203.453,20.4588v-4.315Z"
                      transform="translate(40.48378-.917637)"
                      fill="#0297d0"
                    />
                    <path
                      d="M15.9546,13.7134c0-2.0026.4043-3.78591,1.2129-5.34988.8278-1.56401,2.0021-2.77514,3.5231-3.63343c1.5208-.87735,3.3112-1.31603,5.3711-1.31603c1.7713,0,3.3499.33378,4.736,1.00133c1.4054.64848,2.5413,1.57351,3.4076,2.77511.8855,1.20156,1.4728,2.60343,1.7616,4.2056h-6.7574c-.3081-.6676-.7509-1.1826-1.3284-1.54493-.5583-.38143-1.2032-.57215-1.9348-.57215-1.0781,0-1.9349.40051-2.5701,1.20158-.6161.8011-.9241,1.8787-.9241,3.2328s.308,2.4319.9241,3.2329c.6352.8011,1.492,1.2016,2.5701,1.2016.7316,0,1.3765-.1812,1.9348-.5436.5775-.3814,1.0203-.906,1.3284-1.5735h6.7574c-.2888,1.6021-.8761,3.004-1.7616,4.2056-.8663,1.2015-2.0022,2.1361-3.4076,2.8037-1.3861.6485-2.9647.9727-4.736.9727-2.0599,0-3.8503-.4291-5.3711-1.2874-1.521-.8773-2.6953-2.098-3.5231-3.662-.8086-1.564-1.2129-3.3473-1.2129-5.35Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M48.2376,24.0725c-1.9252,0-3.6964-.4482-5.3135-1.3447-1.5979-.8964-2.8686-2.1362-3.8119-3.7192s-1.4149-3.3663-1.4149-5.35c0-1.9835.4716-3.76685,1.4149-5.34989s2.214-2.81328,3.8119-3.69063c1.6171-.89643,3.3883-1.34464,5.3135-1.34464s3.6867.44821,5.2846,1.34464c1.5979.87735,2.8589,2.10756,3.783,3.69063.9433,1.58304,1.415,3.36639,1.415,5.34989c0,1.9837-.4717,3.767-1.415,5.35-.9241,1.583-2.1948,2.8228-3.8119,3.7192-1.5979.8965-3.3498,1.3447-5.2557,1.3447Zm0-5.9222c1.2706,0,2.2524-.4005,2.9455-1.2016.693-.8201,1.0396-1.9168,1.0396-3.2901c0-1.3923-.3466-2.489-1.0396-3.29-.6931-.8202-1.6749-1.23025-2.9455-1.23025-1.2899,0-2.2813.41005-2.9744,1.23025-.6931.801-1.0396,1.8977-1.0396,3.29c0,1.3733.3465,2.47,1.0396,3.2901.6931.8011,1.6845,1.2016,2.9744,1.2016Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M69.5522,3.61719c2.1369,0,4.0043.42914,5.6022,1.28742c1.6171.85828,2.8589,2.05034,3.7252,3.57617s1.2995,3.26152,1.2995,5.20692c0,1.9264-.4332,3.662-1.2995,5.2069s-2.1081,2.7655-3.7252,3.662c-1.5979.8774-3.4653,1.3161-5.6022,1.3161h-8.519v-20.25551h8.519ZM68.9746,18.208c1.4439,0,2.5894-.391,3.4364-1.173.8472-.782,1.2707-1.8978,1.2707-3.3473s-.4235-2.5654-1.2707-3.3473c-.847-.78202-1.9925-1.17299-3.4364-1.17299h-1.5305v9.04059h1.5305Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M88.9048,8.68104v2.48896h6.3529v4.7778h-6.3529v2.861h7.2195v5.0639h-13.6302v-20.25551h13.6302v5.06385h-7.2195Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M102.87,13.7134c0-2.0026.404-3.78591,1.212-5.34988.828-1.56401,2.003-2.77514,3.523-3.63343c1.521-.87735,3.312-1.31603,5.372-1.31603c1.771,0,3.35.33378,4.736,1.00133c1.405.64848,2.541,1.57351,3.408,2.77511.884,1.20156,1.472,2.60343,1.761,4.2056h-6.758c-.308-.6676-.75-1.1826-1.328-1.54493-.558-.38143-1.203-.57215-1.935-.57215-1.078,0-1.934.40051-2.57,1.20158-.616.8011-.924,1.8787-.924,3.2328s.308,2.4319.924,3.2329c.636.8011,1.492,1.2016,2.57,1.2016.732,0,1.377-.1812,1.935-.5436.578-.3814,1.02-.906,1.328-1.5735h6.758c-.289,1.6021-.877,3.004-1.761,4.2056-.867,1.2015-2.003,2.1361-3.408,2.8037-1.386.6485-2.965.9727-4.736.9727-2.06,0-3.851-.4291-5.372-1.2874-1.52-.8773-2.695-2.098-3.523-3.662-.808-1.564-1.212-3.3473-1.212-5.35Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M169.393,3.61719v20.25551h-6.382v-10.0992l-3.148,10.0992h-5.487l-3.147-10.0992v10.0992h-6.411v-20.25551h7.854l4.505,12.15901l4.39-12.15901h7.826Z"
                      fill="#3f3d56"
                    />
                    <path
                      d="M189.006,10.5693c0,1.2778-.299,2.4413-.896,3.4903-.597,1.0299-1.482,1.8501-2.656,2.4604-1.156.6103-2.561.9155-4.216.9155h-2.541v6.4372h-6.411v-20.25551h8.952c2.502,0,4.417.6294,5.747,1.88821c1.347,1.25882,2.021,2.94676,2.021,5.0639Zm-8.491,1.8596c1.329,0,1.993-.6199,1.993-1.8596c0-1.2398-.664-1.85964-1.993-1.85964h-1.818v3.71924h1.818Z"
                      transform="translate(1.851-.0845)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M131.679,7.13281L121.649,22.8713h6.618l3.412-4.5317v-11.20679Z"
                      fill="#06a9a9"
                    />
                    <path
                      d="M131.677,7.52734L141.823,23.2984h-6.617l-3.529-4.6581v-11.11296Z"
                      fill="#0297d0"
                    />
                    <path
                      d="M131.795,5.96875L120.332,23.7894h22.926L131.795,5.96875Zm0,2.48544L122.776,22.4757h18.038L131.795,8.45419Z"
                      clip-rule="evenodd"
                      fill="#3f3d56"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M131.677,18.2969l4.255,5.4913h-8.509l4.254-5.4913Z"
                      fill="#e9fe84"
                    />
                    <path
                      d="M131.677,18.2969l-4.254,5.4913h8.509l-4.255-5.4913Zm0,1.8856l-1.948,2.5149h3.897l-1.949-2.5149Z"
                      clip-rule="evenodd"
                      fill="#3f3d56"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M133.967,4.06146l-3.116,5.50115-.933-.49508l3.117-5.50112.932.49505Z"
                      clip-rule="evenodd"
                      fill="#3f3d56"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M129.208,4.22335l3.374,5.35741.908-.53588-3.373-5.35738-.909.53585Z"
                      clip-rule="evenodd"
                      fill="#3f3d56"
                      fill-rule="evenodd"
                    />
                  </g>
                  <clipPath id="eQrhBVx4o2M21">
                    <rect
                      width="400"
                      height="24.6721"
                      rx="0"
                      ry="0"
                      fill="#fff"
                    />
                  </clipPath>
                </g>
                <path
                  d="M200,7.02491l13.194744-.59576c0,0,0,1.778224,0,4.187539c0,5.225097,0,8.220544,0,10.886261Q200,27.85093,200,16.8959"
                  transform="translate(-4.129365 0.229669)"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-width="6"
                />
                <path
                  d="M216.865291,22.9361c0,0,0-3.861855,0-9.498315c3.147188,1.573594,7.993776-6.681058-.458819-11.50224q10.879905-1.291974,10.879905,7.476644t-10.879905,2.190322l12.25636,9.094289"
                  transform="translate(1.376455 1.835274)"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-width="6"
                />
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
