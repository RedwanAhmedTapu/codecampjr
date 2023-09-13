"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { document } from "postcss";
const SelectLevel = () => {
  const [studentSchedule, setStudentSchedule] = useState({
    level: "",
    group: "",
    schedule: {
      days: [],
      time: "",
    },
    email: "",
  });

  const searchParams = useSearchParams();

  const email = searchParams.get("userEmail");
  const updateSchedule = (newSchedule) => {
    setStudentSchedule((prevSchedule) => ({
      ...prevSchedule,
      email: email,
      schedule: {
        ...prevSchedule.schedule,
        days: newSchedule,
      },
    }));
  };

  // Example usage of the updateSchedule function
  const handleAddSchedule = (days) => {
    const newSchedule = [...studentSchedule.schedule.days, days];
    updateSchedule(newSchedule);
  };

  const setLevel = (level, id) => {
    setStudentSchedule((prevSchedule) => ({
      ...prevSchedule,
      level: level,
    }));
  };

  const setDay = (day) => {
    if (
      studentSchedule.schedule.days[0] &&
      studentSchedule.schedule.days[0] === day
    ) {
      alert("you must select different days");
    } else {
      if (
        studentSchedule.schedule.days &&
        studentSchedule.schedule.days.length >= 2
      ) {
        studentSchedule.schedule.days[1] = day;
      } else {
        handleAddSchedule(day);
      }
    }
  };

  const setTime = (time, id) => {
    setStudentSchedule((prevSchedule) => ({
      ...prevSchedule,
      schedule: {
        ...prevSchedule.schedule,
        time: time,
      },
    }));
    document.getElementById("confirmScedule").classList.add("timeActive");

  };
  console.log(studentSchedule);
  const confirmSchedule = () => {
    if (
      studentSchedule.email === "" ||
      studentSchedule.level === "" ||
      studentSchedule.schedule === {}
    ) {
      alert("please select schedule every step .");
    } else {
      
   
    }
  };
  return (
    <div className="absolute top-20 gap-y-16">
      <div className="slectlevelInnerdiv justify-center  ">
        <h2 className="head_text text-4xl text-center">
          Select a level in which you want to admit
        </h2>
        <div className="level flex justify-between w-full p-2 gap-x-4">
          <div
            className="levelInnerDiv "
            id="levelA"
            onClick={() => {
              setLevel("level-A", "levelA");
            }}
          >
            <h2 className="text-2xl text-black font-bold text-center">A</h2>
            <p className="text-xl text-white text-center">age: 7-14 years</p>
            <p className="text-xl text-white text-center">Basic</p>
          </div>
          <div
            className="levelInnerDiv"
            id="levelB"
            onClick={() => {
              setLevel("level-B", "levelB");
            }}
          >
            <h2 className="text-xl text-black font-bold text-center">B</h2>
            <p className="text-xl text-white text-center">age: 15-20 years</p>
            <p className="text-xl text-white text-center">Intermediate</p>
          </div>
          <div
            className="levelInnerDiv"
            id="levelC"
            onClick={() => {
              setLevel("level-C", "levelC");
            }}
          >
            <h2 className="text-xl text-black font-bold text-center">C</h2>
            <p className="text-xl text-white text-center">age: 20+ years</p>
            <p className="text-xl text-white text-center">Pro</p>
          </div>
        </div>
      </div>
      <div className="slectlevelInnerdiv flex_center ">
        <h2 className="head_text text-4xl">
          Set a schedule according to your comfort
        </h2>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl font-bold text-center text-white">
            Select Two Days
          </h3>
          <div className="flex_center gap-x-2 w-full flex-wrap gap-y-2">
            <div
              className="days"
              id="saturday"
              onClick={() => {
                setDay("saturday");
              }}
            >
              saturday
            </div>
            <div
              className="days"
              id="sunday"
              onClick={() => {
                setDay("sunday");
              }}
            >
              sunday
            </div>
            <div
              className="days"
              id="monday"
              onClick={() => {
                setDay("monday");
              }}
            >
              monday
            </div>
            <div
              className="days"
              id="tuesday"
              onClick={() => {
                setDay("tuesday");
              }}
            >
              tuesday
            </div>
            <div
              className="days"
              id="wednesday"
              onClick={() => {
                setDay("wednesday");
              }}
            >
              wednesday
            </div>
            <div
              className="days"
              id="thursday"
              onClick={() => {
                setDay("thursday");
              }}
            >
              thursday
            </div>
            <div
              className="days"
              id="friday"
              onClick={() => {
                setDay("friday");
              }}
            >
              friday
            </div>
          </div>
        </div>
      </div>
      <div className="slectlevelInnerdiv justify-start items-center">
        <div className="flex flex-col justify-around gap-y-4">
          <h3 className="text-2xl text-center font-bold text-white">
            Select Time
          </h3>
          <div className="flex_center gap-x-2 w-full flex-wrap gap-y-2">
            <div
              className="days"
              id="time1"
              onClick={() => {
                setTime("7.00AM-8.00AM", "time1");
              }}
            >
              7.00AM-8.00AM
            </div>
            <div
              className="days"
              id="time2"
              onClick={() => {
                setTime("8.00AM-9.00AM", "time2");
              }}
            >
              8.00AM-9.00AM
            </div>
            <div
              className="days"
              id="time3"
              onClick={() => {
                setTime("10.00Am-11.00AM", "time3");
              }}
            >
              10.00Am-11.00AM
            </div>
            <div
              className="days"
              id="time4"
              onClick={() => {
                setTime("11.00AM-12.00PM", "time4");
              }}
            >
              11.00AM-12.00PM
            </div>
            <div
              className="days"
              id="time5"
              onClick={() => {
                setTime("2.00PM-3.00PM", "time5");
              }}
            >
              2.00PM-3.00PM
            </div>
            <div
              className="days"
              id="time6"
              onClick={() => {
                setTime("3.00PM-4.00PM", "time6");
              }}
            >
              3.00PM-4.00PM
            </div>
            <div
              className="days"
              id="time7"
              onClick={() => {
                setTime("4.00PM-5.00PM", "time7");
              }}
            >
              4.00PM-5.00PM
            </div>
            <div
              className="days"
              id="time8"
              onClick={() => {
                setTime("5.00PM-6.00PM", "time8");
              }}
            >
              5.00PM-6.00PM
            </div>
            <div
              className="days"
              id="time9"
              onClick={() => {
                setTime("7.00PM-8.00PM", "time9");
              }}
            >
              7.00PM-8.00PM
            </div>
            <div
              className="days"
              id="time10"
              onClick={() => {
                setTime("8.00PM-9.00PM", "time10");
              }}
            >
              8.00PM-9.00PM
            </div>
            <div
              className="days"
              id="time11"
              onClick={() => {
                setTime("9.00PM-10.00PM", "time11");
              }}
            >
              9.00PM-10.00PM
            </div>
          </div>
        </div>
      </div>
      <div className="flex_center ">
        <div
          className="flex_center  self-center relative top-10 max-[600px]:w-[15rem] w-[45rem] h-20 bg-blue-400 hover:bg-blue-400 transition-colors duration-500 text-center text-white text-3xl rounded-xl shadow-md shadow-blue-900"
          onClick={()=>{
            confirmSchedule()
          }}
        >
          confirm schedule
        </div>
      </div>
      <div id="confirmScedule" className=" hidden absolute top-[30%]">
        <div>tapu</div>
      </div>
    </div>
  );
};

export default SelectLevel;
