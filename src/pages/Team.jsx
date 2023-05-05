import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import Thumbnail from "../assets/teams/Sarang.jpg"

export default function Team() {
    const [core, setCore] = useState(null)
    
    useEffect(() => {
        setCore([Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail])
    }, [])

    return (
        <div className="relative -z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>

            <div className="relative mt-32 mb-16 bg-red-300 w-full">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max text-white md:text-4xl my-7">Know the Core</h1>

               {/* Make a core cards section */}
            </div>
        </div>
    )
}

{/* <div className="absolute ">Know the Core</div>
            <div className="relative z-20 mt-32 mb-16 w-full md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-10  mx-auto backdrop-filter bg-sky-800 bg-transparent backdrop-blur-lg">
                {
                    core &&
                    core.map(member => (
                        <div className="relative h-52 w-44 bg-slate-100 rounded-xl overflow-hidden mx-auto my-auto">
                            <div className="h-[80%] w-full bg-slate-400 rounded-b-2xl overflow-hidden">
                                <img src={""} className="object-fill object-center" alt="core image"/>
                            </div>
                            <div className="bg-[#ffffff80]">
                                <h1 className="capitalize text-center text-base">Name</h1>
                                <h1 className="capitalize text-center text-sm">Designation</h1> 
                            </div>
                        </div>
                    ))
                }
            </div> */}

{/* core.map(member => (
                        <Card
                            key={nanoid()}
                            sx={{ maxWidth: 150, maxHeight: 250 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="50"
                                image={member}
                                alt="core image"
                                className="w-full h-full object-cover object-center rounded-lg"
                                />
                                <CardContent>
                                    <h1 className="capitalize text-center text-base">name</h1>
                                    <h1 className="capitalize text-center text-sm">designation</h1>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )) */}