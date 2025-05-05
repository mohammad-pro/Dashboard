import React from "react";

export default function HeaderContectBox() {
  return (
    <div className="w-full flex justify-center">
      <div className="group border-2 border-neutral-500 flex flex-col justify-center items-center w-full h-40 cursor-pointer rounded-md hover:border-yellow-300 hover:text-yellow-300 transition-all duration-300  bg-black/50">
        <img src="/icon.png" className="w-10 h-10" alt="" />
        <h1 className="text-neutral-300 group-hover:text-yellow-300 mt-5">Example</h1>
      </div>
    </div>
  );
}
