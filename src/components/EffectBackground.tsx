import React from "react";
import backgroundImage1 from '../assets/wallpapers/wallpaper1.jpg'
import backgroundImage2 from '../assets/wallpapers/wallpaper2.jpg'
import backgroundImage3 from '../assets/wallpapers/wallpaper3.jpg'
import backgroundImage4 from '../assets/wallpapers/wallpaper4.jpg'
import backgroundImage5 from '../assets/wallpapers/wallpaper5.jpg'
import backgroundImage6 from '../assets/wallpapers/wallpaper6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const EffectBackground: React.FC = () => {

    return (
        <>
            <div className='absolute z-10 w-full h-full left-0 top-0 bg-[rgba(50,50,50,.5)] dark:bg-[rgba(0,0,0,.5)]'></div>
            <Swiper
                effect={'fade'}
                speed={3000}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Autoplay, EffectFade]}
                className="absolute w-full h-full left-0 top-0"
            >
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage1})` }}></SwiperSlide>
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage2})` }}></SwiperSlide>
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage3})` }}></SwiperSlide>
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage4})` }}></SwiperSlide>
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage5})` }}></SwiperSlide>
                <SwiperSlide className='bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${backgroundImage6})` }}></SwiperSlide>
            </Swiper>
        </>

    )
}

export default EffectBackground