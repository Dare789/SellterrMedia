import React, { useState } from 'react';
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div className="border flex" 
            onClick={() => setIsActive(!isActive)}>
        <div className='text-xl font-bold p-5'>
          {title}
        </div>
        <div className='flex items-center'>
          {isActive ? 
          <RiArrowDropUpLine
           size={45}
          />
           : 
           <RiArrowDropDownLine
           size={45}
           />}
        </div>
      </div>
      {isActive && 
        <div className="p-5 text-Landing  text-slate-700">
          {content}
        </div>
      }
    </div>
  );
};

export default Accordion;