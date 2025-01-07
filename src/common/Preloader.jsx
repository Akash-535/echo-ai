import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import preloaderLottie from '../lottie/preloader.json'
export const Preloader = () => {
    const [isPreloader, setPreloader] = useState(true)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            setPreloader(false);
            document.body.style.overflow = 'auto'
        }, 2000)

    }, []);

    return (
        <div>
            {isPreloader ? (
                <div className='min-h-screen bg-black z-[100] fixed w-full h-full flex justify-center items-center'>
                    <div
                    >
                        <Lottie className='max-w-3xl' animationData={preloaderLottie} /></div>
                </div>
            ) : null}
        </div>
    )
}
export default Preloader