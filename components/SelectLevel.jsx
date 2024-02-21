"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FcSimCardChip } from "react-icons/fc";
import isAuth from "./IsAuth";
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
  const [levels, setLevels] = useState([
    {
      id: "levelA",
      label: "A",
      color: "bg-[#ef673e] ",
      selected: false,
      age: "age: 7-14 years",
      medium: " Basic",
    },
    {
      id: "levelB",
      label: "B",
      color: "bg-[#ef673e] ",
      selected: false,
      age: "age: 15-20 years",
      medium: "Intermediate",
    },
    {
      id: "levelC",
      label: "C",
      color: "bg-[#ef673e] ",
      selected: false,
      age: "age: 20+ years",
      medium: " Pro",
    },
  ]);
  const [daysOfWeek, setDaysOfweek] = useState([
    { id: "saturday", color: "bg-[#183D3D]", selected: false },
    { id: "sunday", color: "bg-[#183D3D]", selected: false },
    { id: "monday", color: "bg-[#183D3D]", selected: false },
    { id: "tuesday", color: "bg-[#183D3D]", selected: false },
    { id: "wednesday", color: "bg-[#183D3D]", selected: false },
    { id: "thursday", color: "bg-[#183D3D]", selected: false },
    { id: "friday", color: "bg-[#183D3D]", selected: false },
  ]);
  const [timeSlots, setTimeSlots] = useState([
    {
      id: 1,
      label: "7.00AM-8.00AM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 2,
      label: "8.00AM-9.00AM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 3,
      label: "10.00AM-11.00AM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 4,
      label: "11.00AM-12.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 5,
      label: "2.00PM-3.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 6,
      label: "3.00PM-4.00PM",
      color: "bg-[#183D3D]",
      selected: false,
    },
    {
      id: 7,
      label: "4.00PM-5.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 8,
      label: "5.00PM-6.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 9,
      label: "7.00PM-8.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 10,
      label: "8.00PM-9.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
    {
      id: 11,
      label: "9.00PM-10.00PM",
      color: "bg-[#183D3D] ",
      selected: false,
    },
  ]);

  const [isActive, setIsActive] = useState(false);
  const [payment, setPayment] = useState(false);

  const server=process.env.SERVER_URL;


  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("userEmail");
  const userCompleted = searchParams.get("userCompletion");
  const updateSchedule = (newSchedule) => {
    setStudentSchedule((prevSchedule) => ({
      ...prevSchedule,
      email,
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

  const handleSetLevel = (level, id) => {
    setStudentSchedule((prevSchedule) => ({
      ...prevSchedule,
      level: level,
    }));
  };

  const setDay = (day) => {
    // Check if the days property is an array
    if (Array.isArray(studentSchedule.schedule.days)) {
      // Check if the array already contains two selected days
      if (studentSchedule.schedule.days.length === 2) {
        // Empty the array
        const updatedDays = [];
        if (studentSchedule.schedule.days.includes(day)) {
          updateSchedule(updatedDays);
        } else {
          updateSchedule([...updatedDays, day]);
        }
      } else {
        const index = studentSchedule.schedule.days.findIndex(
          (element) => element === day
        );

        if (index !== -1) {
          // If the day is already selected, remove it
          const updatedDays = studentSchedule.schedule.days.filter(
            (element) => element !== day
          );
          updateSchedule(updatedDays);
        } else {
          // If the day is not selected, add it
          handleAddSchedule(day);
        }
      }
    } else {
      console.error("studentSchedule.schedule.days is not an array.");
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
// handlesubmit for trialstudent
  const handleSubmitForTrial = async () => {
    // setPayment(true);
    // setIsActive(false);
    const res = await axios
      .put(
        `${server}/update-trial-learner-data`,
        studentSchedule
      )
      .then((res) => {
        console.log(res);
        router.push(`/adminDashboard`);
      });
  };
  // handleSubmit for active-student
  const handleSubmitActiveStudent = async () => {
    // setPayment(true);
    // setIsActive(false);
    const res = await axios
      .put(
        `${server}/update-trial-to-active-learner-data`,
        studentSchedule
      )
      .then((res) => {
        console.log(res);
        router.push(`/adminDashboard`);
      });
  };
  // splitting user email and take only the user name
  // function extractNameFromEmail(email) {
  //   const parts = email.split("@");

  //   if (parts.length === 2) {
  //     return parts[0];
  //   } else {
  //     return null;
  //   }
  // }
  // const username = extractNameFromEmail(email);
  // fees
  let fees;
  if (studentSchedule.level === "level-A") {
    fees = "2500/-";
  } else if (studentSchedule.level === "level-B") {
    fees = "5000/-";
  } else {
    fees = "7500/-";
  }

  return (
    <>
      <div className={`relative top-20 gap-y-16  ${payment ? "blur" : null}`}>
        <div className="slectlevelInnerdiv justify-center  ">
          <h2 className="text-slate-900 font-bold text-4xl max-[775px]:text-2xl dark:head_text  dark:text-4xl text-center">
            Select a level in which you want to admit
          </h2>
          <div className="level flex justify-between max-[550px]:flex-col w-full max-[550px]:h-screen max-[550px]:justify-center max-[550px]:gap-y-4 p-2 gap-x-4">
            {levels.map((level) => (
              <div
                key={level.id}
                className={`levelInnerDiv ${level.color}`}
                id={level.id}
                onClick={() => {
                  const updatedLevels = levels.map((div) =>
                    div.id === level.id
                      ? {
                          ...div,
                          selected: !div.selected,
                          color: div.selected ? "bg-[#ef673e]" : "bg-green-500",
                        }
                      : {
                          ...div,
                          selected: false, // Reset other levels to not selected
                          color: "bg-[#ef673e]",
                        }
                  );

                  setLevels(updatedLevels);

                  const levelSelected =
                    studentSchedule.level === `level-${level.label}`
                      ? ""
                      : `level-${level.label}`;

                  handleSetLevel(levelSelected, level.id);
                }}
              >
                <h2 className="text-2xl text-black font-bold text-center">
                  {level.label}
                </h2>
                <p className="text-xl text-white text-center">{level.age}</p>
                <p className="text-xl text-white text-center">{level.medium}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="slectlevelInnerdiv flex_center ">
          <h2 className="text-slate-900 font-bold text-4xl max-[775px]:text-2xl dark:head_text  dark:text-4xl text-center">
            Set a schedule according to your comfort
          </h2>
          <div className="flex_center gap-x-2 w-full flex-wrap gap-y-2">
            {daysOfWeek.map((day) => (
              <div
                key={day.id}
                className={`days ${day.color}`}
                id={day.id}
                onClick={() => {
                  const updatedLevels = daysOfWeek.map((div) => {
                    console.log(div.id === day.id);
                    if (div.id === day.id) {
                      // Toggle the selected status

                      const updatedDay = {
                        ...div,
                        selected: !div.selected,
                        color: div.selected ? "bg-[#183D3D]" : "bg-red-500",
                      };

                      return updatedDay;
                    } else {
                      // Keep track of the number of selected days
                      const selectedDays = daysOfWeek.filter((d) => d.selected);
                      const canSelect = selectedDays.length < 2;

                      if (!canSelect && div.selected) {
                        // If already two days selected, and the clicked day is selected, reset it
                        return {
                          ...div,
                          selected: false,
                          color: "bg-[#183D3D]",
                        };
                      }

                      return div;
                    }
                  });

                  console.log(updatedLevels);

                  setDaysOfweek(updatedLevels);
                  setDay(day.id);
                }}
              >
                {day.id}
              </div>
            ))}
          </div>
        </div>
        <div className="slectlevelInnerdiv justify-start items-center">
          <div className="flex flex-col justify-around gap-y-4">
            <h3 className="text-2xl text-center font-bold text-white">
              Select Time
            </h3>
            <div className="flex_center gap-x-2 w-full flex-wrap gap-y-2">
              {timeSlots.map((timeSlot, index) => (
                <div
                  key={`time${index + 1}`}
                  className={`days ${timeSlot.color}`}
                  id={`time${index + 1}`}
                  onClick={() => {
                    const updatedLevels = timeSlots.map((div) =>
                    timeSlot.id === div.id
                      ? {
                          ...div,
                          selected: !div.selected,
                          color: div.selected ? "bg-[#183D3D]" : "bg-red-500",
                        }
                      : {
                          ...div,
                          selected: false, // Reset other levels to not selected
                          color: "bg-[#183D3D]",
                        }
                  );

                  setTimeSlots(updatedLevels);
                  const timeSelected =
                  studentSchedule.schedule.time === `${timeSlot.label}`
                    ? ""
                    : `${timeSlot.label}`;
                    setTime(timeSelected, `time${index + 1}`);
                  }}
                >
                  {timeSlot.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex_center " >
          <div
            className="flex_center  self-center relative top-10 max-[600px]:w-[15rem] w-[45rem] h-20 bg-blue-400 hover:bg-blue-400 transition-colors duration-500 text-center text-white text-3xl rounded-xl shadow-md shadow-blue-900 z-30"
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
                onClick={()=>{
                  if(userCompleted){
                    handleSubmitActiveStudent();
                  }else{
                    handleSubmitForTrial();
                  }
                }}
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
              {/* {username} */}
            </div>
            <div className="max-[500px]:text-sm text-lg mt-4 text font-sans">
              1234 5678 9012 3456
            </div>
            <div className="flex justify-between">
              <div className="max-[500px]:text-sm text-base mt-4 font-sans">
                {new Date("2023-09-02T15:30:00Z").toLocaleString()}
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg max-[500px]:text-sm"
                onClick={async () => {
                  const res = await axios
                    .post(
                      `${server}/active-user/order/${email}`,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                      }
                    )
                    .then((res) => {
                      console.log(res.data.url);
                      router.push(`${res.data.url}`);
                    });
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default isAuth(SelectLevel);
