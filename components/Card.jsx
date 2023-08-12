"use client";
import Image from "next/image";
const Card = () => {
  const data=[{
    img:"/assets/images/chokka.webp",
    text:"lorem"
  },{
    img:"/assets/images/graduation.avif",
    text:"lorem"
  },{
    img:"/assets/images/goldenwire.jpeg",
    text:"lorem"
  }]
  return (
    <div className="    w-full max-[1300px]:h-[50rem]  h-[30rem] bg-[#000000] flex flex-wrap justify-center items-center rounded-md shadow-md    gap-10">
    {
      data.map((curElem,index)=>{
        return(<>
          <div className="inner_div">
        <Image
          src={curElem.img}
          width={300}
          height={300}
          className="inner_image"
        />
        <p className="inner_text">{curElem.text}</p>
      </div>
        </>)
      })
    }
     
    </div>
  );
};

export default Card;
