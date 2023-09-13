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

const UserDashBoard = () => {
  const [userData, setUserData] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("storedUrl") || ""
  );

  const searchParams = useSearchParams();
  const emailId = searchParams.get("userEmail");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        localStorage.setItem("storedUrl", response.data.imageUrl);
        setImageUrl(response.data.imageUrl);
        console.log("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  useEffect(() => {
    const res = async () => {
      const data = await axios
        .get(`http://localhost:5000/active-user/info/${emailId}`)
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
        });
    };
    res();
  }, [emailId]);
  console.log(imageUrl);
  return (
    <>
      {userData && (
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
                <p className="text-slate-900 dark:text-white text-center text-xl">Dashboard</p>
              </div>
              <div className="w-full h-16 flex_center gap-x-2 hover:opacity-60 rounded-l-[10rem] transition-colors duration-500">
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  <GiOpenBook />
                </p>
                <p className="text-slate-900 dark:text-white text-center text-xl">classes</p>
              </div>
              <div className="w-full h-16 flex_center gap-x-2 hover:opacity-60 rounded-l-[10rem] transition-colors duration-500">
                <p className="text-slate-900 dark:text-white text-center text-xl">
                  <CgNotes />
                </p>

                <p className="text-slate-900 dark:text-white text-center text-xl">Resources</p>
              </div>
            </div>
            <div className="w-full h-8 flex_center mb-8  ">
              <p className="text-slate-900 dark:text-white text-center text-xl">
                <IoMdLogOut />
              </p>
              <p className="text-slate-900 dark:text-white text-center text-xl">Logout</p>
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
                />
              </div>
            </div>
            <div className="flex_center max-[740px]:flex-col max-[1029px]:gap-y-4 gap-x-2 ">
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2  flex_center text-slate-900 dark:text-white text-2xl font-bold uppercase">
                {userData.level}
              </div>
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2 w-full flex_center gap-y-12 flex-col">
                <p className="text-slate-900 dark:text-white text-center text-2xl font-bold">
                  Days
                </p>
                <div className="flex_center flex-col space-y-2 uppercase">
                  <p className="text-slate-900 dark:text-white text-center text-xl uppercase">
                    {/* {userData.schedule.days[0]} */}
                  </p>
                  <p className="text-slate-900 dark:text-white text-center text-xl uppercase">
                    {/* {userData.schedule.days[1]} */}
                  </p>
                </div>
              </div>
              <div className="powerDiv_light dark:powerOuterDiv powerdiv1 border-2  flex_center flex-col">
                <p className="text-slate-900 dark:text-white text-center font-bold text-2xl uppercase">
                  Time
                </p>
                <p className="text-white text-center text-xl uppercase">
                  {/* {userData.schedule.time} */}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20%] max-[1029px]:w-full h-full bg-white dark:bg-[#060606] flex items-center gap-y-12 flex-col overflow-hidden">
            <div className="w-64 mx-auto ">
              {imageUrl && (
                <div className="mt-4 ml-8 flex_center">
                  <Image
                    src={imageUrl}
                    alt="Uploaded"
                    className="rounded-full w-44 h-44"
                    width={300}
                    height={300}
                  />
                </div>
              )}
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
      )}
    </>
  );
};

export default UserDashBoard;
