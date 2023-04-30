import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"


import Logo from "../assets/home/logo.png"
import CarouselImg from "../assets/home/carousel.jpg"
import CarouselImg2 from "../assets/home/carousel2.jpeg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

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

export default function Home() {
    const [carouselImg, setCarouselImg] = useState(null)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setCarouselImg([CarouselImg, CarouselImg2])
    }, [])

    console.log(index)
    return (
        <div className="relative min-h-full">
            <div className="relative -z-10 bg-black h-max">
                <Landing />
            </div>

            <div className="relative flex h-max w-full z-[1] bg-black py-10 ">
                <motion.div className="w-full relative flex flex-row justify-center">
                    
                    <div className="">
                        {
                            carouselImg && <img src={carouselImg[index]} className="aspect-video h-44 md:h-80"/>
                        }
                    </div>
                </motion.div>
                    
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <button 
                        className="cursor-pointer relative left-0" 
                        onClick={() => setIndex(prevState => (
                            prevState + 1 < carouselImg.length ? prevState + 1 : 0)
                        )}
                    >
                        <FaChevronLeft size={40} className="text-white"/>
                    </button>

                    <button
                        className="cursor-pointer relative "
                        onClick={() => setIndex(prevState => (
                            prevState - 1 >= 0 ? prevState - 1 : carouselImg.length - 1
                        ))}
                    >
                        <FaChevronRight size={40} className="text-white"/>
                    </button>
                </div>
                    
                    
                </div>
        </div>
    )
}