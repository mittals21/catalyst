import React from "react"
import { FaStar } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"

const Testimonials = () => {
  return (
    <div id="testi" className="grid mt-32 justify-center overflow-x-hidden">
      <div>
        <p className="text-center text-[#012b3a] px-5 text-3xl md:text-4xl lg:text-5xl font-bold">
          What our customers are saying about us
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-10 md:my-20 mx-8 sm:mx-10 lg:mx-32 xl:mx-40 gap-10">
        <div className="flex flex-col h-full gap-3 bg-[#012b3a] text-white p-5 md:p-10 shadow-md shadow-[#012b3a]">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm italic">Oct 25, 2023</p>
          </div>
          <p className="mt-2 font-semibold">
            "Working with Catalyst has been a game-changer for our business.
            Their strategic approach and attention to detail have significantly
            boosted our online presence."
          </p>
          <div className="flex items-center gap-14 mt-8">
            <FaUserCircle size={100} />
            <p className="text-sm md:text-base">
              John Smith, <br /> CEO of Company A
            </p>
          </div>
        </div>
        <div className="flex flex-col h-full gap-3 bg-[#007978] text-white p-5 md:p-10 shadow-md shadow-[#007978]">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm italic">Oct 25, 2023</p>
          </div>
          <p className="mt-2 font-semibold">
            "Impressive results and exceptional service! Catalyst exceeded our
            expectations and delivered tangible results that positively impacted
            our bottom line."
          </p>
          <div className="flex items-center gap-14 mt-8">
            <FaUserCircle size={100} />
            <p className="text-sm md:text-base">
              Jane Doe, <br /> Marketing Director at Company B
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
