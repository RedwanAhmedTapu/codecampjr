"use client";

import React, { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { SiExpress } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoPython,
  BiLogoDjango,
  BiLogoMongodb,
} from "react-icons/bi";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
const SlidingComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const swiper = useSwiper();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className=" max-[900px]:hidden w-full h-[20rem] bg-gradient-to-bl from-slate-800 to-slate-50  box-border   flex justify-center items-center shadow-3xl ">
        <div className="w-[54rem] h-[15rem] bg-gradient-to-bl from-slate-800 to-slate-50  flex justify-center items-center  gap-4 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className=""
          >
            <SwiperSlide>
              <div className="slide_item">
                <AiFillHtml5 className="slide_icon" />
                <p className="slide_text">Html5</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <ImCss3 className="slide_icon text-blue-500" />
                <p className="slide_text">Css3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJavascript className="slide_icon text-yellow-400" />
                <p className="slide_text">Javascript</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoReact className="slide_icon text-blue-600" />
                <p className="slide_text">React</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoTailwindCss className="slide_icon text-cyan-700" />
                <p className="slide_text">Tailwindcss</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoNodejs className="slide_icon text-green-800" />
                <p className="slide_text">NodeJS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <SiExpress className="slide_icon text-black" />
                <p className="slide_text">ExpressjS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJava className="slide_icon" />
                <p className="slide_text">Java</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoPython className="slide_icon" />
                <p className="slide_text">Python</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoDjango className="slide_icon text-gray-800" />
                <p className="slide_text">Django</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoMongodb className="slide_icon text-green-900" />
                <p className="slide_text">MongoDB</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* for tablet */}
      <div className=" min-[900px]:hidden max-[615px]:hidden  w-full h-[20rem] bg-gradient-to-bl from-slate-800 to-slate-50  box-border   flex justify-center items-center shadow-3xl ">
        <div className="w-[36rem] h-[15rem] bg-gradient-to-bl from-slate-800 to-slate-50  flex justify-center items-center  gap-4 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className=""
          >
            <SwiperSlide>
              <div className="slide_item">
                <AiFillHtml5 className="slide_icon" />
                <p className="slide_text">Html</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <ImCss3 className="slide_icon text-blue-500" />
                <p className="slide_text text-blue-500">Css3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJavascript className="slide_icon" />
                <p className="slide_text">Javascript</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoReact className="slide_icon" />
                <p className="slide_text">React</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoTailwindCss className="slide_icon" />
                <p className="slide_text">Tailwindcss</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoNodejs className="slide_icon" />
                <p className="slide_text">NodeJS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <SiExpress className="slide_icon" />
                <p className="slide_text">ExpressjS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJava className="slide_icon" />
                <p className="slide_text">Java</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoPython className="slide_icon" />
                <p className="slide_text">Python</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoDjango className="slide_icon" />
                <p className="slide_text">Django</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoMongodb className="slide_icon" />
                <p className="slide_text">MongoDB</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* for mobile */}
      <div className=" min-[614px]:hidden   w-full h-[25rem] bg-gradient-to-bl from-slate-800 to-slate-50  box-border   flex justify-center items-center shadow-3xl ">
        <div className="w-[18rem] h-[15rem]  bg-gradient-to-bl from-slate-800 to-slate-50 flex justify-center items-center    gap-4 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className=""
          >
            <SwiperSlide>
              <div className="slide_itemM">
                <AiFillHtml5 className="slide_iconM" />
                <p className="slide_textM">Html</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide_item">
                <ImCss3 className="slide_icon" />
                <p className="slide_text">Css3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJavascript className="slide_icon" />
                <p className="slide_text">Javascript</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoReact className="slide_icon" />
                <p className="slide_text">React</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoTailwindCss className="slide_icon" />
                <p className="slide_text">Tailwindcss</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoNodejs className="slide_icon" />
                <p className="slide_text">NodeJS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <SiExpress className="slide_icon" />
                <p className="slide_text">ExpressjS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoJava className="slide_icon" />
                <p className="slide_text">Java</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoPython className="slide_icon" />
                <p className="slide_text">Python</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoDjango className="slide_icon" />
                <p className="slide_text">Django</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <BiLogoMongodb className="slide_icon" />
                <p className="slide_text">MongoDB</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SlidingComponent;
