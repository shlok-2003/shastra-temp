import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import Thumbnail from "../assets/teams/Sarang.jpg"

export default function Team() {
    const [core, setCore] = useState(null)
    const [subCore, setSubCore] = useState(null)

    useEffect(() => {
        setCore([
            {id: 1, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 2, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 3, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 4, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 5, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 6, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 7, image: Thumbnail, name: "Sarang", designation: "NaN"},
        ])
        setSubCore([
            {id: 1, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 2, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 3, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 4, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 5, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 6, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 7, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 8, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 9, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 10, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 11, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 12, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 13, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 14, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 15, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 16, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 17, image: Thumbnail, name: "Sarang", designation: "NaN"},
            {id: 18, image: Thumbnail, name: "Sarang", designation: "NaN"},
        ])
    }, [])

    return (
        <div className="relative -z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>

            <div className="relative mt-32 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max text-black md:text-4xl mb-7">Know the Core</h1>

                <div className="team--core-grid grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-10 mx-3 md:mx-0 lg:mx-3 self-center p-10 md:p-5 lg:p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        core && 
                        core.map(member => (
                            <div
                                key={nanoid()} 
                                id={member.id}
                                className="aspect-auto w-32 md:w-40 lg:w-52 relative bg-gray-500 rounded-xl overflow-hidden mx-auto my-auto col-span-2"
                            >
                                <div className="min-h-[8rem] md:min-h-[10rem] lg:min-h-[13rem] overflow-hidden rounded-b-2xl">
                                    <img src={member.image} className="inline-block object-fill object-center" alt="core image"/>
                                </div>
                                <div className="bg-[#ffffff80]">
                                    <h1 className="capitalize text-center text-lg">{member.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{member.designation}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="relative mt-8 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max text-black md:text-4xl mb-7">Sub-Core</h1>
                
                <div className="team--subcore-grid grid grid-cols-4 md:grid-cols-8 gap-10 mx-3 self-center p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        subCore && 
                        subCore.map(member => (
                            <div 
                                key={nanoid()}
                                id={member.id}
                                className="aspect-auto w-32 md:w-40 lg:w-52 relative bg-gray-500 rounded-xl overflow-hidden mx-auto my-auto col-span-2"
                            >
                                <div className="min-h-[8rem] md:min-h-[10rem] lg:min-h-[13rem] rounded-b-xl overflow-hidden">
                                    <img src={member.image} className="inline-block object-fill object-center" alt="sub core image"/>
                                </div>
                                <div className="bg-[#ffffff80]">
                                    <h1 className="capitalize text-center text-lg">{member.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{member.designation}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
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