import SwiperCore, { Autoplay, Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './Slider.module.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Autoplay, Navigation])

const Slider = () => {
    return (
        <section className='relative mt-7 shadow-2xl mx-auto'>
            <Swiper
                className={classes['swiper-container']}
                spaceBetween={30}
                centeredSlides
                navigation
                autoplay={{
                    'delay': 3000,
                    'disableOnInteraction': false
                }}>
                <SwiperSlide className={classes['swiper-slide']}>
                    <img loading='lazy' src='/images/slider-1.jpg' alt='slider1' />
                </SwiperSlide>
                <SwiperSlide className={classes['swiper-slide']}>
                    <img loading='lazy' src='/images/slider-2.jpg' alt='slider2' />
                </SwiperSlide>
                <SwiperSlide className={classes['swiper-slide']}>
                    <img loading='lazy' src='/images/slider-3.jpg' alt='slider3' />
                </SwiperSlide>
                <SwiperSlide className={classes['swiper-slide']}>
                    <img loading='lazy' src='/images/slider-4.jpg' alt='slider4' />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider
