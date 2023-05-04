import React from "react"

import Thumbnail from "../assets/home/thumbnail.png"
import Quote from "../assets/home/quote.png"

export default function Vision() {
    return (
        <>
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
                <span className="capitalize ml-5 md:ml-10 my-auto inline-block font-bold w-max text-xl md:text-3xl pb-5 gradient-txt">Scoops from the club</span>
                <div className="grid grid-cols-4 gap-1 pl-5 md:pl-10">
                    <img src={Thumbnail} className="inline-block h-[5.5rem] min-[530px]:h-[6.5px] sm:h-28 md:h-44 lg:h-60 my-auto mr-2"/>
                    <p className="text-xs relative z-[5] md:text-xl text-justify my-auto md:pr-20 pr-5 col-span-3">
                        <img src={Quote} className="inline-block absolute -z-[5] aspect-square h-8 w-10 md:h-16 md:w-20 -left-5 md:-left-10 -top-2 md:-top-5"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.</p>
                </div>
            </div>
        </>
    )
}