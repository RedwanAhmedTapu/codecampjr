"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
const TrialClassForm = () => {
  const [user, setUser] = useState({
    learnerName: "",
    age: "",
    school: "",
    parentName: "",
    phone: "",
    learnerEmail: "",
    profession: "",
    // country: "",
  });

  const router=useRouter();
  console.log(user);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      learnerName,
      age,
      parentName,
      learnerEmail,
      school,
      profession,
      phone,
    } = user;
    console.log(learnerEmail)
    try {
      if (
        learnerName.trim() === "" ||
        age.trim() === "" ||
        parentName.trim() === "" ||
        learnerEmail.trim()==="" ||
        school.trim() === "" ||
        profession.trim() === "" ||
        phone.trim() === ""
      ) {
        alert("please the all the data");
      } else {
        await axios
          .post("http://localhost:5000/learner/trial-registration", user)
          .then((data) => {
            alert(data.message);
            router("/");

          });
      }
    } catch {
      console.log("error");
    }
  };
  const data = [
    {
      level: "Level-A",
      age: "6-9years",
      months: "10 months",
    },
    {
      level: "Level-B",
      age: "10-16years",
      months: "8 months",
    },
    {
      level: "Level-C",
      age: "16-18+years",
      months: "6 months",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-screen h-screen  mt-16 gap-y-8">
        <h1 className="text-slate-900 font-bold dark:head_text text-4xl dark:text-4xl self-center">
          Trial Class Registration
        </h1>

        <div className="w-full h-[40%]  max-[890px]:h-full  flex_center max-[890px]:flex-col p-8 gap-x-4 max-[890px]:gap-y-12">
          {data.map((curElem, index) => {
            return (
              <>
                <div className="trialDiv w-[33.33%] max-[890px]:w-full h-full  flex flex-col justify-between bg-gradient-to-r from-sky-400 to-blue-500 dark:bg-gradient-to-r dark:from-black dark:to-black  relative border-0 dark:border-2 border-slate-600 p-8 rounded-sm">
                  <h2 className="w-[80%] self-center text-white text-2xl text-start absolute top-0 bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-700 pl-4">
                    {curElem.level}
                  </h2>
                  <div className="flex justify-between">
                    <div className="flex text-2xl">
                      <p className="text-white">age</p>
                      <span className="text-white">:</span>
                    </div>
                    <div className="text-white">{curElem.age}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex text-2xl">
                      <p className="text-white">months</p>
                      <span className="text-white">:</span>
                    </div>
                    <div className="text-white text-2xl">{curElem.months}</div>
                  </div>
                  <div className="w-[70%] bg-slate-400 h-[1px] self-center">
                    <h2></h2>
                  </div>
                  <p className="text-white text-center text-2xl">
                    1 FREE Trial class
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-full flex flex-col h-[30%] max-[560px]:h-full gap-4 px-8">
          <h2 className=" text-slate-900 dark:head_text text-3xl dark:text-3xl text-start dark:text-start">Parent{"'"}s Info</h2>
          <div className="flex_center gap-x-2 max-[560px]:flex-col">
            <div className="flex flex-col w-[25%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="parentname" className="text-xl text-slate-900 dark:text-white">
                parent name:
              </label>
              <input
                type="text"
                name="parentName"
                id="parentName"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.parentName}
              />
            </div>
            <div className="flex flex-col w-[25%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="phone" className="text-xl text-slate-900 dark:text-white">
                contact:
              </label>

              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.phone}
              />
            </div>

            <div className="flex flex-col w-[25%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="learnerEmail" className="text-xl text-slate-900 dark:text-white">
                email:
              </label>

              <input
                type="email"
                name="learnerEmail"
                id="learnerEmail"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.learnerEmail}
              />
            </div>

            <div className="flex flex-col w-[25%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="profession" className="text-xl text-slate-900 dark:text-white">
                profession:
              </label>

              <input
                type="text"
                name="profession"
                id="profession"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.profession}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col h-[30%] max-[560px]:h-full px-8 gap-4">
          <h2 className="dark:head_text dark:text-3xl text-slate-900 text-3xl text-start  dark:text-start">Child Info</h2>
          <div className="flex gap-x-4 max-[560px]:flex-col max-[560px]:flex_center">
            <div className="flex flex-col w-[33.33%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="learnerName" className="text-xl text-slate-900 dark:text-white">
                name:
              </label>

              <input
                type="text"
                name="learnerName"
                id="learnerName"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"
                value={user.learnerName}
              />
            </div>
            <div className="flex flex-col w-[33.33%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="age" className="text-xl text-slate-900 dark:text-white">
                age:
              </label>

              <input
                type="text"
                name="age"
                id="age"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.age}
              />
            </div>
            <div className="flex flex-col w-[33.33%] max-[560px]:w-[90%] h-16 gap-y-2">
              <label for="school" className="text-xl text-slate-900 dark:text-white">
                school:
              </label>

              <input
                type="text"
                name="school"
                id="school"
                onChange={handleChange}
                className="w-full h-full bg-white dark:bg-black placeholder:text-black dark:placeholder:text-white placeholder:text-xl placeholder:pl-2 border-2  rounded-sm"

                value={user.school}
              />
            </div>
          </div>
        </div>
        <div
          className=" w-64 h-16 self-center flex_center rounded-sm dark:text-white text-2xl border-2 mb-2"
          onClick={handleSubmit}
        >
          Register For Trial Class
        </div>
      </div>
    </>
  );
};

export default TrialClassForm;
