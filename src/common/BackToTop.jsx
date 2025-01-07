import React, { useEffect, useState } from 'react'
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
        <div>
            {scrollTop && (
                <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] animate-bounce z-40'><img className='size-14 max-md:size-8' src="./assets/images/back-to-top.webp" alt="img" /></button>)
            }
        </div>
    )
}

export default BackToTop
