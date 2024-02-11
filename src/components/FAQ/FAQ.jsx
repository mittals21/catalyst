import React from "react"
import FAQimage from "../../assets/Accordion-700x350-1.png"

const FAQ = () => {
  const questions = [
    {
      question: "What social media platforms do you specialize in?",
      answer:
        "We specialize in a wide range of platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Success metrics vary depending on the client's goals but may include metrics such as engagement rate, click-through rate, conversion rate, and return on ad spend (ROAS).",
    },
  ]
  return (
    <div id="faq" className="my-20 text-[#012b3a]">
      <div>
        <p className="text-center text-3xl md:text-4xl px-5 lg:text-5xl font-bold">
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex items-center mx-5 mt-5 overflow-x-hidden justify-center lg:gap-8">
        <div className="md:max-w-[45vw] flex flex-col gap-8">
          {questions?.map(q => (
            <div className="border-b mx-5 sm:mx-20 md:mx-0 pb-4 last:border-none border-b-[#012b3a]/30" key={q?.question}>
              <p className="font-bold text-xl lg:text-3xl text-[#007978]">{q?.question}</p>
              <p className="mt-2 text-sm lg:text-lg">{q?.answer}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img
            src={FAQimage}
            alt="faq"
            className="max-h-[45vh] lg:max-h-[55vh]"
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ
