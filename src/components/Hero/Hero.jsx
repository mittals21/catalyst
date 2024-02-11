import React from "react"
import HeroImg from "../../assets/Homepage-May23-Hero_2x.png"
import { Link as ScrollLink } from "react-scroll"

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center overflow-x-hidden pt-10 sm:pt-20 md:pt-0 justify-center gap-8 lg:gap-10"
    >
      <div className="hidden md:block">
        <img
          src={HeroImg}
          alt="heroimage"
          className="max-h-[50vh] lg:max-h-[70vh]"
        />
      </div>
      <div>
        <div className="tracking-wide px-10 md:px-0 md:text-center font-extrabold space-y-5 md:max-w-[50vw]">
          <p className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-[#012b3a]">
            Transforming Your Social Presence into Profits
          </p>
          <p className="leading-tight text-xl sm:text-3xl md:text-2xl lg:text-3xl  text-[#fe3e4a]">
            Welcome to Catalyst, where social media expertise meets business
            success.
          </p>
        </div>
        <div className="mt-7 flex px-10 flex-col sm:flex-row md:px-0 md:justify-center items-center gap-8">
          <ScrollLink smooth={true} duration={500} to={"signup"}>
            <button className="bg-[#012b3a] hover:bg-[#007978] transition-all duration-150 text-white px-5 py-3">
              Book Appointment
            </button>
          </ScrollLink>
          <ScrollLink smooth={true} duration={500} to={"contact"}>
            <button className="hover:text-[#007978] text-[#012b3a] underline underline-offset-2 transition-all duration-150">
              Get Started
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
