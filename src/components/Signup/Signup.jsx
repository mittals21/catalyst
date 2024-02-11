import React from "react"
import signupImg from "../../assets/Rectangle_118__3_.webp"

const Signup = () => {
  return (
    <div
      id="signup"
      className="flex bg-[#004963] flex-col lg:flex-row items-center overflow-x-hidden py-10 md:py-12 lg:py-20 justify-center gap-8 lg:gap-10"
    >
      <div className="">
        <img
          src={signupImg}
          alt="heroimage"
          className="max-h-[40vh] lg:max-h-[70vh]"
        />
      </div>
      <div className="tracking-wide lg:py-5 mx-5 px-10 md:px-0 md:text-center font-extrabold space-y-5 md:max-w-[50vw]">
        <p className="text-2xl md:text-3xl lg:text-4xl text-white">
          Put social media to work for your business
        </p>
        <div className="flex flex-col gap-3 lg:mx-20">
          <input
            type="text"
            className="p-3 text-sm"
            placeholder="Enter your Email"
          />
          <input
            type="password"
            className="p-3 text-sm"
            placeholder="Enter your Password"
          />
          {/* <div className="flex justify-center"> */}
            <button className="bg-[#87f8ae] tracking-wide px-6 py-3 text-[#004963]">
              Sign Up
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Signup
