import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './Content';



const Faq = () => {
  return (
    <div className='lg:my-24 lg:mb-32'>
      <h1 className='flex items-center justify-center font-bold text-3xl mt-10 mb-3 text-center lg:mt-14'>
           Frequently Asked Questions
      </h1>
      <p className='flex text-sm items-center justify-center mb-5 px-12 text-center'>
         Need help? Check out the answers to your questions about Sellterr Media, 
         or send an email to "support@sellterrmedia.com".
      </p>
      <div className="mb-20">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} key={title} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default Faq;