"use client"
import {AiOutlineArrowRight} from "react-icons/ai";

const CardPrompt = (curElem) => {
  const data=[{
    title:"",
    description:""
  }]
  return (
    <>
      <div className="flex items-center justify-center card">
        <div className="w-80  h-64 flex flex-col justify-center items-center card_color rounded-lg shadow-lg p-6 border border-dashed border-gray-200">
          
          <p className="orange_gradient text-opacity-100 text-xl font-bold ">
           {curElem.description}
          </p>
          <div className="mt-4">
            <div className="w-44 desc relative left-[8rem]">
              <AiOutlineArrowRight className="w-16 h-8 text-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPrompt;
