"use client";
// import { CiSettings } from "react-icons/ci";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Typewriter from "typewriter-effect";
import { AiOutlineDown } from "react-icons/ai";

const CodeEditor = () => {
  // t=codeText for html
  const div = `
 <div
`;
  const equal = `=`;
  const classy = `class`;
  const innerClass = `"rect"`;
  const divend = `
 ></div>
`;

  // codeText for Css
  const rect = `.rect`;
  const curlystart = ` {`;
  const background = `background`;
  const colon = `:`;
  const gradient = `linear-gradient`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const comma = `,`;
  const gray = `$gray`;
  const dark_gray = `$dark-gray`;
  const gradientFirstParameter = `224deg`;
  const gradientMiddleParameter = `10%`;
  const gradientLastParameter = `100%`;

  // codeText for JS
  const fncn = `function`;
  const cdcmp = `cdcmp`;
  const cnsl = `console`;
  const log = `log`;
  const info = `"codecampJR."`;
  console.log("tapu");
  return (
    <>
      <div className="codeContainerDiv mt-20">
        <div className="codeItemDiv relative -top-6 left-16 p-2">
          <div className="flex justify-around text-white gap-14">
            <div className=" flex justify-start items-center gap-x-4 text-white">
              <SettingsOutlinedIcon className="w-4 h-4 bg-gray-600 bg-clip-text" />
              <h3 className="text-white font-semibold">Html</h3>
            </div>
            <AiOutlineDown className="w-4 h-4 bg-slate-50 bg-clip-text" />
          </div>

          <div className="">
            <span className="text-yellow-600">{div}</span>
            <span className="text-yellow-900">{classy}</span>
            <span className="text-white">{equal}</span>
            <span className="text-green-900">{innerClass}</span>
            <span className="text-yellow-600">{divend}</span>
          </div>
        </div>
        <div className="codeItemDiv relative -top-4 max-[1230px]:-left-8 left-36 p-2">
          <div className="flex justify-around text-white gap-14">
            <div className=" flex justify-start items-center gap-x-4 text-white">
              <SettingsOutlinedIcon className="w-4 h-4 bg-gray-600 bg-clip-text" />
              <h3 className="text-white font-semibold">Scss</h3>
            </div>
            <AiOutlineDown className="w-4 h-4 bg-slate-50 bg-clip-text" />
          </div>
          <div className="gap-0">
            <span className="text-yellow-600">{rect} </span>&nbsp;&nbsp;
            <span className="text-white">{curlystart}</span>
            <br />
            <span className="text-violet-300 ">{background}</span>
            <span className="text-white font-semibold">{colon}</span>&nbsp;
            <span className="text-yellow-600">{gradient}</span>
            <span className="text-white font-semibold">{parenthesisStart}</span>
            <br />
            <span className="text-orange-700">{gradientFirstParameter}</span>
            <span className="text-white font-semibold">{comma}</span>
            <br />
            <span className="text-yellow-600">{gray}</span>&nbsp;{" "}
            <span className="text-orange-700">{gradientMiddleParameter}</span>
            <span className="text-white font-semibold">{comma}</span>
            <br />
            <span className="text-yellow-600">{dark_gray}</span>&nbsp;{" "}
            <span className="text-orange-700">{gradientLastParameter}</span>{" "}
            <span className="text-white font-semibold">{parenthesisEnd}</span>
            <span className="text-white font-semibold">;</span>
            <span className="text-yellow-600 relative -top-[1.5rem] left-44">
              <Typewriter
                options={{
                  strings: [""],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        <div className="codeItemDiv relative -top-2 left-6 p-2">
          <div className="flex justify-around text-white gap-14">
            <div className=" flex justify-start items-center gap-x-4 text-white">
              <SettingsOutlinedIcon className="w-4 h-4 bg-gray-600 bg-clip-text" />
              <h3 className="text-white font-semibold">Js</h3>
            </div>
            <AiOutlineDown className="w-4 h-4 bg-slate-50 bg-clip-text" />
          </div>
          <span className="text-yellow-600">{fncn}</span>{" "}
          <span className="text-white font-semibold">{parenthesisStart}</span>{" "}
          <span className="text-white font-semibold">{parenthesisEnd}</span>
          &nbsp;&nbsp;
          <span className="text-white font-semibold">{curlystart}</span>
          <br />
          <span className="text-violet-300 font-semibold">{cnsl}</span>
          <span className="text-white font-semibold">{"."}</span>
          <span className="text-green-700 font-semibold">{log}</span>
          <span className="text-white font-semibold">{parenthesisStart}</span>
          <span className="text-yellow-600 font-semibold">{`"`}</span>
          <span className="text-cyan-900 font-semibold">{cdcmp}</span>
          <span className="text-yellow-600 font-semibold">{`"`}</span>
          <span className="text-white font-semibold">{parenthesisEnd}</span>
          <span className="text-white font-semibold">{";"}</span>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
