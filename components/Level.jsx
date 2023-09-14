import Image from "next/image";
const Level = () => {
  return (
    <>
      <div className=" w-screen h-screen flex max-[1000px]:flex-col max-[1000px]:h-full ">
        {/* <h2 className="head_text text-3xl text-center">Our Classes</h2>
        <h2 className="head_text text-5xl text-center">
          Explores our wide range of live classes
        </h2> */}

        <div className="w-full h-full flex_center  ">
          <Image
            src="assets/images/Black Modern Hackathon Instagram Post (9).png"
            className="max-[500px]:w-[22rem] max-[500px]:h-[22rem]  max-[1249px]:w-[30rem] max-[1249px]:h-[30rem] w-[43rem] h-[43rem] "
            width={300}
            height={300}
          />
        </div>
        <div className="w-full h-full flex_center   flex-col  ">
          <div
            className="w-full h-1/2 gap-x-2 flex_center max-[1200px]:p-12 max-[600px]:flex-col"
          >
            <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black  rounded-lg  w-[18rem] h-[20.5rem] flex flex-col border-[0.001rem] border-slate-600 -translate-y-8">
              <div className="w-[80%] h-[70%] flex_center self-center overflow-auto">
                <Image
                  src="assets/images/Black Modern Hackathon Instagram Post (15).png"
                  className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col w-full h-1/2 gap-y-2  text-xl text-start">
                <h2 className="text-xl text-white pl-4">Level-A</h2>
                <h2 className="text-xl text-slate-600 pl-4">For 6-9years</h2>
                <p className="text-xl text-amber-700 pl-4 flex gap-x-2">
                  Get Started
                  <span className=" text-xl text-amber-700">→</span>
                </p>
              </div>
            </div>
            <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg  w-[18rem] h-[20.5rem] flex flex-col border-[0.001rem] border-slate-600 translate-y-12">
              <div className="max-[1200px]:w-[50%] max-[1200px]:h-[40%] w-[60%] h-[50%] self-center  overflow-auto">
                <Image
                  src="assets/images/Black Modern Hackathon Instagram Post (16) (1).png"
                  className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col w-full h-1/2 gap-y-2  text-xl justify-end pb-4 -translate-y-12">
                <h2 className="text-xl text-white pl-4">Level-B</h2>
                <h2 className="text-xl text-slate-600 pl-4">For 10-16years</h2>
                <p className="text-xl text-amber-700 pl-4 flex gap-x-2">
                  Get Started
                  <span className=" text-xl text-amber-700">→</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full h-1/2 gap-x-2 flex_center max-[600px]:flex max-[600px]:flex-col  max-[1200px]:p-12 ">
            <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black  rounded-lg  w-[18rem] h-[20.5rem] flex flex-col border-[0.001rem] border-slate-600 -translate-y-8">
              <div className="w-[50%] h-[40%] flex_center self-center overflow-auto">
                <Image
                  src="assets/images/Black Modern Hackathon Instagram Post (18).png"
                  className="w-[100%] h-[100%]  "
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col w-full h-1/2 gap-y-2  text-xl justify-end">
                <h2 className="text-xl text-white pl-4">Level-C</h2>
                <h2 className="text-xl text-slate-600 pl-4">For 17-18+years</h2>
                <p className="text-xl text-amber-700 pl-4 flex gap-x-2">
                  Get Started
                  <span className=" text-xl text-amber-700">→</span>
                </p>
              </div>
            </div>
            <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg  w-[18rem] h-[20.5rem] flex flex-col justify-between border-[0.001rem] border-slate-600 translate-y-12 p-8">
              <div className="head_text text-2xl max-[600px]:text-xl">
                Book a FREE class to start your jouney
              </div>

              <a
                href="#"
                className="  rounded-lg bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800  p-0.5 [animation-duration:_6s] bg-gradient-to-r dark:bg-gray-800"
              >
                <span className="block rounded-md bg-white px-5 py-3 max-[600px]:text-[0.3rem]  max-[600px]:text-xl text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
                  Get Started{" "}
                  <span className=" text-2xl text-slate-50 max-[600px]:text-xl">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Level;
