import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"


import Logo from "../assets/home/logo.png"
import CarouselImg from "../assets/home/carousel.jpg"
import CarouselImg3 from "../assets/home/carousel3.jpg"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { nanoid } from "nanoid"
function Landing() {
    return (
        <div className="h-64 min-[360px]:h-60 sm:h-72 md:h-[17rem] lg:h-80 bg-home rounded-b-[76px] md:rounded-b-[94px] lg:rounded-b-[114px]">
            <div className="relative top-28 flex flex-row justify-around items-center mx-2">

                <span className="uppercase font-bold text-lg min-[360px]:text-xl min-[500px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <h1 className="text-[#000778]">Welcome to the</h1>
                    <h1 className="text-[#000778]">Official Page of</h1>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#030B98] from-[16.16%] to-[#FF9201] to-[43.13%] 
                                text-xl min-[360px]:text-2xl min-[500px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Coding Club</h1>
                </span>

                <span className="">
                    <img src={Logo} className="inline-block mx-auto h-14 w-28 min-[500px]:h-20 min-[500px]:w-40 sm:h-24 sm:w-48 lg:h-28 lg:w-56 xl:h-36 xl:w-72" />
                    <h1 className="mx-auto text-center text-lg sm:text-xl md:text-2xl">
                        <span className="tracking-wider">TCET's शSTRA</span>
                    </h1>
                </span>

            </div>
        </div>
    )
}

const variants = {
    initial: direction => {return {
        x: direction > 0 ? 1300 : -1300,
        opacity: 0
    }},
    animate: {
        x: 0,
        opacity: 1,
        transition: "ease-in"
    },
    end: direction => {return {
        x: direction > 0 ? -1300 : 1300,
        opacity: 0,
        transition: "ease-in-out"
    }}
}

function Carousel(props) {
    return (
        <div className="relative flex h-auto w-full py-10 bg-gradient-to-br from-[#000778] from-[20%] via-slate-500 via-30% to-[#FF9201] to-40% md:to-40%">
            <div className="mx-auto sm:px-10 relative w-full flex flex-row justify-center overflow-hidden md:h-auto">
                {
                    props.carouselImg && 
                    <AnimatePresence initial={false} custom={props.direction}>
                        <motion.img 
                            id=""
                            key={nanoid()}
                            src={props.carouselImg[props.index]} 
                            className="aspect-video sm:aspect-auto h-full mx-auto w-full inline-block object-center sm:object-cover md:rounded-3xl"
                            custom={props.direction}
                            initial="initial"
                            animate="animate"
                            end="end"
                            variants={variants}
                        />
                    </AnimatePresence>
                }

                <div className="bg-red-700 h-4 flex flex-row items-center justify-between">
                    {
                        <CarouselDot />
                    }
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 sm:left-2 md:left-7 right-0 sm:right-2 md:right-7 top-1/2 z-10">
                    <button 
                        className="cursor-pointer relative left-1 hover:scale-[1.1]" 
                        onClick={props.handlePrev}
                    >
                        <FaChevronLeft size={40}  className="text-white"/>
                    </button>

                    <button
                        className="cursor-pointer relative right-1 hover:scale-[1.1]"
                        onClick={props.handleNext}
                    >
                        <FaChevronRight size={40} className="text-white"/>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-6 bg-gradient-to-b from-[#FF9201] to-home"></div>
        </div>
    )
}

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

            <div>

            </div>
            
        </div>
    )
}