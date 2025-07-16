import React from 'react'

export default function GiveWay() {
  return (
    <>
    <div className="w-full bg-white py-12 px-4">
  <div className="max-w-[700px] mx-auto text-center space-y-6">
    
    {/* Heading */}
    <div>
      <p className="text-[42px]   text-gray-800 font-rozha">
        Special offers and free giveaways?
      </p>
    </div>

    {/* Subscribe Form */}
    <div>
      <form className="flex w-full max-w-[400px] mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[70%] px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-custom-maincolor"
          required
        />
        <button
          type="submit"
          className="w-[30%] bg-custom-maincolor text-white px-4 py-3  hover:bg-opacity-90 transition text-sm font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
    
  </div>
</div>

    </>
  )
}
