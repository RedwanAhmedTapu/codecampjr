"use client";
import { ImSpinner9 } from "react-icons/im";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import GlobeInnerRay from "./GlobeInnerRay";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = user;
      console.log(email,password);
      if (email.trim() === "" || password.trim() === "") {
        alert("please fill all the data");
      } else {
        const res = await axios
          .post("http://localhost:5000/user/login", user)
          .then((res) => {
                  // alert(res.data.message);

            if (res.data === "not any user") {
              alert("wrong password and email");
            } else {
              if (res.data.token) {
                console.log(res.data.token);
                axios.defaults.headers.common[
                  "Authorization"
                ] = ` ${res.data.token}`;
                // setToken(true);
                if (email === "admin@gmail.com") {
                  router.push("/adminDashboard");
                } else {
                  let userEmail;
                  router.push(`/select-level?userEmail=${email}`);
                }
              } else {
                delete axios.defaults.headers.common["Authorization"];
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.error("Failed to login :", error);
    }
  };
  return (
    <div className="flex_center bg-slate-800 dark:bg-black h-screen">
      <div className=" w-[50rem] flex flex-col    h-full max-[560px]:p-6 min-[849px]:p-10 p-20 bg-slate-800 dark:bg-[#030303] blur-1  rounded-lg shadow-md gap-y-6 max-[648px]:relative fixed top-10 ">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl flex justify-start items-center gap-x-2 text-white font-bold">
            <ImSpinner9 />
            CodecampJr.
          </h1>
          <h1 className="flex flex-col gap-y-2">
            <p className="text-white text-2xl font-bold">Welcome back</p>
            <p className="text-slate-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              doloremque esse nam.
            </p>
          </h1>
        </div>
        <div className="flex justify-between  w-full gap-x-4">
          <div className="flex flex-col gap-y-1 w-[50%]">
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              name="email"
              id="email"
              className="w-full h-12 border-2 border-gray-900  text-black  bg-slate-300  rounded-lg placeholder-black min-[560px]:placeholder:pl-10 placholder:pl-4"
              value={user && user.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-[50%]">
            <label className="text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="°°°°°°°"
              id="password"
              className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 border-1 rounded-lg  placeholder-text-center placeholder-black placeholder:pl-10"
              value={user && user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex_center gap-2">
          <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
          <p className="text-white text-2xl font-semibold">or</p>
          <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex_center w-full h-12 gap-x-2 border-2 border-slate-300 rounded-lg">
            <p className="text-white text-2xl flex_center">
              <FcGoogle />
              &nbsp;Sign In With Google
            </p>
          </div>
          <div className="flex_center w-full h-12 gap-x-2 border-2 border-slate-300 rounded-lg">
            <p className="text-white text-2xl flex_center">
              <AiFillApple />
              &nbsp;Sign In With Apple
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex_center gap-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-lg bg-slate-500"
            />
            <p className="text-white">Remember me</p>
          </div>
          <div className="text-blue-600">Forgot password?</div>
        </div>
        <div
          className=" max-w-full w-full h-12 flex_center bg-blue-700 rounded-lg text-white text-xl font-semibold"
          onClick={handleSubmit}
        >
          Sign in to your account
        </div>

      </div>
    </div>
  );
};

export default Login;
