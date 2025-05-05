import React from "react";
import Navbar from "./Navbar";
import Black from "./Black";
import HeaderContent from "./HeaderContent";
import AbountCompany from "./AbountCompany";
import AboutLogo from "./AboutLogo";

export default function Header() {
  return (
    <div>

      <div
        className="h-[130vh] sm:h-screen relative  bg-fixed bg-center bg-cover "
        style={{ backgroundImage: "url('/header1.jpg')" }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50  ">

          <h1 className="text-white text-4xl font-bold">

          </h1>
        </div>
        <HeaderContent/>
        <Navbar />
        <AbountCompany/>
        <AboutLogo/>
      </div>
    </div>
  );
}
