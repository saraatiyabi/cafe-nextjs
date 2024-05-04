import React from 'react';
import { slides } from '@/data/db';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}>
                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id} className="w-full relative">
                            <div className="relative w-full flex justify-center items-center before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-overlay before:opacity-90">
                                <img src={slide.src} className="relative z-0" />
                                <div className="absolute text-white z-20 opacity-100">
                                    <h3 className="font-bold text-3xl text-secondary mb-0">We Have Been Serving</h3>
                                    <h1 className="uppercase font-extrabold text-[110px]">Coffee</h1>
                                    <h4 className="font-bold text-3xl">* SINCE 1950 *</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default Slider