import React from 'react'
import { FOOTER_LIST, MEDIA_ICONS } from '../utils/helper'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='pb-[30px] px-5'>
        <div className='container'>
            <div className='w-full justify-between flex max-md:justify-center max-md:flex-col max-md:items-center max-md:gap-9'>
                    <a href="/"><img className='max-w-[150px] mx-auto max-lg:max-w-[120px] max-md:max-w-[100px] max-md:mx-auto' src="./assets/images/footer-logo.webp" alt="footer logo" /></a>
                <div className='max-md:hidden'>
                    {FOOTER_LIST.map((obj , i) => (
                        <div key={i} className='flex flex-col gap-4'> 
                             <p className='text-base font-normal text-white leading-custom-4xl'>{obj.title}</p>
                             <ul className='flex flex-col gap-4'>
                             {obj.list.map((item , i) => (
                                 <li key={i}><a href="/" className='text-white opacity-70 duration-300 ease-linear hover:text-sky-blue hover:opacity-100'>{item}</a></li>
                             ))}
                             </ul>
                             </div>
                       
                        ))}
                </div>
                <div className='max-md:hidden'>
                    <p className='text-base font-normal text-white leading-custom-4xl'>Send Us An E-mail</p>
                    <ul>
                        <li className='pt-3'><a href="mailto:info@echoai.ai" className='text-white opacity-70 duration-300 ease-linear hover:text-sky-blue hover:opacity-100'>info@echoai.ai</a></li>
                    </ul>
                    <div className='pt-8'>
                        <p className='text-base font-normal text-white leading-custom-4xl pb-0.5'>Follow Us On</p>
                        <div className='flex gap-3 pt-4'>
                            {MEDIA_ICONS.map((obj , i) => (
                                <a href={obj.link} key={i} target='_blank' className='p-2.5 bg-gradient-to-r from-blue-purple to-sky-blue rounded-full hover:scale-105 hover:shadow-md hover:shadow-sky-blue transition-all duration-300 ease-linear'>{obj.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex w-full justify-between max-w-[350px] mx-auto px-5">
                    {FOOTER_LIST.map((obj , i) => (
                        <div key={i} className='flex flex-col gap-4 text-center'> 
                             <p className='text-base font-normal text-white leading-custom-4xl'>{obj.title}</p>
                             <ul className='flex flex-col gap-4'>
                             {obj.list.map((item , i) => (
                                 <li key={i}><a href="/" className='text-white opacity-70 duration-300 ease-linear hover:text-sky-blue hover:opacity-100'>{item}</a></li>
                             ))}
                             </ul>
                             </div>
                       
                        ))}
                <div className='text-center'>
                    <p className='text-base font-normal text-white leading-custom-4xl'>Send Us An E-mail</p>
                    <ul>
                        <li className='pt-3'><a href="mailto:info@echoai.ai" className='text-white opacity-70 duration-300 ease-linear hover:text-sky-blue hover:opacity-100'>info@echoai.ai</a></li>
                    </ul>
                    <div className='pt-8 text-center'>
                        <p className='text-base font-normal text-white leading-custom-4xl pb-0.5'>Follow Us On</p>
                        <div className='flex gap-3 pt-4'>
                            {MEDIA_ICONS.map((obj , i) => (
                                <a href={obj.link} key={i} target='_blank' className='p-2.5 bg-gradient-to-r from-blue-purple to-sky-blue rounded-full hover:scale-105 hover:shadow-md hover:shadow-sky-blue transition-all duration-300 ease-linear'>{obj.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-white-gray via-white-custom-70 to-white-gray h-0.5 w-full mt-[60px] max-lg:mt-10 max-md:mt-7 max-sm:mt-5'></div>
            <p className='text-white text-center pt-5 opacity-80 text-base font-normal leading-custom-5xl'>Copyright ECHO AI © {currentYear} | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer