import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Sellterr from "./Sellterr.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);

  let unit = document.documentElement.scrollHeight / 100;

  const scrollToAbout = () => {
    console.log(unit)
      window.scrollTo({
        top: 18 * unit,
        behavior: "smooth"
      })
  }

  const scrollToAboutMobile = () => {
      window.scrollTo({
        top: 20 * unit,
        behavior: "smooth"
      })
  }

  return (
    <div>
        <header className="sticky top-0 z-30 flex w-full items-center justify-between p-2 pl-5 pr-8 lg:px-14">
         <div className="flex items-center justify-center">
				    <div className="flex items-center">
            <a href="https://sellterrmedia.com" target="_blank" rel="noreferrer">
				       <img src={Sellterr} alt="Sellterr" className="cursor-pointer h-10 w-10 lg:h-14 lg:w-14 shadow-transparent"/>
            </a>
                      <div className='text-xl lg:text-2xl text-black font-extrabold'>Sellterr Media</div>
            </div>
				 </div>
                 <div className="hidden flex-1 items-center justify-end space-x-8 md:flex pr-5">
                  <div className="font-bold link text-lg headerlink" onClick={scrollToAbout}>About Us</div>
                  {/* <div className="font-bold link text-lg headerLink">Our Services</div> */}
                  <div className="font-bold link text-lg headerlink">
                  <a href="https://calendly.com/sellterrmedia" target="_blank" rel="noreferrer">
                    Book A Call
                  </a>
                  </div>
              </div>
              <div className="flex md:hidden">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          type="button"
                          className="bg-blue-600 inline-flex items-center 
						                        justify-center p-2 rounded-md text-white 
									                  hover:bg-pink-600 focus:outline-none 
									                  focus:ring-2 focus:ring-offset-2 
									                 focus:ring-offset-blue-800 
								                	 focus:ring-white"
                          aria-controls="mobile-menu"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          {!isOpen ? (
                            <svg
                              className="block h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="block h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </button>
              </div>
        </header>
        <Transition
          className={` absolute  w-screen `}        
					show={isOpen}
					enter="transition  ease-out  duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={divRef} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<div> 
									<a href="https://calendly.com/sellterrmedia" target="_blank" rel="noreferrer">
								       <div className="cursor-pointer hover:bg-blue-600
									                     text-black hover:text-white block px-3 py-2 
													             rounded-md text-base font-medium"
									  >
									       Book A Call
								      </div>
								   </a>
								</div>

								{/* <div
									className="cursor-pointer hover:bg-blue-600
                             text-black hover:text-white 
									           block px-3 py-2 rounded-md text-base font-medium"
								>
									Our Services
								</div> */}

								<div
									className="cursor-pointer hover:bg-blue-600
                           text-black hover:text-white block px-3 
                           py-2 rounded-md text-base font-medium"
                           onClick={scrollToAboutMobile}
								>
									About Us
								</div>
							</div>
						</div>
					)}
				</Transition>
    </div>
	)
}

export default Header;