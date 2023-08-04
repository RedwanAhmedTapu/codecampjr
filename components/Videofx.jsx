"use client";
import { React, useEffect, useRef,useMemo } from "react";
// import Introvideos from "../video/circuit1.mp4";

const Videofx = () => {
  const videoRef = useRef();

  const eventHandle = () => {
    videoRef.current &&  videoRef.current.play();
  };
  useEffect(() => {
    window.addEventListener("scroll", eventHandle);
  }, []);
  return (
    <>
    {
      <video
        autoPlay
        loop
        ref={videoRef}
        src="/circuit1.mp4"
        className="bg_color"
      ></video>
    }
    </>
  );
};

export default Videofx;

// "use client";
// import { React, useEffect, useRef } from "react";
// // import Introvideos from "../video/circuit1.mp4";

// const Videofx = () => {
//   const videoRef = useRef();
//   videoRef.current && videoRef.current.play();
//   const eventHandle = () => {
//     // if (typeof videoRef.current.play() !== undefined) videoRef.current.play();
//     // 
//   };
//   // useEffect(() => {
//   //   window.addEventListener("scroll", eventHandle);
//   // }, []);
//   // setTimeout(eventHandle, Infinity);
//   return (
//     <>
//       <video
//         autoPlay
//         loop
//         ref={videoRef}
//         src="/circuit1.mp4"
//         controls="false"
//         className="bg_color"
//       ></video>
//     </>
//   );
// };

// export default Videofx;
