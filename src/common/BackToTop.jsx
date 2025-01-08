import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'
import backTop from "../lottie/back-to-top.json"

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <>
            {scrollTop && (
                <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] animate-bounce z-40'><Lottie className='rotate-180 size-16' animationData={backTop}/></button>)
            }
        </>
    )
}

export default BackToTop
