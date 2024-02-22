"use client";
import Image from "next/image";
const Card = () => {
  const data = [
    {
      img: "/assets/images/Black Modern Hackathon Instagram Post (15).png",
      text: "Begin coding, little explorer",
    },
    {
      img: "/assets/images/Black Modern Hackathon Instagram Post (16) (1).png",
      text: "Middle coder, endless horizons",
    },
    {
      img: "/assets/images/Black Modern Hackathon Instagram Post (18).png",
      text: "Pro coder, master architect.",
    },
  ];
  return (
    <div className="    w-full h-full p-4 bg-white dark:bg-[#000000] flex flex-wrap justify-center items-center rounded-md    gap-10">
      {data.map((curElem, index) => {
        return (
          <>
            <div className="inner_div" key={index}>
              <Image
                src={curElem.img}
                width={300}
                height={300}
                alt="card-img"
                className="inner_image"
              />
              <p className="inner_text ">{curElem.text}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
