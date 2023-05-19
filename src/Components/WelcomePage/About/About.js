import React from 'react';
import dashboard from "./dashboard.png";
import dash from "./dash.png";

const About = () => {
  return (
    <div className='mb-12 mt-5 lg:mt-12 lg:mx-16 lg:my-14 lg:mb-24'>
      <div className='my-5 mb-0 px-4'>
        <h1 className='text-sm md:text-lg leading-4 font-light text-center lg:px-5 lg:text-2xl'>
          At Sellterr Media, we are passionate about helping businesses succeed in the digital world.
          We are a social media marketing agency that specializes in building and designing captivating 
          websites for our clients. With our expertise and experience, we create online experiences 
          that engage, inspire, and convert. Our goal is to elevate your brand's online presence and 
          maximize your business growth through strategic social media campaigns and professional web design. 
          Whether you're a startup or an established company, 
          we are here to drive your success in the digital landscape.
        </h1>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row p-3 space-x-3 space-y-3 pt-6 mx-8'>
        <div className='p-5 shadow-2xl bg-blue-50 text-center rounded-sm'>
          <h1 className='text-lg md:text-lg lg:text-3xl p-1 font-bold'>Research & Strategy</h1>
          <h1 className='text-xs md:text-base lg:text-lg'>
            Crafting success through strategic research. Our agency takes a 
            data-driven approach to build 
            websites that align with your goals and captivate your audience.
          </h1>
        </div>
        <div className='p-5 shadow-2xl bg-blue-50 text-center rounded-sm'>
          <h1 className='text-lg md:text-lg lg:text-3xl p-1 font-bold'>Web Development</h1>
          <h1 className='text-xs md:text-base lg:text-lg'>
            Unleash your online potential with our expert developers. 
            We create fast, responsive, 
            and visually stunning websites that engage users and drive results.
          </h1>
        </div>
        <div className='p-5 shadow-2xl bg-blue-50 text-center rounded-sm'>
          <h1 className='text-lg md:text-lg lg:text-3xl p-1 font-bold'>Web Solutions</h1>
          <h1 className='text-xs md:text-base lg:text-lg'>
            Unlock the full power of your website with our comprehensive solutions. 
            From design to maintenance, we offer tailored solutions that enhance 
            your online presence and facilitate business growth.
          </h1>
        </div>
      </div>
      <div className='p-3 mx-5 my-5 shadow-2xl sm:my-5'>
        <img src={dashboard} alt="dashboardPic" />
      </div>
      <div className='p-3 mx-5 my-5 shadow-2xl sm:my-5'>
        <img src={dash} alt="dashboardPic" />
      </div>
    </div>
  )
}

export default About;
