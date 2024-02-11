import React, { useEffect } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Link as ScrollLink } from "react-scroll"

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setMenuOpen])

  const navElements = [
    { title: "Home", route: "home" },
    { title: "About Us", route: "about" },
    { title: "Our Work", route: "work" },
  ]

  const scrollToFunction = (route) => {
    const targetElement = document.getElementById(route)

    if (targetElement) {
      const yOffset =
        route === "home"
          ? -400
          : route === "about"
          ? -300
          : route === "signup"
          ? -290
          : route === "work"
          ? -230
          : -310
      const y =
        targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* NAVBAR AFTER 1024px */}
      <div className="hidden z-10 sticky top-0 lg:flex justify-between bg-white border-b border-[#012b3a]/25 text-[#012b3a] text-sm font-semibold items-center px-20 xl:px-40 py-2">
        <div className="flex items-center gap-28">
          <div className="logo">
            <p className="text-4xl font-bold font-mono">Catalyst</p>
          </div>
          <div className="flex gap-7">
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
          </div>
        </div>
        <div className="flex items-center gap-7">
          <ScrollLink smooth={true} duration={500} to={"signup"}>
            <button className="hover:text-[#007978] transition-all duration-150">
              Get Started
            </button>
          </ScrollLink>
          <ScrollLink smooth={true} duration={500} to={"contact"}>
            <button className="bg-[#012b3a] hover:bg-[#007978] transition-all duration-150 text-white px-5 py-3">
              Book Appointment
            </button>
          </ScrollLink>
        </div>
      </div>

      {/* NAVBAR BEFORE 1024px */}
      <div className="lg:hidden z-10 flex sticky top-0 justify-between items-center border-b border-[#012b3a]/25 text-[#012b3a] text-sm font-semibold bg-white py-2 px-5 md:px-10 ">
        <div className="logo">
          <p className="text-2xl md:text-3xl font-bold font-mono">Catalyst</p>
        </div>
        {!menuOpen ? (
          <MdMenu size={25} onClick={() => setMenuOpen(!menuOpen)} />
        ) : (
          <MdClose size={25} onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>

      {/* RESPONSIVE NAVBAR CONTENTS */}
      <div
        className={`flex z-10 sticky top-[48.83px] md:top-[52.83px] pb-3 bg-white lg:hidden flex-col gap-3 overflow-hidden ${
          menuOpen ? "h-full px-5 transition-all" : "h-0 transition-all hidden"
        }`}
        style={{
          maxHeight: menuOpen ? "1000px" : "0",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        <div className="flex flex-col gap-5">
          {navElements?.map((ne) => (
            <div>
              <p
                onClick={() => {
                  scrollToFunction(ne?.route)
                  setMenuOpen(false)
                }}
                className={`hover:text-[#007978] ${
                  ne?.title !== "Our Work" && "border-b"
                } border-[#012b3a]/25 pb-1 px-2 ${
                  ne?.title === "Home" && "pt-5"
                } cursor-pointer transition-all duration-150`}
              >
                {ne?.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          {/* <ScrollLink smooth={true} duration={500} to={"signup"}> */}
          <button
            onClick={() => {
              scrollToFunction("signup")
              setMenuOpen(false)
            }}
            className="hover:text-[#007978] underline underline-offset-2 transition-all duration-150"
          >
            Get Started
          </button>
          {/* </ScrollLink> */}
          {/* <ScrollLink smooth={true} duration={500} to={"contact"}> */}
          <button
            onClick={() => {
              scrollToFunction("contact")
              setMenuOpen(false)
            }}
            className="bg-[#012b3a] mx-3 hover:bg-[#007978] transition-all duration-150 text-white px-5 py-3"
          >
            Book Appointment
          </button>
          {/* </ScrollLink> */}
        </div>
      </div>
    </>
  )
}

export default Navbar
