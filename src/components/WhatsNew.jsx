import React from 'react'
import whatsNew1 from '../assets/images/whatsNew1.png'
import whatsNew2 from '../assets/images/whatsNew-2.png'
import whatsNew3 from '../assets/images/whatsNew-3.png'

export default function WhatsNew() {
  return (
    <div className="max-w-[950px] mx-auto flex flex-col md:flex-row gap-10 px-4 py-10">
      
    
      {/* Right Section: Large Image with Overlay */}
    
    
    <div className="w-full max-w-[350px]">
      <div className="relative w-full overflow-hidden ">
        <img
          src={whatsNew1}
          alt="Hero"
          className="w-full h-auto object-cover shadow-xl"
        />
      </div>
    </div>


    {/* Left Section: Product List */}
      <div className="flex-1 space-y-8">
        <div className="space-y-1">
          <p className="text-xs uppercase text-gray-500 font-roboto font-orange-900">About Ringgo Shop</p>
          <p className="text-2xl md:text-[42px] font-rozha text-custom-darkblue pt-4">Whats New?</p>
        </div>
    
        <div className="space-y-10 justify-between">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <img src={whatsNew1} alt="Brand" className="w-[90px] h-[90px] object-cover " />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-black leading-snug">
                Agnes gathered zebra-print crepe midi dress
              </p>
              <p className="text-xs text-gray-600">USD 49.99</p>
            </div>
          </div>
    
          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <img src={whatsNew2} alt="Brand" className="w-[90px] h-[90px] object-cover g" />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-black ">
                Off-the-shoulder metallic coupe printed silk-blend top
              </p>
              <p className="text-xs text-gray-600">USD 49.99</p>
            </div>
          </div>
    
          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <img src={whatsNew3} alt="Brand" className="w-[90px] h-[90px] object-cover " />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-black ">
                Open-back ruffled metallic striped taffeta top
              </p>
              <p className="text-xs text-gray-600">USD 49.99</p>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </div>
  )
}
