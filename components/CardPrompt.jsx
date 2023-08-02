"use client"
import {AiOutlineArrowRight} from "react-icons/ai";

const CardPrompt = (curElem) => {
  const data=[{
    title:"",
    description:""
  }]
  return (
    <>
      <div class="flex items-center justify-center card">
        <div class="w-80  h-64 flex flex-col justify-center items-center card_color rounded-lg shadow-lg p-6 border border-dashed border-gray-200">
          
          <p class="orange_gradient text-opacity-100 text-xl font-bold ">
           {curElem.description}
          </p>
          <div class="mt-4">
            <div class="w-44 desc relative left-[8rem]">
              <AiOutlineArrowRight className="w-16 h-8 text-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPrompt;
