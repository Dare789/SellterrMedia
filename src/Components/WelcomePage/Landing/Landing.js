import React from 'react';
import LandingPic from "./LandingPic.png";

function Landing() {
  return (
    <div>
     <div className="pb-20 lg:py-24 md:pb-0 bg-gray-100">
                <div className="p-7 py-9 md:flex lg:mx-14">
                    <div className="flex flex-col gap-3 lg:max-w-none lg:justify-center">
                    <h1 className="text-4xl text-black leading-9 lg:text-6xl font-extrabold">
                        Our  <span className="text-blue-500">Social Media Marketing</span> approach delivers a remarkable <span className="text-blue-500">ROI</span> {""}
                        by attracting customers to our clients.
                    </h1>
                    <h1 className="text-black text-xs font-light tracking-wide lg:max-w-6xl lg:text-2xl md:text-lg px-2">
                       Boost your online presence with our social media marketing agency. 
                       We create compelling campaigns that engage your target audience and drive results. 
                    </h1>
                    <div>
                      <a href="https://calendly.com/sellterrmedia" target="_blank" rel="noreferrer">
                           <button className="bg-gray-900 text-white font-extrabold w-36 rounded-xl p-3 text-lg">
                               Book A Call
                           </button>
                     </a>
                    </div>
                    </div>
                    <div className="sticky">
                    <img
                        src={LandingPic}
                        alt="Sellter"
                        className="mt-8 md:hidden scale-x-110 scale-y-150 lg:scale-x-150"
                    />
                    <img
                        src={LandingPic}
                        alt="Sellter"
                        className="hidden md:inline mt-12 mb-12 scale-y-150 scale-x-110"
                    />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Landing;