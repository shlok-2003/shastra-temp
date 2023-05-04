import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Carousel from "../components/Carousel"
import Landing from "../components/Landing"
import Vision from "../components/Vision"
import CorePeeps from "../components/CorePeeps"
import FAQ from "../components/FAQ"

import CarouselImg from "../assets/home/carousel.jpg"
import CarouselImg3 from "../assets/home/carousel3.jpg"

export default function Home() {
    const [carouselImg, setCarouselImg] = useState(null)
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        setCarouselImg([CarouselImg, CarouselImg3, CarouselImg, CarouselImg3])
    }, [])

    function handlePrev() {
        setDirection(-1)
        setIndex(prevState => prevState - 1 >= 0 ? prevState - 1 : carouselImg.length - 1)
    }

    function handleNext() {
        setDirection(1)
        setIndex(prevState => prevState + 1 < carouselImg.length ? prevState + 1 : 0)
    }

    return (
        <div className="relative min-h-full">
            <div className="relative -z-10 bg-gradient-to-r from-[#000778] from-[40%] via-slate-500 via-30% to-[#FF9201] to-60%">
                <Landing 
                    key={nanoid()}
                />
            </div>

            <Carousel 
                handleNext={handleNext} 
                handlePrev={handlePrev} 
                carouselImg={carouselImg}
                index={index}
                setIndex={index}
                direction={direction}
            />

            <div className="relative z-10 h-max w-full flex flex-col justify-center space-y-5">
                <Vision />
                <CorePeeps />
            </div>

            <FAQ />
        </div>
    )
}