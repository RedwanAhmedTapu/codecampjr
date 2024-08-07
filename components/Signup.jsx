"use client";
import { useState,useMemo } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

const Signup = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  // const [code, setCode] = useState("");
  // const [isOtp, setIsOtp] = useState(false);

  const server=process.env.SERVER_URL;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      const { fname, lname, email, password } = user;
      if (
        fname.trim() === "" ||
        lname.trim() === "" ||
        email.trim() === "" ||
        password.trim() === ""
      ) {
        alert("please fill all the data");
      } else {
        const res = await fetch(
          `${server}/user/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fname, lname, email, password }),
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.message === "user registered successfully") {
              router.push("/login");
            } else {
              alert(data.message);
            }
          });
      }
    } catch {
      console.log("error");
    }
  };

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   // const numericValue = value.replace(/\D/g, '');
  //   setCode(value.trim());
  // };

  // const handleSendOtp = async () => {
  //   const { fname, lname, email, password } = user;

  //   const res = await fetch(
  //     "https://codecampjrbackend.onrender.com/verify-email",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, code }),
  //     }
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       if (data.message === "Email verified successfully") {
  //         router.push("/login");
  //       } else {
  //         alert(data.message);
  //         router.push("/signup");
  //       }
  //     });
  // };

  // const handleVerificationAuth = async (otpData, userEmail) => {
  //   const { email } = user;
  //   console.log("codecamp", `${userEmail + otpData}`);
  //   try {
  //     const res = await fetch(
  //       "https://codecampjrbackend.onrender.com/auth/googleAuth-verfication",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ userEmail, otpData }),
  //       }
  //     );

  //     const data = await res.json();

  //     if (data.message === "Email verified successfully" || data.message==="Invalid verification code") {
  //       router.push(`/select-level?userEmail=${userEmail}`);
  //     } else {
  //       router.push("/signup");
  //     }
  //   } catch (error) {
  //     console.error("Error during email verification:", error);
  //   }
  // };

  const handleAuthuser = async (userData) => {
    const { fname, lname, email } = user;

    try {
      const res = await fetch(
        `${server}/auth/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      // console.log(data);
      if ((data.message==="User already exists")||(data.message==="user registered successfully")) {
         router.push(`/user-dashboard?userEmail=${email}`);
       
        // await handleVerificationAuth(data.message, userData.email);
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  const memoizedComponent = useMemo(() => (
    <>
      <div
        className={`flex_center relative top-10 dark:bg-black   
        `}
      >
        <div className=" w-[50rem] flex flex-col self-center  h-full max-[560px]:p-6 min-[849px]:p-10 p-20 bg-slate-800 dark:bg-[#030303] blur-1  rounded-lg shadow-md gap-y-6 relative  top-10">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-xl flex justify-start items-center gap-x-2 text-white font-bold">
              <ImSpinner9 />
              CodecampJr.
            </h1>
            <h1 className="flex flex-col gap-y-2">
              <p className="text-white text-2xl font-bold">Welcome back</p>
              <p className="text-slate-50 text-2xl max-[600px]:text-xl">
                Unlock Your Coding Potential with CodeCampJR! Sign Up Today and
                Let the Coding Adventures Begin 🚀
              </p>
            </h1>
          </div>
          <form>
          <div className="flex justify-between w-full gap-x-4">
            <div className="flex flex-col gap-y-1 w-[50%]">
              
              <label className="text-white">First Name</label>
              <input
                type="text"
                placeholder="your first name"
                name="fname"
                id="fname"
                className="w-full h-12 border-2 border-gray-900  text-black  bg-slate-300  rounded-lg placeholder-black min-[560px]:placeholder:pl-10 placholder:pl-4"
                value={user && user.fname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 w-[50%]">
              <label className="text-white">Last Name</label>
              <input
                type="text"
                placeholder="your last name"
                name="lname"
                id="lname"
                className="w-full h-12 border-2 border-gray-900  text-black  bg-slate-300  rounded-lg placeholder-black min-[560px]:placeholder:pl-10 placholder:pl-4"
                value={user && user.lname}
                onChange={handleChange}
              />
            </div>
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
                placeholder="°°°°°°°"
                name="password"
                id="password"
                className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 border-1 rounded-lg  placeholder-text-center placeholder-black placeholder:pl-10"
                value={user && user.password}
                onChange={handleChange}
              />
            </div>
            
          </div>
          </form>
          <div className="flex_center gap-2">
            <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
            <p className="text-white text-2xl font-semibold">or</p>
            <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
          </div>
          {/* <div className="flex flex-col gap-y-8">
            <div className="flex_center w-full h-10 gap-x-2 border-2 border-slate-300 rounded-lg">
              <GoogleOAuthProvider clientId="652975357008-sut0t0e8g66jbjaqbnouk0im5ofi3a5o.apps.googleusercontent.com">
                <div className="w-full h-full flex_center bg-white rounded-lg">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      var decoded = jwt_decode(credentialResponse.credential);

                      console.log(decoded);
                      const { family_name, given_name, name, email } = decoded;
                      const fname = family_name;
                      const lname = given_name;

                      handleAuthuser({ fname, lname, email });
                localStorage.setItem("loggedUser", JSON.stringify({ email, fname, lname }));

                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    logo_alignment="center"
                    text="continue_with"
                    type="standard"
                    className="w-full h-full"
                    useOneTap="true"
                    select_account
                  />
                  
                </div>
              </GoogleOAuthProvider>
            </div>
            <div className="flex_center w-full h-12 gap-x-2 border-2 border-slate-300 rounded-lg">
              <p className="text-white text-2xl flex_center">
                <AiFillApple />
                &nbsp;Sign In With Apple
              </p>
            </div>
          </div> */}
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
            Sign up
          </div>
        </div>
      </div>
      {/* {isOtp && (
        <div className="w-full h-full flex_center mt-20">
          <div className=" bg-slate-900 rounded-lg">
            <div className="max-w-md mx-auto p-4  rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center text-white">
                Enter OTP within 5 minutes
              </h2>
              <CountdownTimer />

              <input
                type="text"
                className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter OTP"
                value={code}
                onChange={handleInputChange}
              />
              <button
                className="mt-4 px-4 py-2 self-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSendOtp}
              >
                Send OTP for email verification
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
      ), [user]);

      return memoizedComponent;
    };
  

export default Signup;
