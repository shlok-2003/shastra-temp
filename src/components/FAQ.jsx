import React from "react"
import QuestionMark from "../assets/home/questionMark.png"

export default function FAQ() {
    return (
        <div className="z-10 w-full flex flex-col items-center my-20 lg:mb-28">
            <span className="ml-5 md:ml-10 select-none inline-block mx-auto w-max font-bold text-xl md:text-3xl pb-5 gradient-txt">FAQ's</span>
            <div className="grid grid-cols-4 gap-1 md:gap-6 pl-5 md:pl-10 my-auto">
                <p className="text-xs relative z-[5] md:text-xl text-justify my-auto mr-5 col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <div className="relative z-10 flex items-center justify-center">
                    <img src={QuestionMark} className="lg:absolute h-28 sm:h-32 md:h-48 lg:h-60 my-auto mr-2"/>
                </div>
            </div>
        </div>
    )
}