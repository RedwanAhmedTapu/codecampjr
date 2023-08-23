import Svg from "./Svg";
import { GiCometSpark, GiBrain } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
const BlinkingCard = () => {
  const data = [
    {
      icon: "",
      name: "React",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "",
      name: "Python",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "",
      name: "Css",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <>
      {/* <div className="blinking_div w-[200px] h-[200px] bg-[#181818] shadow-lg shadow-slate-700 overflow-hidden rounded-xl relative  "></div> */}
      <div className="grid grid-rows-2 w-full max-[900px]:h-full h-screen px-20 py-10 max-[900px]:px-4 place-items-center">
        <div className="">
          <div className="IcDiv w-48 h-16 flex_center bg-[#474242] rounded-lg shadow-md inset-4 relative ">
            <div className="connector_span  left-[1.6rem] "></div>
            <div className="connector_span left-[3.2rem]"></div>
            <div className="connector_span left-[4.8rem]"></div>
            <div className="connector_span left-[6.4rem]"></div>
            <div className="connector_span left-[8rem]"></div>
            <div className="connector_span left-[9.6rem]"></div>
            <div className="connector_span top-[4rem] rotate-180  left-[1.6rem] "></div>
            <div className="connector_span top-[4rem] rotate-180 left-[3.2rem]"></div>
            <div className="connector_span top-[4rem] rotate-180 left-[4.8rem]"></div>
            <div className="connector_span top-[4rem] rotate-180 left-[6.4rem]"></div>
            <div className="connector_span top-[4rem] rotate-180 left-[8rem]"></div>
            <div className="connector_span top-[4rem] rotate-180 left-[9.6rem]"></div>
            <div className="connector_span top-4 -left-2 rotate-[270deg]"></div>
            <div className="connector_span top-10 -left-2 rotate-[270deg]"></div>
            <div className="connector_span top-4 -right-2 rotate-90"></div>
            <div className="connector_span top-10 -right-2 rotate-90"></div>
            <div className=""></div>
            {/* <div className=" w-44 h- bg[#010101] absolute top-4 left-4 right-4 flex_center"><p className="connector_span_text bg-clip-text text-transparent text-2xl font-bold text-center">Powered By</p></div> */}
            <div className="svgs relative">
              <svg className="svgs max-[900px]:w-[300px]  ">
                <path d="M360 300 L360,100" stroke="#333" />
                <path d="M387 300 L387,80" stroke="#333" />
                <path d="M410 300 L410,160" stroke="#333" />
                <path
                  d="M435 300 L435,160 L500,160"
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M460 300 L460,180 L790,180 V390"
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M500 250 H740 V390 "
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M15 377 L15,250 L500,250"
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M60 345 L60,273 L300,273"
                  stroke="#333"
                  fill="none"
                  stroke-linejoin="round"
                />
                <g>
                  <path
                    d="M332 320 L332,300   "
                    stroke="#333"
                    fill="none"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M332 320 H100 v60   "
                    stroke="#333"
                    fill="none"
                    stroke-linejoin="round"
                  />
                </g>
                <path d="M360 300 v76" stroke="#333" />
                <path d="M385 300 v35" stroke="#333" />
                <path d="M410 300 v50" stroke="#333" />
                <path d="M435 300 v35 H535" stroke="#333" fill="none" />
                <path d="M460 300 v15 H532" stroke="#333" fill="none" />
                <path
                  d="M500 273 H599 v90 H438 v13 "
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M335 240 V185 H260"
                  stroke="#333"
                  fill="none"
                  stroke-linecap="round"
                />
                {/* circle */}
                <circle
                  cx="260"
                  cy="185"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="360"
                  cy="103"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="387"
                  cy="80"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="410"
                  cy="160"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="500"
                  cy="160"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="536"
                  cy="315"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="536"
                  cy="335"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="60"
                  cy="340"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="410"
                  cy="345"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>
                <circle
                  cx="385"
                  cy="335"
                  fill="#333"
                  r="4"
                  stroke="black"
                  stroke-opacity="0.8"
                  opacity="8"
                ></circle>

                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="cyanGradient"
                    x1="125.34102159345639"
                    y1="288.3444097235042"
                    x2="118.66262702035601"
                    y2="377.4340305263104"
                  >
                    <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
                    <stop offset="0.05" stop-color="#2EB9DF"></stop>
                    <stop
                      offset="8"
                      stop-color="#2EB9DF"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="orangeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#FFA500" />
                    <stop offset="100%" stop-color="#FF4500" />
                  </linearGradient>

                  <linearGradient
                    id="greenGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="green" />
                    <stop offset="100%" stop-color="lightgreen" />
                  </linearGradient>
                </defs>
                <path
                  className="pathDownpin2"
                  d="M360,300 L358,450 "
                  fill="none"
                  stroke="url(#orangeGradient)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  className="pathDownpin1"
                  d="M100,320 L98,380  "
                  fill="none"
                  stroke="url(#cyanGradient)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                {/* <path
                className="pathDownpin1Horizontal"
                  d="M100,320 L95,319 H333  "
                  fill="none"
                  stroke="url(#strokeGradient)"
                  stroke-width="3"
                 
                /> */}
                <rect
                  x="30"
                  y="320"
                  width="50"
                  height="3"
                  fill="url(#cyanGradient)"
                  stroke-linecap="round"
                >
                  <animate
                    attributeType="XML"
                    attributeName="x"
                    from="100"
                    to="290"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="10"
                  y="250"
                  width="50"
                  height="3"
                  fill="url(#cyanGradient)"
                  filter="url(#shadow)"
                  stroke-linecap="round"
                >
                  <animate
                    attributeType="XML"
                    attributeName="x"
                    from="10"
                    to="290"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex max-[900px]:flex-col w-full gap-4 relative max-[1400px]:top-[0.2rem] max-[1100px]:top-[2.8rem] -top-[2.5rem]  max-[900px]:-top-[52%] z-10">
          <div className="powerOuterDiv powerdiv1 border-2 ">
            <div className=" text-blue-600">
              <GiCometSpark className="w-24 h-16 " />
            </div>
            <div className="text-2xl font-bold bg-gradient-radial from-cyan-300 to-yellow-50 bg-clip-text text-transparent mt-8">
              Spark Your Learning Journey
            </div>
            <div className="text-gray-400 mt-8">
              Embarking on a learning journey in the world of coding is like
              striking a match to light a fire of endless possibilities.
            </div>
          </div>
          <div className="powerOuterDiv powerdiv2 border-2  box-border">
            <div className="text-amber-600 ">
              <BsLightningCharge className="w-24 h-16" />
            </div>
            <div className="text-2xl font-bold bg-gradient-radial from-amber-600 to-yellow-50 bg-clip-text text-transparent mt-4">
              Fuel Your Curiosity
            </div>
            <div className="text-gray-400 mt-12">
              Embrace the thrill of curiosity as you dive into complex problems,
              chase intriguing concepts, and tinker with technologies that pique
              your interest.
            </div>
          </div>
          <div className="powerOuterDiv powerdiv3 border-2 gap-10  box-border">
            <div className="text-green-600">
              <GiBrain className="w-24 h-16" />
            </div>
            <div className="text-2xl font-bold bg-gradient-radial from-green-600 to-yellow-50 bg-clip-text text-transparent mt-4">
              Nurture Your Intellect
            </div>
            <div className=" text-gray-400 mt-8">
              Remember, the intellect is a dynamic entity, capable of adapting
              to the ever-evolving landscape of technology. By nurturing it
              empower yourself to reach new heights of coding prowess.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlinkingCard;
