import React from 'react'
import heroImage from "../assets/images/hero.png";
import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 mt-10">
  <div className="max-w-[950px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left Side: Text Area */}
    <div className="flex flex-col gap-5 max-w-[550px] w-full text-center md:text-left">

      {/* Welcome Text */}
      <h4 className="text-sm md:text-base text-gray-600 font-roboto font-semibold">
        Hey, Welcome to Ringgo Shop!
      </h4>

      {/* Main Heading */}
      <h1 className="font-rozha text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] text-custom-maincolor leading-snug">
        Look elegant? Start <br className="hidden sm:block" /> with your mind
      </h1>

      {/* Founder Info */}
      <div className="flex justify-center mt-2">
  <div className="flex flex-col items-center font-roboto">
    <h3 className="text-base font-bold">Al Amin</h3>
    <span className="text-sm text-gray-500 font-light">Founder</span>
  </div>
</div>


      {/* Description */}
      <p className="text-sm md:text-base text-gray-700 font-roboto leading-relaxed max-w-[450px] mx-auto md:mx-0">
        We believe that people should have access to the latest brands and fashion trends, no matter their post code.
      </p>

      {/* Button */}
      <div className="mt-5">
        <button className="bg-custom-maincolor text-white px-6 py-2 hover:bg-opacity-90 transition w-[180px] flex items-center justify-center gap-2 mx-auto md:mx-0">
          Explore More <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>

    {/* Right Side: Image Section */}
    <div className="relative w-full max-w-[400px]">
      <img src={heroImage} alt="Hero" className="w-full h-auto  shadow-lg" />

      {/* Info Overlay */}
      <div className="absolute bottom-0 w-full bg-custom-maincolor text-white px-5 py-4 ">
        <p className="text-lg font-rozha leading-tight">New - Tinder Light Wash</p>
        <p className="text-lg font-rozha leading-tight">Denim Jacket</p>
        <p className="text-sm text-gray-200 mt-1 font-roboto">USD 49.99</p>
      </div>
    </div>

  </div>
</div>


    )
}
