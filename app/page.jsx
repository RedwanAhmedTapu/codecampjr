// import Feed from "@components/Feed";
import CardPrompt from "@components/CardPrompt";
import Videofx from "@components/Videofx";
// import Video from "@components/Video";
// import { useRouter } from 'next/navigation';
// import ElectricLineDiv from "@components/ElectricLineDiv";
const Home = () => {
  // const router=useRouter();
  const data = [
    {
      description: "Why Choose CodeCamp Junior?",
    },
    {
      description: "Why Choose CodeCamp Junior?",
    },
    {
      description: "Why Choose CodeCamp Junior?",
    },
  ];
  return (
    <section className=" bg_color overflow-x-hidden   w-full flex flex-col object-cover items-center  h-[100rem] md:pt-10 ">
      <h1 className="head_text text-center text-white bg-black opacity-60">
        Discover & Share
      </h1>
      <br className="" />
      <br className="sm:hidden" />

      <div className="sign max-[750px]:top-44  min-[760px]:top-48 z-10">
        <span className="fast-flicker">
        <p className=" text-center max-[420px]:text-xl">
        Codecamp-Powered Site
      </p>
          <br />
        </span>
        <span className="flicker"></span>
      </div>

     
      <br className="" />
      <input
        type="text"
        className="input relative min-[900px]:hidden max-[900px]:top-[2rem] max-[420px]:w-72  w-96 px-4 py-2 bg-black rounded-md shadow-sm border border-gray-800 focus:ring-indigo-500 focus:border-indigo-500 z-10"
        placeholder="Search..."
      />
      <br className="" />
      <br className="" />
      <br className="sm:hidden" />
      <div className="relative -top-[2rem] min-[1000px]:-top-[10rem]">
      <Videofx className=" "/>
      </div>
     
      <p className=" max-[430px]:flex max-[430px]:flex-wrap bg-none opacity-80 text-white text-center max-[420px]:p-3 max-[430px]:m-10">
        At CodeCamp Junior, we believe in empowering the next generation with
        the essential skills of the digital age. Our mission is to introduce
        children aged 7 to 14 to the exciting world of coding and computer
        science, providing them with a solid foundation for their future
        success.
      </p>
     
      <br className="" />

      <br className="" />
      <br className="" />
      
      {/* <ElectricLineDiv/> */}
      <div className="  max-[430px]:w-[10rem]  w-full flex flex-col lg:flex lg:flex-row justify-evenly items-center box-border gap-y-10">
        {data.map((curData, key) => {
          return <CardPrompt {...curData} key={key} />;
        })}
      </div>
      {/* <Video/> */}
     
    </section>
  );
};

export default Home;
