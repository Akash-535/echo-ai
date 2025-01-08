import React, { useState } from 'react'
import { ACCORDION_LIST } from '../utils/helper'
import { FaqIcon } from '../utils/icons';

const Accordion = () => {
  const [open, setOpen] = useState(0);
  const toggleAccordion = (index) => {
      setOpen(open === index ? "" : index);
  };
  return (
    <div id='accordion' className='pb-[356px] px-5 max-xl:pb-64 max-lg:pb-52 max-md:pb-36 max-sm:pb-20'>
        <div className="container">
            <h2 className='text-white text-5xl font-semibold leading-custom-2xl pb-[60px] text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-lg:pb-10 max-md:pb-7 max-sm:pb-5'>FAQ<span>s</span></h2>
            <div className='flex flex-col gap-6'>
              {ACCORDION_LIST.map((obj , i) => (
                <div key={i} className={`max-w-[1022px] w-full mx-auto p-[1px] rounded-xl ${open === i ? 'bg-gradient-to-r from-blue-purple to-sky-blue' : 'bg-white bg-opacity-10'}`}>
                  <div className='max-w-[1022px] w-full mx-auto bg-off-black rounded-xl p-6 max-md:p-4 max-md:pb-0'>
                  <button onClick={() => toggleAccordion(i)} className="w-full flex justify-between items-center font-semibold text-xl text-white leading-custom-3xl max-md:text-base gap-3 text-start max-md:pb-4">
                            {obj.question}
                            <span className={` ${open === i ? 'rotate-180' : 'rotate-0'} duration-500 ease-linear`}>
                                <FaqIcon />
                            </span>
                        </button>
                        <div className={`md:overflow-hidden overflow-auto transition-all duration-700 ease-in-out ${open === i ? 'max-h-[200px] max-md:pb-4 max-md:max-h-[120px]' : 'max-h-0'}`}>
                            <p className="text-base md:pt-4 text-white max-sm:text-sm">
                                {obj.answer}
                            </p>
                        </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Accordion