import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/helper';

const Header = () => {
    const [showSlide, setShowSlide] = useState(false);
    const toggleSidebar = () => setShowSlide(!showSlide);
    const closeNavbar = () => {
        setShowSlide(false);
    };
    useEffect(() => {
        document.body.style.overflow = showSlide ? 'hidden' : 'auto';
    }, [showSlide]);
    return (
        <div className='pt-3.5 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto'>
            <div className='container flex justify-between items-center'>
                <a href="#"><img className='max-w-[192px] max-lg:max-w-[105px]' src="./assets/images/echo-logo.webp" alt="logo" /></a>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-blue-900 duration-300 ease-linear z-10 ${showSlide ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                <a onClick={closeNavbar} href={obj.link} className=' text-base font-normal text-white'>{obj.item}</a>
                            </li>
                        </ul>
                    ))}
                    <button className='lg:hidden text-xl font-semibold rounded-full text-white bg-gradient-to-r from-lite-blue to-sky-blue py-[13.5px] px-8 hover:bg-gradient-to-l duration-300 ease-linear'>Get Started</button>
                </div>
                <button className='max-lg:hidden text-xl font-semibold rounded-full text-white bg-gradient-to-r from-lite-blue to-sky-blue py-[13.5px] px-8 hover:bg-gradient-to-l duration-300 ease-linear'>Get Started</button>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${showSlide ? 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue duration-300 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue -translate-x-10 opacity-0 duration-300 ease-linear' : 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue duration-700 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-gradient-to-r from-lite-blue to-sky-blue duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header
