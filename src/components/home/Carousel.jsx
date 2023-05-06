import React from "react"
import { nanoid } from "nanoid"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Keyboard } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Carousel.css"

export default function Carousel(props) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    
    return (
        <div className="relative flex h-full w-full py-10 bg-gradient-to-br from-[#000778] from-[20%] via-slate-500 via-30% to-[#FF9201] to-40% md:to-40%">
            <div className="mx-auto sm:px-10 relative p-5 w-full flex flex-row justify-center overflow-hidden md:h-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={pagination}
                    navigation={true}
                    keyboard={{enabled: true}}
                    modules={[Keyboard, Pagination, Navigation]}
                >
                    {
                        props.slides && 
                        props.slides.map(slide => (
                            <SwiperSlide
                                key={nanoid()}
                            >
                            <img 
                                id=""
                                src={slide}
                                className="aspect-video md:aspect-auto h-max mx-auto w-full inline-block object-center sm:object-cover rounded-xl md:rounded-3xl"
                            />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="absolute bottom-0 w-full h-7 bg-gradient-to-b from-[#FF9201] to-home"></div>
        </div>
    )
}

