"use client"
import {AiOutlineRight} from "react-icons/ai";
const HoverableDropdown = () => {
  return (
    <div className="relative group  max-w-full   w-full flex_center">
      <button className="navlist  list">
        Courses&nbsp;<AiOutlineRight className="text-slate-300 transform rotate-90 group-hover:rotate-[450deg] transition-transform duration-700"  />
      </button>
      <div className="absolute top-8 min-[900px]:-left-48 hidden min-[900px]:bg-black bg-slate-900 min-[500px]:w-[30rem] w-[20rem]  border-4 border-bg-gradient-to-r border-from-pink-500 border-via-red-500 border-to-yellow-500  border-gray-700 rounded-md shadow-md group-hover:block  flex_center divide-y divide-gray-200">
        <a
          href="#"
          className="dropdownMenu"
        >
         Web Courses 
        </a>
        <a
          href="#"
          className="dropdownMenu"
        >
          Web Automation
        </a>
        <a
          href="#"
          className="dropdownMenu"
        >
         AI Intelligence
        </a>
        <a
          href="#"
          className="dropdownMenu"
        >
        Data Science
        </a>
      </div>
    </div>
  );
};

export default HoverableDropdown;
