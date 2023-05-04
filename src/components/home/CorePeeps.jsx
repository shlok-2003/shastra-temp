import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Thumbnail from "../../assets/home/thumbnail.png"

export default function CorePeeps() {
    const [core, setCore] = useState(null)

    useEffect(() => {
        setCore([Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail])
    }, [])

    return (
        <div className="flex flex-col self-center">
            <span className="pb-7 self-center  uppercase font-bold text-2xl md:text-4xl select-none inline-block w-max gradient-txt">Core Peeps</span>
            <div className="grid grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-x-20 lg:gap-y-10 md:mx-2">
                {    
                    core &&
                    core.map(personImg => (
                        <div
                            key={nanoid()}
                            className="flex flex-col items-center aspect-square justify-center space-y-2"
                        >
                            <span className="uppercase font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center mx-auto inline-block w-max gradient-txt">post</span>
                            <img src={personImg} className="inline-block aspect-square h-16 min-[500px]:h-20 sm:h-28 md:h-36 lg:h-60"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}