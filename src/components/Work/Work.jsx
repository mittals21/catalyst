import React from "react"
import clientX from "../../assets/AdvancedAnalytics-ForLakeBG_2x.png"
import clientY from "../../assets/CaseStudy-Colliers-600x600_2x.webp"

const Work = () => {
  return (
    <div id="work" className="pt-[100px] text-[#012b3a]">
      <div>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Explore some of our most successful campaigns and projects.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row items-center overflow-x-hidden py-5 justify-center gap-8 lg:gap-10 bg-[#007978] text-white">
          <div className="tracking-wider lg:py-5 px-5 sm:px-10 md:px-20 lg:px-0 lg:max-w-[45vw]">
            <span className="text-xl md:text-3xl font-extrabold">
              Brand Awareness Campaign for
            </span>
            <span className="text-xl underline underline-offset-2 ml-2 md:text-3xl font-bold tracking-wide">
              Client X
            </span>
            <p className="md:text-lg tracking-wider mt-5">
              Leveraging targeted ads and influencer partnerships, we helped
              Client X increase brand visibility by 40% within six months.
            </p>
            <button className="border transition-all duration-150 ease-linear border-white px-5 font-semibold tracking-wide md:text-lg hover:bg-white/25 py-3 mt-5">
              Learn More
            </button>
          </div>
          <div className="">
            <img
              src={clientX}
              alt="heroimage"
              className="max-h-[40vh] md:max-h-[45vh] lg:max-h-[50vh]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center overflow-x-hidden py-5 justify-center gap-8 lg:gap-10 bg-white text-[#012b3a]">
          <div className="">
            <img
              src={clientY}
              alt="heroimage"
              className="max-h-[40vh] md:max-h-[45vh] lg:max-h-[50vh]"
            />
          </div>
          <div className="tracking-wider lg:py-5 px-5 sm:px-10 md:px-20 lg:px-0 lg:max-w-[45vw]">
            <span className="text-xl md:text-3xl font-extrabold">
              Product Launch for
            </span>
            <span className="text-xl underline underline-offset-2 ml-2 md:text-3xl font-bold tracking-wide">
              Client Y
            </span>
            <p className="md:text-lg tracking-wider mt-5">
              By developing a multi-channel marketing strategy, we generated
              buzz around Client Y's new product, resulting in a 30% increase in
              sales during the launch phase.
            </p>
            <button className="border border-[#012b3a] px-5 font-semibold tracking-wide md:text-lg hover:bg-slate-500/25 transition-all duration-150 ease-linear py-3 mt-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
