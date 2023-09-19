"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FcSimCardChip } from "react-icons/fc";
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
  const [isActive, setIsActive] = useState(false);
  const [payment, setPayment] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
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
  };
  console.log(studentSchedule);
  const confirmSchedule = () => {
    if (
      studentSchedule.email === "" ||
      studentSchedule.level === "" ||
      studentSchedule.schedule === ""
    ) {
      alert("please select schedule every step .");
    } else {
      setIsActive(true);
    }
  };

  const handleSubmit = async () => {
    setPayment(true);
    setIsActive(false);
    const res = await axios
      .post("https://codecampjrbackend.onrender.com/active-user/registration", studentSchedule)
      .then((res) => {
        console.log(res);
        // router.push(`/user-dashboard?userEmail=${email}`);
      });
  };
  // splitting user email and take only the user name
  function extractNameFromEmail(email) {
    const parts = email.split("@");

    if (parts.length === 2) {
      return parts[0];
    } else {
      return null;
    }
  }
  const username = extractNameFromEmail(email);
  // fees
  let fees;
  if (studentSchedule.level === "level-A") {
    fees = "2500/-";
  }
 else if (studentSchedule.level === "level-B") {
    fees = "5000/-";
  }
  else  {
    fees = "7500/-";
  }

  return (
    <>
      <div className={`absolute top-20 gap-y-16  ${payment ? "blur" : null}`}>
        <div className="slectlevelInnerdiv justify-center  ">
          <h2 className="text-slate-900 font-bold text-4xl max-[775px]:text-2xl dark:head_text  dark:text-4xl text-center">
            Select a level in which you want to admit
          </h2>
          <div className="level flex justify-between max-[550px]:flex-col w-full max-[550px]:h-screen max-[550px]:justify-center max-[550px]:gap-y-4 p-2 gap-x-4">
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
              <h2 className="text-2xl text-black font-bold text-center">B</h2>
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
              <h2 className="text-2xl text-black font-bold text-center">C</h2>
              <p className="text-xl text-white text-center">age: 20+ years</p>
              <p className="text-xl text-white text-center">Pro</p>
            </div>
          </div>
        </div>
        <div className="slectlevelInnerdiv flex_center ">
        <h2 className="text-slate-900 font-bold text-4xl max-[775px]:text-2xl dark:head_text  dark:text-4xl text-center">

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
                className="days "
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
            onClick={() => {
              confirmSchedule();
            }}
          >
            see schedule
          </div>
        </div>
        {isActive && (
          <div className="grid grid-rows-5 w-[45rem] h-[30rem] max-[410px]:w-[20rem] max-[510px]:w-[25rem] max-[510px]:h-[28rem] max-[1100px]:w-[30rem] max-[1100px]:w-[20rem] bg-slate-950 absolute top-24 left-[25%] max-[1260px]:left-[20%] max-[600px]:left-[6%] max-[370px]:left-[4%] max-[430px]:left-[2%] px-12 rounded-md">
            <div
              className="flex justify-end text-white text-6xl font-bold"
              onClick={() => {
                setIsActive(false);
              }}
            >
              ×
            </div>
            <div className="w-full border-2 border-white flex_center text-white text-2xl">
              {studentSchedule.level}
            </div>
            <div className="w-full flex_center">
              <div className="w-1/2 text-2xl text-white text-center">
                {studentSchedule.schedule.days[0]}
              </div>
              <div className="w-1/2 text-2xl text-white text-center">
                {studentSchedule.schedule.days[1]}
              </div>
            </div>
            <div className="w-full flex_center border-2 border-white text-white text-2xl">
              {studentSchedule.schedule.time}
            </div>
            <div className="w-full text-white flex_center text-3xl items-center relative">
              <button
                className="w-44 h-20  text-2xl absolute right-10 bg-slate-800 rounded-md"
                onClick={handleSubmit}
              >
                confirm schedule
              </button>
            </div>
          </div>
        )}
      </div>
      {payment && (
        <div className="relative  w-full h-full flex_center">
          <div className="bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-md p-8 max-[470px]:w[15rem] max-[600px]:w[20rem]  w-[30rem] h-[20rem] shadow-md flex flex-col justify-between text-white  mt-20">
            <div className="flex justify-between">
              <div className="w-24 h-20  rounded-md">
                <FcSimCardChip className="w-full h-full" />
              </div>
              <div className="max-[500px]:text-xl text-3xl text-white font-sans">
                course Fee:{fees}
              </div>
            </div>
            <div className="max-[500px]:text-sm text-lg font-semibold mt-4 uppercase">
              {username}
            </div>
            <div className="max-[500px]:text-sm text-lg mt-4 text font-sans">
              1234 5678 9012 3456
            </div>
            <div className="flex justify-between">
              <div className="max-[500px]:text-sm text-base mt-4 font-sans">
                {new Date("2023-09-02T15:30:00Z").toLocaleString()}
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg max-[500px]:text-sm" onClick={async()=>{
                 const res = await axios
                 .post(`https://codecampjrbackend.onrender.com/active-user/order/${email}`)
                 .then((res) => {
                   console.log(res.data.url);
                   router.push(`${res.data.url}`)
                 });
              }}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectLevel;
