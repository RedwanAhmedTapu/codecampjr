"use client";
import React from "react";
import Image from "next/image";
// import SSL_Banner from "/assets";

const Payment = ({setPayment}) => {
    console.log(setPayment)
  return (
    <div className="flex-col justify-center items-center bg-white dark:bg-black w-full h-auto relative max-[862px]:top-52">
      <div className=" flex_center text-xl text-slate-900 dark:text-white font-medium w-full h-auto" onClick={()=>{setPayment(true)}}>
        Make payment
      </div>
      <Image src="/assets/images/sslcommerz-banner.png" width={300} height={300} alt="ssl-banner-img" className="w-full h-full"/>
    </div>
  );
};

export default Payment;
