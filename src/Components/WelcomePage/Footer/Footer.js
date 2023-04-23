import React from 'react';
import Sellterr from "./Sellterr.png";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
  <div className='bg-gray-300'>
    <div className="flex items-center justify-center pt-8">
				<img src={Sellterr} alt="Sellterr" className="cursor-pointer h-12 w-12"/>
        <div className='text-2xl text-black font-extrabold sm:text-2xl cursor-pointer'>Sellterr Media</div>
		</div>
    <div className="flex mx-5 sm:mx-5 items-center justify-center space-x-2 pt-3">
      <div className="flex space-x-8">
                  <div className="font-bold text-md text-center sm:text-lg cursor-pointer">About</div>
				          <div className="font-bold text-md text-center sm:text-lg cursor-pointer">Terms Of Use</div>
                  <div className="font-bold text-md text-center sm:text-lg cursor-pointer">Privacy Policy</div>
      </div>
    </div>
    <div>
      <h1 className='flex mx-5 sm:mx-5 items-center justify-center space-x-2 pt-3 text-lg'>
       Sellterr Media, 444 Alaska Avenue, Torrance
      </h1>
      <h1 className='flex mx-5 sm:mx-5 items-center justify-center space-x-2'>CA, 90503, USA</h1>
    </div>
    <div className='flex space-x-6 mx-5 sm:mx-5 items-center justify-center py-3'>
      <SocialIcon network="twitter" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
      <SocialIcon network="facebook" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
      <SocialIcon network="instagram" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
      <SocialIcon network="github" bgColor="black" style={{ height: 32, width: 32 }} className="cursor-pointer"/>
    </div>
    <div className='flex space-x-6 mx-5 sm:mx-5 items-center justify-center pb-5'>
      <p className='font-light'>Copyright &copy; 2023 All Rights Reserved</p>
</div>
  </div>
  )
}

export default Footer;