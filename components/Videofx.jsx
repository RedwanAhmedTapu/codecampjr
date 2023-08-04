"use client"
import { React, useEffect, useRef } from "react";
// import Introvideos from "../video/circuit1.mp4";

const Videofx = () => {
  const videoRef = useRef();

  const eventHandle = () => {
    // if (typeof videoRef.current.play() !== undefined) videoRef.current.play();
    videoRef.current.play();
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", eventHandle);
  // }, []);
setTimeout(eventHandle,Infinity);
  return (
    <>
      <video
       
       
        autoPlay
        loop
        ref={videoRef}
        src="/assets/videos/circuit1.mp4"
        className="bg_color"
      ></video>
    </>
  );
};

export default Videofx;
