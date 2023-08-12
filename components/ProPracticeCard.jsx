"use client";
import CheckIcon from "@mui/icons-material/Check";
const data = [
  {
    heading: "Unlimited practice",
    speed: "2x",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    heading: "Ad-free experience",
    speed: "+110%",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    heading: "Habbit formation",
    speed: "92%",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];
const ProPracticeCard = () => {
  return (
    <div className="flex_center flex-col gap-y-20 bg-[#000] w-screen max-[1235]:h-[70rem]vh-[60rem]">
      <div className="flex_center pt-16 max-[450px]:flex-wrap">
        <h1 className="text-white max-[449px]:text-3xl max-[636px]:text-4xl text-6xl ">Invest Yourself with</h1>
        <div className="bg-yellow-300 max-[449px]:text-3xl text-4xl text-orange-900 w-32 h-14 rounded-full flex_center">
          PRO
        </div>
      </div>
      <div className="flex_center max-[1260px]:flex-wrap gap-4 ">
        {data.map((curElem, index) => {
          return (
            <>
              <div className="max-[449px]:w-[20rem] w-[25rem] h-72 flex flex-col gap-y-8 pl-14 pt-6  border-2 border-slate-600 rounded-lg">
                <h1 className="text-white text-4xl">{curElem.heading}</h1>
                <p className="text-orange-300 text-5xl font-bold">{curElem.speed}</p>
                <p className="text-slate-100 text-xl">{curElem.text}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex_center flex-col gap-y-8">
        <div className="flex_center font-semibold max-[800px]:flex-col">
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
        </div>
        <div className="flex_center font-semibold max-[800px]:flex-col">
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
          <p className="flex gap-x-2 text-orange-400 text-2xl">
            <span className="">
              <CheckIcon />
            </span>
            Unlimited practice
          </p>
        </div>
      </div>
      <div className="flex_center max-[450px]:flex-wrap max-[450px]:text-xl text-2xl text-white font-bold rounded-md max-[450px]:w-[15rem] max-[700px]:w-[20rem] w-[35rem] h-20 bg-orange-500">
        Start Learning Like a Pro
      </div>
    </div>
  );
};

export default ProPracticeCard;
