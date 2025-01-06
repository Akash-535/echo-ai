import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className='px-5 min-h-[840px] bg-hero-bg bg-cover bg-center bg-no-repeat relative max-md:min-h-[600px]'>
      <img className='absolute top-1/2 -left-0 z-10 max-w-[322px] w-full max-lg:top-1/3 max-md:hidden' src="./assets/images/hero-left-vector.webp" alt="left vector" />
        <Header/>
        <div className='flex justify-center pt-[60px] items-center max-w-[1920px] mx-auto max-lg:flex-col gap-7 max-lg:pt-10 max-md:pt-7 max-sm:pt-5'>
            <div className='w-6/12 text-center max-lg:w-full'>
                <h1 className='text-7xl text-white text-center font-bold max-xl:text-6xl max-md:text-5xl max-sm:text-3xl max-sm:leading-8'>Innovate, Automate, Accelerate </h1>
                <p className='text-xl font-normal leading-custom-5xl text-white text-center py-6 max-md:text-lg max-sm:text-base max-lg:py-4 max-sm:py-2'>Next Gen AI Automation to Scale Your Business.</p>
                <button className='text-xl font-semibold rounded-full text-white bg-gradient-to-r from-lite-blue to-sky-blue py-[19.5px] px-8 hover:bg-gradient-to-l duration-300 ease-linear max-md:text-base max-md:py-3 max-md:px-6'>Book A Call Now!</button>
            </div>
            <div>
              <img className='max-w-[470px] w-full pointer-events-none max-lg:max-w-[400px] object-cover max-md:max-w-[370px] max-sm:max-w-[320px]' src="./assets/images/hero-img.webp" alt="hero img" />
            </div>
        </div>
    </div>
  )
}

export default Hero