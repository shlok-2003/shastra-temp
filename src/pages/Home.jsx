import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Thumbnail from "../assets/home/thumbnail.png"
import Quote from "../assets/home/quote.png"
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
                    <h1 className="gradient-txt 
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
        transition: "ease-in"
    }}
}

function Carousel(props) {
    return (
        <div className="relative flex h-full w-full py-10 bg-gradient-to-br from-[#000778] from-[20%] via-slate-500 via-30% to-[#FF9201] to-40% md:to-40%">
            <div className="mx-auto sm:px-10 relative p-5 w-full flex flex-row justify-center overflow-hidden md:h-auto">
                {
                    props.carouselImg && 
                    <AnimatePresence initial={false} custom={props.direction}>
                        <motion.img 
                            id=""
                            key={nanoid()}
                            src={props.carouselImg[props.index]} 
                            className="aspect-video md:aspect-auto h-max mx-auto w-full inline-block object-center sm:object-cover rounded-xl md:rounded-3xl"
                            custom={props.direction}
                            initial="initial"
                            animate="animate"
                            end="end"
                            variants={variants}
                        />
                    </AnimatePresence>
                }

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
            <div className="absolute bottom-0 w-full h-7 bg-gradient-to-b from-[#FF9201] to-home"></div>
        </div>
    )
}

export default function Home() {
    const [carouselImg, setCarouselImg] = useState(null)
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const [core, setCore] = useState(null)

    useEffect(() => {
        setCarouselImg([CarouselImg, CarouselImg3, CarouselImg, CarouselImg3])
        setCore([Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail])
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

            <div className="relative z-10 h-max w-full flex flex-col justify-center bg-gradient-to-b from-white from-50% to-home to-90% space-y-5">
                <div className="pt-5 md:py-10 w-[90%] flex self-center flex-col items-center">
                    <span className="uppercase select-none inline-block mx-auto w-max font-bold text-2xl md:text-4xl pb-3 gradient-txt">Club's Vision</span>
                    <p className="text-sm text-justify md:text-base block sm:px-10 md:px-20"> 
                    Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                    </p>
                </div>

                <div className="flex flex-col relative">
                    <span className="capitalize pl-5 md:pl-10 my-auto inline-block font-bold w-max text-xl md:text-2xl pb-5 gradient-txt">Scoops from the club</span>
                    <div className="grid grid-cols-4 pl-5 md:pl-10">
                        <img src={Thumbnail} className="inline-block h-24 w-24 sm:h-28 sm:w-28 md:h-44 md:w-44 lg:h-60 lg:w-60 my-auto mx-0"/>
                        <p className="text-xs relative z-[5] md:text-xl text-justify my-auto md:pr-20 pr-5 col-span-3">
                            <img src={Quote} className="inline-block absolute -z-[5] h-8 w-10 md:h-16 md:w-20 -left-5 md:-left-10 -top-2 md:-top-5"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum.</p>
                    </div>
                </div>

                <div className="flex flex-col self-center">
                    <span className="pb-7 self-center  uppercase font-bold text-2xl md:text-4xl select-none inline-block w-max gradient-txt">Core Peeps</span>
                    <div className="grid grid-cols-4 gap-4 md:gap-x-20 md:gap-y-10">
                        {    
                            core &&
                            core.map(personImg => (
                                <div className="flex flex-col items-center aspect-square justify-center space-y-2">
                                    <span className="uppercase font-bold text-lg md:text-2xl text-center mx-auto inline-block w-max gradient-txt">post</span>
                                    <img src={personImg} className="h-16 w-16 md:h-60 md:w-60"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}