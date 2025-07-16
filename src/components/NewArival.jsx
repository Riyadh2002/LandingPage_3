import React from 'react'
import newArivalMan from "../assets/images/newArivalMan.png"
import women1 from "../assets/images/women.png"
import women2 from "../assets/images/newArivalwomen.png"
import women3 from "../assets/images/newArivalwomen2.png"
  import { FaArrowRight } from "react-icons/fa";

export default function NewArival() {
    return (
       <div className="max-w-[950px] mx-auto flex flex-col md:flex-row gap-10 px-4 py-10">
  {/* Left Section: Product List */}
  <div className="flex-1 space-y-8">
    <div className="space-y-1">
      <p className="text-xs uppercase text-gray-500 font-roboto">About Ringgo Shop</p>
      <p className="text-2xl md:text-[42px] font-rozha text-custom-darkblue pt-4">New Arrival</p>
    </div>

    <div className="space-y-6">
      {/* Item 1 */}
      <div className="flex items-center gap-4">
        <img src={women1} alt="Brand" className="w-[90px] h-[90px] object-cover rounded-lg" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-black leading-snug">
            Agnes gathered zebra-print crepe midi dress
          </p>
          <p className="text-xs text-gray-600">USD 49.99</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-4">
        <img src={women2} alt="Brand" className="w-[90px] h-[90px] object-cover rounded-lg" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-black leading-snug">
            Off-the-shoulder metallic coupe printed silk-blend top
          </p>
          <p className="text-xs text-gray-600">USD 49.99</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center gap-4">
        <img src={women3} alt="Brand" className="w-[90px] h-[90px] object-cover rounded-lg" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-black leading-snug">
            Open-back ruffled metallic striped taffeta top
          </p>
          <p className="text-xs text-gray-600">USD 49.99</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Large Image with Overlay */}


<div className="w-full max-w-[400px]">
  <div className="relative w-full overflow-hidden rounded-lg">
    <img
      src={newArivalMan}
      alt="Hero"
      className="w-full h-auto object-cover shadow-xl rounded-lg"
    />
  </div>
</div>



</div>


    )
}
