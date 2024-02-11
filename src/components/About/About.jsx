import React from "react"
import brand1 from "../../assets/Rectangle_129__1_.png"
import brand2 from "../../assets/Rectangle_130__1_.png"
import brand3 from "../../assets/Rectangle_132.webp"
import brand4 from "../../assets/Rectangle_133.webp"

const About = () => {
  const aboutPointers = [
    {
      main: "Customized Strategies",
      desc: "Tailored solutions designed to achieve your business objectives.",
    },
    {
      main: "Data-Driven Approach",
      desc: "Harnessing analytics to optimize performance and drive ROI.",
    },
    {
      main: "Creative Excellence",
      desc: "Compelling content that captivates audiences and inspires action.",
    },
  ]

  return (
    <div id="about" className="pt-10 lg:pt-[100px] px-5 text-[#012b3a]">
      <div>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          What can Catalyst do for you?
        </p>
      </div>
      <div className="flex flex-wrap gap-y-7 gap-x-7 my-10 lg:my-20 text-center justify-evenly">
        {aboutPointers?.map((ap) => (
          <div>
            <p className="text-xl md:text-3xl text-[#007978] font-bold">
              {ap?.main}
            </p>
            <p className="mt-2">{ap?.desc}</p>
          </div>
        ))}
      </div>
      <div className="md:text-xl md:px-28 lg:px-52 text-center">
        <p className="tracking-wide font-semibold">
          At{" "}
          <span className="font-bold underline text-[#007978] underline-offset-2">
            Catalyst
          </span>
          , we're passionate about leveraging the power of social media to help
          businesses thrive. Our mission is to deliver exceptional results
          through innovative strategies and personalized solutions tailored to
          each client's unique needs.{" "}
          <span className="hidden lg:inline">
            With a team of seasoned professionals, we combine creativity,
            data-driven insights, and cutting-edge technology to drive
            engagement, build brand awareness, and drive revenue growth.
          </span>
        </p>
      </div>
      <div>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-20">100+ Brands trust Catalyst</p>
        <div className="flex items-center gap-5 justify-evenly mt-10 flex-wrap">
          <img src={brand1} alt="brands" className="h-14" />
          <img src={brand2} alt="brands" className="h-14" />
          <img src={brand3} alt="brands" className="h-14" />
          <img src={brand4} alt="brands" className="h-14" />
        </div>
      </div>
    </div>
  )
}

export default About
