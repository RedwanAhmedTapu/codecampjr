"use client"
import { useMemo } from "react";
import {AiOutlineRight} from "react-icons/ai";
import Link from "next/link";
const HoverableDropdown = ({setToggle}) => {
  const navigate = () => {
    setToggle((prevToggle) => !prevToggle);
  };

const memoizedComponent = useMemo(() => (
    <div className="relative group  max-w-full   w-full flex_center">
      <button className="navlist  list text-slate-800  dark:text-white">
        Courses&nbsp;<AiOutlineRight className="text-slate-800  dark:text-white transform rotate-90 group-hover:rotate-[450deg] transition-transform duration-700"  />
      </button>
      <div className="absolute top-8 min-[900px]:-left-48 hidden min-[900px]:bg-black bg-slate-900 min-[500px]:w-[30rem] w-[20rem]  border-4 border-bg-gradient-to-r border-from-pink-500 border-via-red-500 border-to-yellow-500  border-gray-700 rounded-md shadow-md group-hover:block  flex_center divide-y divide-gray-200">
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}
        >
        Html 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        Css3 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        Javascript 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        Python 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        Reactjs 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        Tailwindcss 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        NodeJs 
        </Link>
        <Link
          href="/free-trial-class"
          className="dropdownMenu"
          onClick={navigate}

        >
        MongoDB 
        </Link>
       
       
      </div>
    </div>
  ), []);

  return memoizedComponent;
};

export default HoverableDropdown;
