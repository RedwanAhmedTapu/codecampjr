"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";

const ActiveStudent = () => {
  const [images, setImages] = useState([
    "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1694862539~exp=1694863139~hmac=10b9171a5bdfe12d18e03cab5444256bb98d59ae904acc73b2d38cb5243fb81e",
    "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1694862564~exp=1694863164~hmac=7f483e3244e17682c7722488aa4f7042bd42af4ec61e639f073adff98736a3d1",
    "https://img.freepik.com/premium-photo/child-boy-teenager-with-glasses-gray-background_656932-680.jpg",
    "https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?w=996&t=st=1694862627~exp=1694863227~hmac=62f82cf86671f02c40381a2494a3aab5fd23390309f5d3b1afd680d97fd1f2c2",
    "https://img.freepik.com/free-photo/handsome-young-guy-with-glasses-posing_176420-30004.jpg?w=996&t=st=1694863087~exp=1694863687~hmac=80e16f657402a7f6e8376339d18b24ef6696a1729dbf54d1c5680793d670de50",
  ]);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [number, setNumber] = useState(64447780);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const sensitivity = 4; // Adjust the sensitivity to control how fast the number increases

      const newNumber = Math.floor(scrollY / sensitivity);

      setNumber(number+newNumber);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImageIndex2((prevIndex) => (prevIndex + 2) % images.length);
      setCurrentImageIndex3((prevIndex) => (prevIndex + 3) % images.length);
      setCurrentImageIndex4((prevIndex) => (prevIndex + 4) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="activeStudentContainer" >
        <div className="activeStudentItemDiv">
          <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]"></div>

          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex1]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[60%]"
            alt="support-community-img"
          />
          <Image
            src={`${images[currentImageIndex2]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full top-72 left-[12%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex3]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-96 left-[55%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex4]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[10rem] h-[10rem] rounded-full top-96 left-[8%] "
            alt="support-community-img"

          />
        </div>
        <div className="activeStudentTextDiv">
          <div className="flex_center flex-col gap-y-8">
            <h3 className="max-[350px]:text-2xl text-4xl opacity-75 font-bold text-cyan-900 dark:text-white ">
              Supportive Community
            </h3>
            <h3
              className={`active_number text-blue-400 font-bold min-[663px]:text-7xl text-4xl ${
                hovered ? "hovered transition-all duration-300" : ""
              }`}
             
            >
              {number}
            </h3>
            <p className="text-[1rem] leading-[1.15] max-[359px]:w-full  font-extralight text-cyan-700 dark:text-white opacity-80 p-2 text-center">
            Welcome to CodeCampJr{`'`}s Community Hub, a vibrant and inclusive space designed to support and inspire young coders on their learning journey. At CodeCampJr, we believe that fostering a supportive community is essential for nurturing young talent and empowering them to become confident and proficient coders.
            </p>
          </div>

          <CodeEditor />
        </div>
        <div className="activeStudentItemDiv">
          <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]"></div>

          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex1]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[60%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex2]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full top-72 left-[12%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex3]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-96 left-[55%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex4]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[10rem] h-[10rem] rounded-full top-96 left-[8%] "
            alt="support-community-img"

          />
        </div>
      </div>

      {/* for mobile and tab version  */}
      <div className=" min-[930px]:hidden   w-full h-full bg-slate-100 dark:bg-[#000000] overflow-hidden">
        <div className="flex flex-col flex_center ">
          <div className="flex_center flex-col gap-8 p-10 w-full">
            <h3 className="min-[663px]:text-4xl text-2xl opacity-75 font-bold text-cyan-900 dark:text-white ">
              Supportive Community
            </h3>
            <h3
              className={`active_number text-blue-400 font-bold min-[663px]:text-7xl text-4xl ${
                hovered ? "hovered" : ""
              }`}
            
            >
              {number}
            </h3>
            <p className="text-[1rem] text-cyan-700 leading-[1.55]  dark:text-white opacity-80 p-2 text-center flex-1">
            Welcome to CodeCampJr{`'`}s Community Hub, a vibrant and inclusive space designed to support and inspire young coders on their learning journey. At CodeCampJr, we believe that fostering a supportive community is essential for nurturing young talent and empowering them to become confident and proficient coders.

            </p>
          </div>

          <CodeEditor />
        </div>
        <div className="relative w-full">
          <div className="absolute w-8 h-8 rounded-full bg-gray-500 bottom-96 left-[20%]  max-[663px]:top-10"></div>

          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <div className="absolute w-12 h-12 rounded-full bg-gray-500 top-24 left-[50%]"></div>
          <Image
            src={`${images[currentImageIndex1]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[4.5rem] h-[4.5rem] rounded-full top-52 left-[30%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex2]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[5.7rem] h-[5.7rem] rounded-full min-[663px]:top-44 min-[663px]:left-[12%] left-48 top-18"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex3]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative w-[6rem] h-[6rem] rounded-full top-10 min-[663px]:left-[55%] -right-[65%]"
            alt="support-community-img"

          />
          <Image
            src={`${images[currentImageIndex4]}`}
            width={300}
            height={300}
            layout="fixed"
            className="relative min-[663px]:w-[10rem] object-fit  min-[663px]:h-[10rem] w-[6rem] h-[6rem] rounded-full -top-24 min-[663px]:-right-[75%] right-10% "
            alt="support-community-img"

          />
        </div>
      </div>
    </>
  );
};

export default ActiveStudent;
