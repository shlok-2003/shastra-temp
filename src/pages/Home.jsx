import React, { useState, useEffect } from "react"
import { AnimatePresence, motion, transform } from "framer-motion"


import Logo from "../assets/home/logo.png"
import CarouselImg from "../assets/home/carousel.jpg"
import CarouselImg2 from "../assets/home/carousel2.jpeg"
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
                                text-xl min-width[360px]:text-2xl min-[500px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Coding Club</h1>
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

// function Carousel() {
//     return (
//         <div className="carousel w-full h-max py-8">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img src={CarouselImg} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <a href="#slide4" className="btn btn-circle">❮</a> 
//                 <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div> 
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img src={CarouselImg} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <a href="#slide1" className="btn btn-circle">❮</a> 
//                 <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div> 
//         </div>
//     )
// }

const variants = {
    initial: direction => {return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
        transition: "ease-in"
    }},
    animate: {
        x: 0,
        opacity: 1,
        transition: "ease-in"
    }, 
    end: direction => {return {
        x: direction > 0 ? -500 : 500,
        opacity: 0,
        transition: "ease-in"
    }}
}

export default function Home() {
    const [carouselImg, setCarouselImg] = useState(null)
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        setCarouselImg([CarouselImg, CarouselImg2])
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
            <div className="relative -z-10 bg-gradient-to-r from-[#000778] from-[40%] via-slate-500 via-70% to-[#FF9201]">
                <Landing />
            </div>

            <div className="flex h-max w-full -z-[11] py-10 bg-gradient-to-br from-[#000778] from-[20%] via-slate-500  to-[#FF9201] to-50%">
                <div className="mx-auto relative flex w-full flex-row justify-center overflow-hidden">
                    {
                        carouselImg && 
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img 
                                key={carouselImg[index]}
                                src={carouselImg[index]} 
                                className="aspect-video w-[70%] md:w-[80%] xl:w-[50%] mx-auto object-cover object-center"
                                initial="initial"
                                animate="animate"
                                end="end"
                                variants={variants}
                                custom={direction}
                            />
                        </AnimatePresence>
                    }

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-7 right-2 md:right-7 top-1/2 z-10">
                        <motion.button 
                            className="cursor-pointer relative left-0" 
                            onClick={handlePrev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <FaChevronLeft size={40}  className="text-white"/>
                        </motion.button>

                        <motion.button
                            className="cursor-pointer relative "
                            onClick={handleNext}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <FaChevronRight size={40} className="text-white"/>
                        </motion.button>
                    </div>
                </div>
            </div>

            
                
        </div>
    )
}