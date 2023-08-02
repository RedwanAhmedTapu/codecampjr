"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { ImSpinner9 } from "react-icons/im";
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
    <nav className="flex justify-between items-center w-full mb-10 pt-4 px-8">
      <Link href="/" className="flex gap-2">
        {/* <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={80}
          height={50}
        ></Image> */}
        <ImSpinner9 className=" w-16 h-16" />
      </Link>
      <div className="sm:flex  hidden">
        {isLoggedIn ? (
          <div className="flex justify-center items-center  gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="w-34 h-12 flex justify-center items-center p-3 bg-black rounded-3xl text-white text-center text-2xl font-mono font-extrabold "
            >
              Create Post
            </Link>
            <div
              className="w-34 h-12 flex justify-center items-center p-3 bg-white rounded-3xl text-black border border-spacing-6 border-black text-center text-2xl font-mono font-extrabold "
              onClick={()=>{

              }}
            >
              Sign Out
            </div>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={80}
              height={50}
            ></Image>
          </div>
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => {
                <div
                  className="w-34 h-12 flex justify-center items-center p-3 bg-white rounded-3xl text-black border border-spacing-6 border-black text-center text-2xl font-mono font-extrabold "
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                ></div>;
              })} */}
          </>
        )}
      </div>

      {/* mobile responsive */}
      <div className="w-34 h-64 sm:h-16  sm:absolute -top-52    ">
        {isLoggedIn ? (
          
          <div className="w-64 h-64   transform translate-y-8 -translate-x-12 sm:-translate-y-60 transition-transform duration-1000 ease-in  sm:transition-none flex flex-col justify-center items-center  gap-3 md:gap-5 bg bg-slate-200 shadow-2xl">
             <Image
               src="/assets/images/logo.svg"
               alt="logo"
               width={80}
               height={20}
               className="relative top-4"
               onClick={() => {
                 setToggle((prev) => !prev);
               }}
             />

            {toggle && (
             <div className="w-34 h-64   transform translate-y-8 -translate-x-2 sm:-translate-y-60 transition-transform duration-1000 ease-in  sm:transition-none flex flex-col justify-center items-center  gap-3 md:gap-5">
             <Link
               href="/create-prompt"
               className="w-34 h-12 flex justify-center items-center p-3 bg-black rounded-3xl text-white text-center text-2xl font-mono font-extrabold "
             >
               Create Post
             </Link>
             <div
               className="w-34 h-12 flex justify-center items-center p-3 bg-white rounded-3xl text-black border border-spacing-6 border-black text-center text-2xl font-mono font-extrabold "
               onClick={()=>{}}
             >
               Sign Out
             </div>
           
             </div>
            )}
            
          </div>
          
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => {
                <div
                  className="w-34 h-12 flex justify-center items-center p-3 bg-white rounded-3xl text-black border border-spacing-6 border-black text-center text-2xl font-mono font-extrabold "
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                ></div>;
              })} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
