import React from 'react';
import Sellterr from "./Sellterr.png";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
  <div className='bg-gray-300'>
    <div className="flex items-center justify-center pt-8">
    <a href="https://sellterrmedia.com" target="_blank" rel="noreferrer">
				<img src={Sellterr} alt="Sellterr" className="cursor-pointer h-10 w-10 lg:h-14 lg:w-14 shadow-transparent"/>
    </a>    
        <div className='text-xl lg:text-2xl text-black font-extrabold'>Sellterr Media</div>
		</div>
    <div>
      <h1 className='flex mx-5 sm:mx-5 items-center justify-center space-x-2 text-xs lg:text-lg'>
       Sellterr Media, Ikeja, lagos, Nigeria
      </h1>
    </div>
    <div className='flex space-x-4 mx-5 sm:mx-5 items-center justify-center py-2'>
      <a href='https://www.instagram.com/sellterrmedia/' target="_blank" rel="noreferrer">
         <SocialIcon network="instagram" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
      </a>
      <a href='https://www.linkedin.com/company/sellterr-media/?viewAsMember=true' target="_blank" rel="noreferrer">
        <SocialIcon network="linkedin" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
      </a>
        <a href='https://web.facebook.com/?_rdc=1&_rdr' target="_blank" rel="noreferrer">
           <SocialIcon network="facebook" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
        </a>
    </div>
    <div className='flex space-x-6 mx-5 sm:mx-5 items-center justify-center pb-5'>
      <p className='text-sm font-light'>Copyright &copy; 2023 All Rights Reserved</p>
</div>
  </div>
  )
}

export default Footer;