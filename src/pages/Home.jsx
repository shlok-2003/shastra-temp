import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Carousel from "../components/home/Carousel"
import Landing from "../components/home/Landing"
import Vision from "../components/home/Vision"
import CorePeeps from "../components/home/CorePeeps"
import FAQ from "../components/home/FAQ"

import CarouselImg from "../assets/home/carousel.jpg"
import CarouselImg3 from "../assets/home/carousel3.jpg"

export default function Home() {
    const [carouselImg, setCarouselImg] = useState(null)

    useEffect(() => {
        setCarouselImg([CarouselImg, CarouselImg3, CarouselImg, CarouselImg3])
    }, [])

    return (
        <div className="relative min-h-full">
            <div className="relative -z-10 bg-gradient-to-r from-[#000778] from-[40%] via-slate-500 via-30% to-[#FF9201] to-60%">
                <Landing 
                    key={nanoid()}
                />
            </div>

            <Carousel 
                slides={carouselImg}
            />

            <div className="relative z-10 h-max w-full flex flex-col justify-center space-y-5">
                <Vision />
                <CorePeeps />
            </div>

            <FAQ />
        </div>
    )
}