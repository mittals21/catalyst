import React from "react"
import contactImg from "../../assets/karsten-winegeart-60GsdOMRFGc-unsplash.jpg"

const Contac = () => {
  const cardStyle = {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div id="contact" className="py-16">
      <div>
        <p className="text-center text-3xl md:text-4xl mb-10 lg:text-5xl font-bold">
          Book Your First Appointment Now!!!
        </p>
      </div>
      <div className="flex">
        <div className="bg-[#143059] text-white hidden lg:flex items-center w-[60%]">
          <div className="mx-10 flex flex-col justify-around h-1/2">
            <p className="text-2xl xl:text-3xl tracking-wide font-bold">Do more in less time with Catalyst</p>
            <p className="xl:text-xl">
              Generate captions and posts in seconds! Catalyst makes content
              creation seriously easy for busy social pros like you.
            </p>
          </div>
          <img src={contactImg} className="lg:max-h-[45vh] mx-10" alt="" />
        </div>
        <div
          style={cardStyle}
          className="bg-white w-full mx-5 lg:mx-0 lg:w-[40%] md:mt-0 rounded-md border-[1px] border-gray-200"
        >
          <div className="mx-20 flex flex-col gap-5 w-[90%] mt-10 lg:w-[80%]">
            {/* <div className="flex flex-col md:flex-row md:mx-5  gap-y-2 items-center justify-center gap-x-6 mt-6 "> */}
            <input
              id="name"
              className="w-full rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
              placeholder="Your Name"
              type="text"
            />

            <input
              id="email"
              className="w-full rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
              placeholder="Your Email"
              type="email"
              required
            />
            {/* </div> */}
            {/* <div className="flex w-full mt-6 "> */}
            <input
              id="name"
              className=" w-full rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
              placeholder="Subject"
              type="text"
            />
            {/* </div> */}
            {/* <div className="flex w-full mt-6 "> */}
            <textarea
              id="name"
              className=" w-full rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
              placeholder="Message"
              type="text"
            />
            {/* </div> */}

            <div className="flex w-full gap-y-2 items-center justify-center gap-x-6 mt-6 mb-10 ">
              <button
                type="submit"
                className="bg-[#d70029] hover:bg-transparent hover:text-[#d70029]  hover:border-[#d70029] border-[1px] duration-500 text-white rounded-md px-10 py-2.5 font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contac
