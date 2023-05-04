import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { nanoid } from "nanoid"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

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

export default function Carousel(props) {
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