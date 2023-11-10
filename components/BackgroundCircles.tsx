import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 " />
      <div className="absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52 " />
      <div className="absolute border border-[#0077be] rounded-full w-[650px] h-[650px] mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 " />
    </div>
  );
}

export default BackgroundCircles;
