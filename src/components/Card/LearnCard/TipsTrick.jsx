import React from "react"
import { nanoid } from "nanoid"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation } from "swiper"

import "swiper/css"
import "swiper/css/grid"
import "./LearnSwiper.css"

export default function TipsTrick({tips, handleClick}) {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
    
    return (
        <div className="h-max w-[90%] py-2.5 mx-auto bg-transparent backdrop-filter backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl">            
            <Swiper 
                spaceBetween={10}
                navigation={true}
                modules={[Grid, Navigation]}
                breakpoints={breakpoints}
                className="w-[98%] rounded-xl self-center"
            >
                {
                    tips &&
                    tips.map(item => (
                        <SwiperSlide 
                            key={nanoid()} 
                            className="learn--swiper h-max flex justify-center items-center" 
                        >
                            <img 
                                src={item.image} 
                                className="cursor-pointer inline-block aspect-video h-44 object-fill object-center rounded-xl" 
                                onClick={() => handleClick(item.id)}
                                alt="tcet shastra youtube video"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>   
        </div>
    )
}