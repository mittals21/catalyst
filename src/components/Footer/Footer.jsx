import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import { Link as ScrollLink } from "react-scroll"

const Footer = () => {
  const navElements = [
    { title: "Home", route: "home" },
    { title: "About Us", route: "about" },
    { title: "Our Work", route: "work" },
  ]
  return (
    <div className="bg-[#f2f4f5] text-[#012b3a] p-10 md:p-20">
      {/* <div className="bg-[#f2f4f5] text-[#012b3a] text-[#007978] h-[50vh]"> */}
      <div className="logo">
        <p className="text-4xl font-bold font-mono">
          Catalyst <span className="text-2xl">&copy;2024</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <div>
          <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row mt-5 text-center gap-5">
            {navElements?.map((ne) => (
              <ScrollLink
                key={ne?.title}
                smooth={true}
                duration={500}
                to={ne.route}
              >
                <div>
                  <span className="hover:text-[#007978] cursor-pointer transition-all duration-150">
                    {ne?.title}
                  </span>
                </div>
              </ScrollLink>
            ))}
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Have Any Queries??"
                className="border p-5 border-[#012b3a] w-full"
              />
              <button className="bg-[#007978] px-10 text-white font-bold text-xl">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-10 justify-center items-center">
        <FaFacebook size={35} color="#2e80d1" />
        <FaInstagram size={35} color="#ff18c1" />
        <FaLinkedin size={35} color="#0080d1" />
      </div>
    </div>
  )
}

export default Footer
