"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";

const ActiveStudent = () => {
  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/11/21/15/39/grey-crowned-cranes-540657_1280.jpg",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="activeStudentContainer">
        <div className="activeStudentItemDiv">
          <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]"></div>

          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[60%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full top-72 left-[12%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-96 left-[55%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[10rem] h-[10rem] rounded-full top-96 left-[8%] "
          />
        </div>
        <div className="activeStudentTextDiv">
          <div className="flex_center flex-col gap-y-8">
            <h3 className="text-4xl opacity-75 font-bold text-white ">
              Supportive Community
            </h3>
            <h3 className="text-blue-400 font-bold text-7xl">64447780</h3>
            <p className="text-xl text-white opacity-80 p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              exercitationem sapiente praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Tenetur eveniet quaerat et.
            </p>
          </div>

          <CodeEditor />
        </div>
        <div className="activeStudentItemDiv">
          <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]"></div>

          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[60%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full top-72 left-[12%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-96 left-[55%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[10rem] h-[10rem] rounded-full top-96 left-[8%] "
          />
        </div>
      </div>

      {/* for mobile and tab version  */}
      <div className=" min-[930px]:hidden   w-full h-[60rem] bg-[#000000]">
        <div className="flex flex-col flex_center ">
        
          <div className="flex_center flex-col gap-8 p-10 w-full">
            <h3 className="min-[663px]:text-4xl text-2xl opacity-75 font-bold text-white ">
              Supportive Community
            </h3>
            <h3 className="text-blue-400 font-bold min-[663px]:text-7xl text-4xl">64447780</h3>
            <p className="text-xl text-white opacity-80 p-2 text-center flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              exercitationem sapiente praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Tenetur eveniet quaerat et.
            </p>
          </div>
        
        
        </div>
        <div className="relative w-full">
        <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]"></div>

<div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
<div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[30%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full min-[663px]:top-44 min-[663px]:left-[12%] left-48 top-18"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-32 min-[663px]:left-[55%] -right-[30%]"
          />
          <Image
            src={`${images[currentImageIndex]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative min-[663px]:w-[10rem] object-fit  min-[663px]:h-[10rem] w-[6rem] h-[6rem] rounded-full -top-24 min-[663px]:-right-[75%] right-10% "
          />
           
        </div>
   
      </div>
    
    </>
  );
};

export default ActiveStudent;
