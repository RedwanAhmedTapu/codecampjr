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
    img:"/assets/images/light.webp",
    text:"lorem"
  }]
  return (
    <div className="    w-full  h-[35rem] bg-[#100f0f] flex flex-wrap justify-center items-center rounded-md shadow-md  relative gap-10">
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
        <p className="inner_text">Card title</p>
      </div>
        </>)
      })
    }
     
    </div>
  );
};

export default Card;
