import React from 'react';
import dashboard from "./dashboard.png";
import dash from "./dash.png";

const About = () => {
  return (
   <div className='mb-12 mt-12 lg:mx-16 lg:my-14 lg:mb-24'>
      <div className='my-5 mb-0 px-4'>
        <h1 className='text-xs md:text-lg leading-4 font-light text-center lg:px-5 lg:text-2xl'>
           Let us help you create a social media presence that engages with your 
           audience and generates results. At Sellterr Media we offer 
           customized strategies tailored to your unique business needs. 
           From content creation to analytics tracking, we take care of everything 
           so you can focus on running your business. Our team stays up to date on 
           the latest social media trends and algorithm changes to ensure your 
           campaigns are always at the forefront of digital marketing. Don't let 
           your competitors steal your online customers. Contact us today to learn 
           how our expertise can help you achieve your goals.
        </h1>
     </div>
     <div className='flex p-5 space-x-3 pt-6'>
      <div className='p-3 shadow-2xl bg-blue-50 text-center'>
        <h1 className='text-sm font-bold lg:text-3xl'>Web & App Dev</h1>
          <h1 className='leading-5 lg:leading-8 text-xs md:text-sm lg:text-lg'>
            Let help you build a custom website or app that aligns with your brand's goals. 
            Our social media agency specializes in creating solutions that drive results.
          </h1>
        </div>
        <div className='p-3 shadow-2xl bg-blue-50 text-center'>
        <h1 className='text-sm md:text-lg font-bold lg:text-3xl'>Social Media Ads</h1>
          <h1 className='text-xs leading-5 lg:leading-8 md:text-sm lg:text-lg'>
            Elevate your advertising with Facebook, YouTube and TikTok ads. 
            We creates engaging ads that 
            drive results and capture your brand's 
            unique message and voice.
          </h1>
        </div>

     </div>
     <div className='p-3 mx-5 my-5 shadow-2xl sm:my-5'>
          <img src={dashboard} alt="dashboardPic"/>
      </div>
      <div className='p-3 mx-5 my-5 shadow-2xl sm:my-5'>
          <img src={dash} alt="dashboardPic"/>
      </div>
    </div>
  )
}
export default About;