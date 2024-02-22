"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { RxDashboard } from "react-icons/rx";
import { GiOpenBook } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import isAuth from "./IsAuth";

const UserDashBoard = () => {
  const [userData, setUserData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [availabeleUser, setUserAvailable] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const searchParams = useSearchParams();
  const emailId = searchParams.get("userEmail");
  const router = useRouter();

  const server = process.env.SERVER_URL;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      try {
        const response = await axios.post(
          `${server}/upload`,
          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: ` ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        localStorage.setItem("imageurl", response.data.imageUrl);
        // setImageUrl(localStorage.getItem("storedUrl"));
        console.log("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  useEffect(() => {
    const res = async () => {
      const data = await axios
        .get(`${server}/active-user/info/${emailId}`, {
          headers: {
            Authorization: ` ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
          if (res.data.schedule && res.data.schedule.days) {
            setUserAvailable(true);
          }

          const img = localStorage.getItem("imageurl");
          setImageUrl(img);
        });
    };
    res();
  }, [emailId]);
  console.log(imageUrl);
  return (
    <>
      {availabeleUser ? (
        <div className="w-[100%] h-full flex max-[1029px]:flex-col max-[1029px]:flex-col-reverse max-[500px]:border-0  max-[1029px]:border-[0.001rem] border-2 mr-12 mt-20 border-slate-300 rounded-xl overflow-hidden ">
          <div className="w-[20%] h-full max-[1029px]:hidden max-[1029px]:flex-col-reverse  bg-white dark:bg-[#060606] flex_center justify-between flex-col pl-6 pt-6  overflow-hidden">
            <div className="w-full h-8 flex_center  ">
              <p className="text-xl  text-slate-900 dark:text-white text-center">
                <ImSpinner9 className=" w-16 h-8 " />
              </p>
              <p className="text-black dark:text-white text-center text-xl">
                codecampjr
              </p>
            </div>
            <div className="w-full h-96 flex_center space-y-4  flex-col ">
              <div className="w-full h-16 flex_center gap-x-2 hover:opacity-60 rounded-l-[10rem] transition-colors duration-500">
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  <RxDashboard />
                </p>
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  Dashboard
                </p>
              </div>
              <div className="w-full h-16 flex_center gap-x-2 hover:opacity-60 rounded-l-[10rem] transition-colors duration-500">
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  <GiOpenBook />
                </p>
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  classes
                </p>
              </div>
              <div className="w-full h-16 flex_center gap-x-2 hover:opacity-60 rounded-l-[10rem] transition-colors duration-500">
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  <CgNotes />
                </p>

                <p className="text-slate-900 dark:text-white text-center text-xl">
                  Resources
                </p>
              </div>
            </div>
            <div className="w-full h-8 flex_center mb-8  ">
              <p className="text-slate-900 dark:text-white text-center text-xl">
                <IoMdLogOut />
              </p>
              <p
                className="text-slate-900 dark:text-white text-center text-xl"
                onClick={() => {
                  localStorage.removeItem("loggedUser");
                  router.push("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
          <div className="w-[60%] max-[1029px]:w-full h-full flex flex-col gap-y-8 dark:mt-4 max-[1029px]:p-4  bg-white dark:bg-[#060606]">
            <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 flex gap-x-12 ">
              <p className="head_text_light dark:head_text  max-[600px]:text-6xl dark:max-[600px]:text-6xl dark:max-[450px]:text-4xl max-[450px]:text-4xl">
                Web Courses
              </p>
              <div className="w-44 h-44 ">
                <Image
                  src="/assets/images/Black Modern Hackathon Instagram Post (13).png"
                  width={300}
                  height={300}
                  className=" self-center"
                  alt="web-img"
                />
              </div>
            </div>
            <div className="flex_center max-[740px]:flex-col max-[1029px]:gap-y-4 gap-x-2 ">
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2  flex_center text-slate-900 dark:text-white text-2xl font-bold uppercase">
                {/* {userData.level} */}
              </div>
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 w-full flex_center gap-y-12 flex-col">
                <p className="text-slate-900 dark:text-white text-center text-2xl font-bold">
                  Days
                </p>
                <div className="flex_center flex-col space-y-2 uppercase">
                  <p className="text-slate-900 dark:text-white text-center text-xl uppercase">
                    {userData.schedule.days[0]}
                  </p>
                  <p className="text-slate-900 dark:text-white text-center text-xl uppercase">
                    {userData.schedule.days[1]}
                  </p>
                </div>
              </div>
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2  flex_center flex-col">
                <p className="text-slate-900 dark:text-white text-center font-bold text-2xl uppercase">
                  Time
                </p>
                <p className="text-white text-center text-xl uppercase">
                  {userData.schedule.time}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20%] max-[1029px]:w-full h-full bg-white dark:bg-[#060606] flex items-center gap-y-12 flex-col overflow-hidden">
            <div className="w-64 mx-auto ">
              <div className="w-full flex_center">
                <div className="  w-44 h-44 border-[0.2rem] border-slate-400 rounded-full flex_center bg-white">
                  <Image
                    src={imageUrl && imageUrl}
                    alt="Uploaded"
                    className="rounded-full w-full h-full"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <input
                type="file"
                className="file-input rounded-full p-2"
                onChange={handleFileChange}
              />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                onClick={handleUpload}
              >
                {localStorage.getItem("storedUrl")
                  ? "change photo"
                  : "upload photo"}
              </button>
            </div>
            <div className="text-white flex flex-col w-full min-[1029px]:px-2 px-4 gap-y-12">
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 dark:min-[1029px]:w-full min-[1029px]:w-full dark:max-[600px]:w-full max-[600px]:w-full w-[70%] dark:w-[70%] flex_center flex-col self-center"></div>

              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 dark:min-[1029px]:w-full min-[1029px]:w-full dark:max-[600px]:w-full max-[600px]:w-full w-[70%] dark:w-[70%] flex_center flex-col self-center"></div>
            </div>
            {/* <div className="text-white flex flex-col w-full min-[1029px]:px-2 px-12 gap-y-2">
                <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 dark:min-[1029px]:w-full min-[1029px]:w-full dark:max-[600px]:w-full max-[600px]:w-full w-[70%] dark:w-[70%] flex_center flex-col self-center"></div>
                <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 dark:min-[1029px]:w-full min-[1029px]:w-full dark:max-[600px]:w-full max-[600px]:w-full w-[70%] dark:w-[70%] flex_center flex-col self-center"></div>

            </div> */}
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex_center">
          <div className="w-96 h-72 max-[500px]:w-72 max-[500px]:h-64 bg-slate-800  dark:bg-blue-300 shadow-md rounded-md flex flex-col justify-center items-center gap-y-6 relative">
            {/* Different Cartoon SVG Icon Animation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 animate-bounce"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-1.884 0-3.57.678-4.9 1.789C4.35 2.896 4 4.348 4 6v.586A8 8 0 0 0 2 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2c0-1.654 1.346-3 3-3h.586c.343 0 .672-.137.912-.382L12.23 9.05c.183-.193.27-.447.228-.704A4.004 4.004 0 0 0 10 2a4 4 0 0 0-2.355.79c-.046.037-.092.074-.134.114A3.99 3.99 0 0 0 5 6v2c0 .65.254 1.263.715 1.723.461.459 1.075.724 1.735.727L8 10h2l.283-.55c.66-.003 1.273-.268 1.734-.727.461-.459.715-1.072.715-1.723V6c0-1.651-.349-3.104-1.1-4.211C13.571.678 11.884 0 10 0zm-1 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
            <p className="text-xl text-slate-50 dark:text-slate-950 font-serif font-extralight text-center">
              You haven{`'`}t bought any course
            </p>
            {/* Awesome OK Button */}
            <button
              className="w-24 h-10 bg-blue-500 hover:bg-blue-400 shadow-xl rounded-md text-white font-semibold"
              onClick={() => {
                router.push("/free-trial-class");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default isAuth(UserDashBoard);
