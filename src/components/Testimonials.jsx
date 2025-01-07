import React from 'react'
import { TESTIMONIALS_LIST } from '../utils/helper'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'

const Testimonials = () => {
  return (
    <div id='testimonials' className='pt-44 pb-52 max-lg:pb-48 max-md:py-36 max-sm:py-20'>
        <div className='container overflow-hidden px-5'>
        <h2 className='text-white text-5xl font-semibold leading-custom-2xl pb-10 text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-md:pb-5'>Testimonials</h2>
   <Swiper 
        slidesPerView={3}
        spaceBetween={30}
           autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
              className='flex mySwiper'>
  {TESTIMONIALS_LIST.map((obj, i) => (
    <SwiperSlide
      key={i}
      className="bg-gradient-to-b from-blue-custom-300 to-blue-custom-700 p-6 pb-[0.6px] max-w-[364px] mx-auto min-h-[289px] flex flex-col justify-between rounded-3xl"
    >
      <div>
        <h3 className="text-white text-2xl font-semibold leading-custom-3xl">
          {obj.heading}
        </h3>
        <p className="text-base text-white opacity-80 pt-2 leading-custom-5xl">
          {obj.description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <img
          className="size-[60px]"
          src={obj.image}
          alt="swiper image"
        />
        <div className="flex flex-col">
          <h5 className="text-xl font-medium text-white leading-custom-3xl">
            {obj.imgHeading}
          </h5>
          <p className="text-base font-normal text-white leading-custom-5xl">
            {obj.imgDescription}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
    </div>
  )
}

export default Testimonials