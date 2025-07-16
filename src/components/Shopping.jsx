import React from 'react'

import { Helmet } from 'react-helmet';
import man from "../assets/images/man.png"
import women from "../assets/images/women.png"

export default function Shopping() {
  return (
    <>
 <section id="about-ringgo" className="w-full py-16 px-4">
      <Helmet>
        <title>Ringgo Shop – Trendy Fashion for Men and Women</title>
        <meta
          name="description"
          content="Discover the latest styles at Ringgo Shop. Fashion for men and women, curated with a modern aesthetic and premium quality."
        />
      </Helmet>

      <div className="relative max-w-[980px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 overflow-visible bg-custom-darkblue px-6 md:px-10 rounded-lg">
        
        {/* Image Section */}
        <div className="flex flex-col items-center gap-10 w-full md:w-1/2">
          {/* Top Image */}
          <figure className="relative w-[250px] md:w-[300px] rounded-lg overflow-hidden -top-10">
            <img
              src={man}
              alt="Male fashion model wearing a denim jacket"
              className="w-full shadow-xl rounded-lg"
            />
            <figcaption>
              <button
                aria-label="Explore Men's Collection"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-4 py-2  shadow-md hover:bg-gray-100  font-roboto"
              >
                Explore Men's
              </button>
            </figcaption>
          </figure>

          {/* Bottom Image */}
          <figure className="relative w-[250px] md:w-[300px] -mb-10">
            <img
              src={women}
              alt="Female fashion model in a modern outfit"
              className="w-full shadow-xl rounded-lg"
            />
            <figcaption>
              <button
                aria-label="Explore Women's Collection"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-4 py-2  shadow-md hover:bg-gray-100 font-roboto"
              >
                Explore Women's
              </button>
            </figcaption>
          </figure>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 mt-6 md:mt-0">
          <h3 className="text-xs font-roboto uppercase tracking-wide lg:text-[12px]">
            About Ringgo Shop
          </h3>

          <h2 className="text-3xl md:text-5xl font-rozha leading-snug">
            Be the first to <br /> know about new <br /> styles
          </h2>

          <p className="text-xs md:text-sm font-roboto leading-relaxed max-w-md mx-auto md:mx-0 lg:pr-12 lg:text-[10px]">
            We believe that people should have access to the latest brands and fashion trends, no matter their postcode. This is why our collection of men’s and women’s clothing is designed to speak to every person who lives for the good times, regardless of location.
          </p>

          {/* Stat Boxes */}
          <div className="flex gap-5 mt-6 justify-center md:justify-start">
            {/* Women */}
            <div className="flex flex-col items-center justify-center border border-white w-24 h-28 px-3 py-2">
              <p className="text-[28px] font-bold text-white">50</p>
              <p className="text-sm text-white font-roboto mt-2 text-center">Women</p>
            </div>

            {/* Man */}
            <div className="flex flex-col items-center justify-center bg-custom-light w-24 h-28 px-3 py-2">
              <p className="text-[28px] font-bold text-custom-darkblue">72</p>
              <p className="text-sm text-custom-darkblue font-roboto mt-2 text-center">Man</p>
            </div>

            {/* New Arrival */}
            <div className="flex flex-col items-center justify-center border border-white w-24 h-28 px-3 py-2">
              <p className="text-[28px] font-bold text-white">10</p>
              <p className="text-sm text-white font-roboto mt-2 text-center">New Arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>









    </>
  )
}
