"use client";

import React from "react";
import { useState, useEffect } from "react";
import "../styles/bootstrap.min.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import isAuth from "./IsAuth";

const AdminDashboard = () => {
  const [learnerData, setLearnerData] = useState([]);
  const [trialStudent, setTotalTrialStudent] = useState(null);
  const [activeStudent, setTotalActiveStudent] = useState(null);
 
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());

  const server=process.env.SERVER_URL;


  const router = useRouter();

  useEffect(() => {
    const fetchLearnerInfo = async () => {
      try {
        const response = await axios.get(`${server}/learner-data`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setLearnerData(response.data);
        const totalTrialStudent = response.data.reduce((acc, cur) => {
          return acc + (cur.active ? 0 : 1);
        }, 0);
        const totalActiveStudent = response.data.reduce((acc, cur) => {
          return acc + (cur.active ? 1 : 0);
        }, 0);
        setTotalTrialStudent(totalTrialStudent);
        setTotalActiveStudent(totalActiveStudent);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLearnerInfo();

    // Cleanup function to cancel the request if component unmounts
    return () => {
      // You can cancel the request if needed
    };
  }, []);

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const calendar = [];

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDate =
        day === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth();

      calendar.push(
        <div
          key={day}
          className={`cursor-pointer p-2 hover:rounded-lg hover:flex_center hover:bg-white hover:text-black ${
            isCurrentDate
              ? "bg-blue-500 text-white hover:text-black flex_center font-bold rounded-full"
              : ""
          }`}
          onClick={() =>
            console.log(
              `Clicked on ${
                months[currentDate.getMonth()]
              } ${day}, ${currentDate.getFullYear()}`
            )
          }
        >
          {day}
        </div>
      );
    }

    return calendar;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  return (
    <>
      <div className=" w-full  container relative flex p-0">
        {/* <div id="spinner" className="show bg-dark fixed translate-middle w-100 h-100 top-1/2 left-1/2 flex items-center justify-center">
            <div className="spinner-border text-[#16b9eb]" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

        <div className="sidebar pe-4 pb-3 hidden">
          <nav className="navbar bg-secondary navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-[#16b9eb]">
                <i className="fa fa-user-edit me-2"></i>CodecampJr.
              </h3>
            </a>
            <div className="flex items-center ms-4 mb-4">
              <div className="relative">
                <Image
                  className="rounded-circle w-16 h-16"
                  src="/assets/images/Black Modern Hackathon Instagram Post (15).png"
                  alt=""
                  width={300}
                  height={300}
                />
                <div className="bg-success rounded-circle border-2 border-white absolute bottom-0 end-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Redwan Ahmed</h6>
                <span>Admin</span>
              </div>
            </div>
            <div className="navbar-nav w-100">
              <a href="index.html" className="nav-item nav-link active">
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle">
                  <i className="fa fa-laptop me-2"></i>Elements
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="button.html" className="dropdown-item">
                    Buttons
                  </a>
                  <a href="typography.html" className="dropdown-item">
                    Typography
                  </a>
                  <a href="element.html" className="dropdown-item">
                    Other Elements
                  </a>
                </div>
              </div>
              <a href="widget.html" className="nav-item nav-link">
                <i className="fa fa-th me-2"></i>Widgets
              </a>
              <a href="form.html" className="nav-item nav-link">
                <i className="fa fa-keyboard me-2"></i>Forms
              </a>
              <a href="table.html" className="nav-item nav-link">
                <i className="fa fa-table me-2"></i>Tables
              </a>
              <a href="chart.html" className="nav-item nav-link">
                <i className="fa fa-chart-bar me-2"></i>Charts
              </a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle">
                  <i className="far fa-file-alt me-2"></i>Pages
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="signin.html" className="dropdown-item">
                    Sign In
                  </a>
                  <a href="signup.html" className="dropdown-item">
                    Sign Up
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Error
                  </a>
                  <a href="blank.html" className="dropdown-item">
                    Blank Page
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* <div className="w-full h-16 ">
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0 h-full">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-[#16b9eb] mb-0">
              <i className="fa fa-user-edit"></i>
            </h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars"></i>
          </a>
          <form className="d-none d-md-flex ms-4">
            <input
              className="form-control bg-dark border-0"
              type="search"
              placeholder="Search"
            />
          </form>
        </nav>
      </div> */}

      <div className="w-full h-64 flex gap-x-4  relative  pt-10 px-4 -z-10">
        <div className="w-1/2 h-full bg-secondary  flex flex-col justify-center items-center gap-y-4 rounded-sm">
          <p className="mb-2 text-xl max-[430px]:text-[1rem]">
            Total trial student
          </p>
          <h6 className="mb-0 text-xl  max-[430px]:text-[1rem]">
            {trialStudent}
          </h6>
        </div>
        <div className="w-1/2 h-full bg-secondary  flex flex-col justify-center items-center gap-y-4 rounded-sm">
          <p className="mb-2 text-xl  max-[430px]:text-[1rem]">
            Total active student
          </p>
          <h6 className="mb-0 text-xl  max-[430px]:text-[1rem]">
            {activeStudent}
          </h6>
        </div>
      </div>

      <div className="w-full h-64 flex gap-x-4  relative  pt-10 px-4 -z-10">
        <div className="w-1/2 h-full bg-secondary  flex flex-col justify-center items-center gap-y-4 rounded-sm overflow-auto"></div>
        <div className="w-1/2 h-full bg-secondary  flex flex-col justify-center items-center gap-y-4 rounded-sm"></div>
      </div>

      <div className="container-fluid pt-4 px-4">
        <div className="bg-secondary text-center rounded p-4">
          <div className="flex_center mb-4">
            <h6 className="mb-0 text-3xl text-blue-700">Running student</h6>
            {/* <a href="">Show All</a> */}
          </div>
          <div className="table-responsive">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-2">Name</th>
                  <th className="p-2">phone</th>
                  <th className="p-2">Level</th>
                  <th className="p-2">schedule</th>
                </tr>
              </thead>
              <tbody className="overflow-auto">
                {learnerData.map(
                  (item) =>
                    item.active && (
                      <tr key={item.id} className="border-b">
                        <td className="p-2 uppercase">{item.learnerName}</td>
                        <td className="p-2">{item.phone}</td>
                        <td className="p-2">{item.level}</td>
                        <td className="p-2 flex flex-col gap-y-1">
                          <span className="uppercase">
                            {item.schedule.days[0]}
                          </span>
                          <span className="uppercase">
                            {item.schedule.days[1]}
                          </span>
                        </td>
                        {/* <td className="p-2">
                      <a
                        className=" text-slate-500 hover:text-cyan-300"
                        href="#"
                      >
                        Detail
                      </a>
                    </td> */}
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex items-center justify-center mb-2">
                <h6 className="mb-0">Trial Class registered Student</h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto "
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center  py-3"
                    >
                      {/* <Image
                        className="rounded-full"
                        src="../public/assets/images/bitmap_Layer 1_copy_3.png"
                        alt=""
                        width={30}
                        height={30}
                      /> */}

                      <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                        <div className="flex flex-col gap-y-1 items-center justify-between">
                          <h6 className="text-[1rem] uppercase">
                            {item.learnerName}
                          </h6>
                          <h6 className="text-[1rem]">{item.phone}</h6>
                          <h6 className="text-[1rem]">{item.learnerEmail}</h6>
                          <div className="w-full h-12 flex justify-evenly items-center">
                            <button
                              className="w-24 h-8 bg-blue-600 text-white rounded-sm text-uppercase"
                              onClick={() => {
                                router.push(
                                  `/select-level?userEmail=${item.learnerEmail}`
                                );
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="w-24 h-8 bg-gradient-to-r from-red-500 to-red-800 text-white rounded-sm text-uppercase"
                              onClick={async () => {
                                try {
                                  const res = await axios.delete(
                                    `${server}/learner-delete/${item.learnerEmail}`,
                                    {
                                      headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`
                                      }
                                    }
                                  );
                                  alert(res.data.message);
                                } catch (error) {
                                  console.log(error);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* trial class booked student  */}
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-A
                </span>
                <h6 className="mb-0">Trial Class booked Student </h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto"
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.booked === true &&
                      item.level === "level-A" && (
                        <div
                          key={item._id}
                          className="flex items-center justify-center py-3"
                        >
                          {/* Your content here */}
                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            <div className="flex flex-col gap-y-1 items-center justify-between">
                              <h6 className="text-[1rem] uppercase">
                                {item.learnerName}
                              </h6>
                              <h6 className="text-[1rem]">{item.phone}</h6>
                              <h6 className="text-[1rem]">
                                {item.learnerEmail}
                              </h6>
                              <h6 className="text-[1rem] gap-x-2">
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[0]}
                                </span>
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[1]}
                                </span>
                              </h6>
                              <div className="w-full h-12 flex justify-evenly items-center">
                                <button
                                  className="w-24 h-8 bg-blue-600 text-white rounded-sm text-uppercase"
                                  onClick={async () => {
                                    try {
                                      const res = await axios.put(
                                        `${server}/learner-update/${item.learnerEmail}`,{
                                          headers: {
                                            Authorization: `Bearer ${localStorage.getItem('token')}`
                                          }
                                        }
                                      );
                                      alert(res.data.message);
                                    } catch (error) {
                                      console.log(error);
                                    }
                                  }}
                                >
                                  complete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-B
                </span>
                <h6 className="mb-0">Trial Class booked Student </h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto"
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.booked === true &&
                      item.level === "level-B" && (
                        <div
                          key={item._id}
                          className="flex items-center justify-center py-3"
                        >
                          {/* Your content here */}
                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            <div className="flex flex-col gap-y-1 items-center justify-between">
                              <h6 className="text-[1rem] uppercase">
                                {item.learnerName}
                              </h6>
                              <h6 className="text-[1rem]">{item.phone}</h6>
                              <h6 className="text-[1rem]">
                                {item.learnerEmail}
                              </h6>
                              <h6 className="text-[1rem] gap-x-2">
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[0]}
                                </span>
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[1]}
                                </span>
                              </h6>
                              <div className="w-full h-12 flex justify-evenly items-center">
                                <button
                                  className="w-24 h-8 bg-blue-600 text-white rounded-sm text-uppercase"
                                  onClick={async () => {
                                    try {
                                      const res = await axios.put(
                                        `${server}/learner-update/${item.learnerEmail}`,{
                                          headers: {
                                            Authorization: `Bearer ${localStorage.getItem('token')}`
                                          }
                                        }
                                      );
                                      alert(res.data.message);
                                    } catch (error) {
                                      console.log(error);
                                    }
                                  }}
                                >
                                  complete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-C
                </span>
                <h6 className="mb-0">Trial Class booked Student </h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto"
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.booked === true &&
                      item.level === "level-C" && (
                        <div
                          key={item._id}
                          className="flex items-center justify-center py-3"
                        >
                          {/* Your content here */}
                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            <div className="flex flex-col gap-y-1 items-center justify-between">
                              <h6 className="text-[1rem] uppercase">
                                {item.learnerName}
                              </h6>
                              <h6 className="text-[1rem]">{item.phone}</h6>
                              <h6 className="text-[1rem]">
                                {item.learnerEmail}
                              </h6>
                              <h6 className="text-[1rem] gap-x-2">
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[0]}
                                </span>
                                <span className="text-blue-600 uppercase">
                                  {" "}
                                  {item.schedule.days[1]}
                                </span>
                              </h6>
                              <div className="w-full h-12 flex justify-evenly items-center">
                                <button
                                  className="w-24 h-8 bg-blue-600 text-white rounded-sm text-uppercase"
                                  onClick={async () => {
                                    try {
                                      const res = await axios.put(
                                        `${server}/learner-update/${item.learnerEmail}`,{
                                          headers: {
                                            Authorization: `Bearer ${localStorage.getItem('token')}`
                                          }
                                        }
                                      );
                                      alert(res.data.message);
                                    } catch (error) {
                                      console.log(error);
                                    }
                                  }}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>

          {/* trial class completed student  */}
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-A
                </span>

                <h6 className="mb-0">Trial Class completed Student</h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto "
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.completed === true &&
                      item.level === "level-A" && (
                        <div
                          key={item}
                          className="flex items-center justify-center  py-3"
                        >
                          {/* <Image
                        className="rounded-full"
                        src="../public/assets/images/bitmap_Layer 1_copy_3.png"
                        alt=""
                        width={30}
                        height={30}
                      /> */}

                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            {item.completed === true && (
                              <div className="flex flex-col gap-y-1 items-center justify-between">
                                <h6 className="text-[1rem] uppercase">
                                  {item.learnerName}
                                </h6>
                                <h6 className="text-[1rem]">{item.phone}</h6>
                                <h6 className="text-[1rem]">
                                  {item.learnerEmail}
                                </h6>
                                <div className="w-full h-12 flex justify-evenly items-center">
                                  <button
                                    className="w-32 h-12 bg-blue-600 text-white rounded-sm shadow-lg text-uppercase"
                                    onClick={() => {
                                      router.push(
                                        `/select-level?userEmail=${item.learnerEmail}&userCompletion=true`
                                      );
                                    }}
                                  >
                                    make active
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-B
                </span>

                <h6 className="mb-0">Trial Class completed Student</h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto "
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.completed === true &&
                      item.level === "level-B" && (
                        <div
                          key={item}
                          className="flex items-center justify-center  py-3"
                        >
                          {/* <Image
                        className="rounded-full"
                        src="../public/assets/images/bitmap_Layer 1_copy_3.png"
                        alt=""
                        width={30}
                        height={30}
                      /> */}

                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            {item.completed === true && (
                              <div className="flex flex-col gap-y-1 items-center justify-between">
                                <h6 className="text-[1rem] uppercase">
                                  {item.learnerName}
                                </h6>
                                <h6 className="text-[1rem]">{item.phone}</h6>
                                <h6 className="text-[1rem]">
                                  {item.learnerEmail}
                                </h6>
                                <div className="w-full h-12 flex justify-evenly items-center">
                                  <button
                                    className="w-32 h-12 bg-blue-600 text-white rounded-sm shadow-lg text-uppercase"
                                    onClick={() => {
                                      router.push(
                                        `/select-level?userEmail=${item.learnerEmail}&userCompletion=true`
                                      );
                                    }}
                                  >
                                    make active
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 xl:col-span-1">
            <div className="h-[30rem] bg-secondary rounded p-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center mb-2">
                <span className="text-2xl text-blue-500 uppercase">
                  Level-C
                </span>

                <h6 className="mb-0">Trial Class completed Student</h6>
              </div>
              <div
                className="w-full h-[80%] overflow-auto "
                style={{ WebkitScrollbar: { display: "none" } }}
              >
                {learnerData &&
                  learnerData.map(
                    (item) =>
                      item.completed === true &&
                      item.level === "level-C" && (
                        <div
                          key={item}
                          className="flex items-center justify-center  py-3"
                        >
                          {/* <Image
                        className="rounded-full"
                        src="../public/assets/images/bitmap_Layer 1_copy_3.png"
                        alt=""
                        width={30}
                        height={30}
                      /> */}

                          <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-2">
                            {item.completed === true && (
                              <div className="flex flex-col gap-y-1 items-center justify-between">
                                <h6 className="text-[1rem] uppercase">
                                  {item.learnerName}
                                </h6>
                                <h6 className="text-[1rem]">{item.phone}</h6>
                                <h6 className="text-[1rem]">
                                  {item.learnerEmail}
                                </h6>
                                <div className="w-full h-12 flex justify-evenly items-center">
                                  <button
                                    className="w-32 h-12 bg-blue-600 text-white rounded-sm shadow-lg text-uppercase"
                                    onClick={() => {
                                      router.push(
                                        `/select-level?userEmail=${item.learnerEmail}&userCompletion=true`
                                      );
                                    }}
                                  >
                                    make active
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="col-span-1 sm:col-span-1 xl:col-span-1">
            <div className="h-full bg-secondary rounded p-4">
              <div className="flex items-center justify-between mb-4">
                <h6 className="mb-0">Calendar</h6>
                <a href="">Show All</a>
              </div>

              <div className="container mx-auto mt-8 p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={goToPreviousMonth}
                    className="text-blue-500 text-2xl "
                  >
                    {"<"}
                  </button>
                  <h2 className="text-lg font-bold">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={goToNextMonth}
                    className="text-blue-500 text-2xl"
                  >
                    {">"}
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center font-bold">
                      {day}
                    </div>
                  ))}
                  {generateCalendar()}
                </div>
              </div>
            </div>
          </div>

          {/* To Do List */}
          <div className="col-span-1 sm:col-span-1 xl:col-span-1">
            <div className="h-full bg-secondary rounded p-4">
              <div className="flex items-center justify-between mb-4">
                <h6 className="mb-0">To Do List</h6>
                <a href="">Show All</a>
              </div>

              <div className="flex mb-2">
                <input
                  className="form-input bg-dark border-0"
                  type="text"
                  placeholder="Enter task"
                />
                <button type="button" className="btn btn-[#16b9eb] ms-2">
                  Add
                </button>
              </div>

              {/* To Do Items */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-center border-b py-2">
                  <input className="form-checkbox m-0" type="checkbox" />
                  <div className="w-3/4 ms-3">
                    <div className="flex items-center justify-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary rounded-t relative top-4 p-4">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 text-center sm:text-sm-start mb-2 sm:mb-0">
            &copy; <a href="#">CodecampJr.</a>, All Right Reserved.
          </div>
          <div className="flex-1 text-center sm:text-sm-end">
            we are <a href="https://htmlcodex.com">united</a>
            <br />
            Distributed By:{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              codecampJr.
            </a>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-[#16b9eb] btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default isAuth(AdminDashboard);
