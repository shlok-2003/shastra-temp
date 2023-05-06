import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

import Event from "../assets/events/watermark-black-opacity-half.png"
import Watermark from "../assets/events/watermark-white.png"

import Hackathon from "../assets/events/hackathon.jpg"
import Gaming from "../assets/events/gaming.jpg"
import HackaWack from "../assets/events/hackawack.jpg"

export default function Events() {
    const [upcoming_event, setUpcoming_Event] = useState(null)
    const [past_event, setPast_Event] = useState(null)

    useEffect(() => {
        setUpcoming_Event([
            { "name":"One", "criteria":"All", "image":Hackathon, "link":"https://www.google.com" },
            { "name":"Two", "criteria":"All", "image":Gaming, "link":"https://www.google.com" },
            { "name":"Three", "criteria":"All", "image":HackaWack, "link":"https://www.google.com" },
        ])

        setPast_Event([
            { "name":"One", "criteria":"All", "image":Hackathon, "link":"https://www.google.com" },
            { "name":"Two", "criteria":"All", "image":Gaming, "link":"https://www.google.com" },
            { "name":"Three", "criteria":"All", "image":HackaWack, "link":"https://www.google.com" },
            { "name":"Four", "criteria":"All", "image":Hackathon, "link":"https://www.google.com" },
            { "name":"Five", "criteria":"All", "image":Gaming, "link":"https://www.google.com" },
            { "name":"Six", "criteria":"All", "image":HackaWack, "link":"https://www.google.com" },
        ])
    }, [])

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="relative mt-32 w-full flex flex-col text-center items-center justify-center py-4">

                <div className="absolute -z-10 grid items-center w-full h-full">
                    <img src={Event} className="w-full "/>
                    {/* You can update the watermark from here */}
                </div>

                <h1 className="font-normal min-[0px]:text-2xl min-[350px]:text-3xl min-[470px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    BRUSH YOUR CALIBRE BY <br/> PARTICIPATING IN <br/>UPCOMING EVENTS<br/> FEATURED BY
                </h1>
                <span className=" font-bold min-[0px]:text-4xl min-[350px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-500 mt-1">SHASTRA</span>
                <div className="grid grid-cols-2 justify-center items-center space-x-4 mt-4">
                    <button className="bg-pri-blue text-white py-2 px-8 lg:px-12 rounded-full text-lg md:text-xl lg:text-2xl cursor-pointer hover:bg-pri-blueDark transition-all duration-300">
                        Register Now
                    </button>
                    <button className="border border-black  text-black py-2 px-8 lg:px-12 rounded-full text-lg md:text-xl lg:text-2xl cursor-pointer hover:bg-gray-200 transition-all duration-300">
                        Get Details
                    </button>
                </div>
            </div>


            <div className="flex flex-col my-16">
                <span className="capitalize font-bold ml-2 md:ml-16 text-xl md:text-3xl inline-block w-max">Upcoming Event!</span>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7 self-center
                                md:gap-10 mx-3 md:mx-0 lg:mx-3 md:p-10 p-5"
                >
                    {   
                        upcoming_event &&
                        upcoming_event.map(event => (
                            <div
                                key={nanoid()} 
                                className="sm:w-72 min-[768px]:w-60 min-[980px]:w-72 rounded-2xl m-auto overflow-hidden bg-gray-300 p-3 sm:p-5 md:p-8 pb-0"
                            >
                                <div className="relative min-h-[8rem] md:min-h-[10rem] lg:min-h-[13rem] rounded-b-2xl overflow-hidden">
                                    <img src={event.image} className="aspect-square inline-block max-h-40 md:max-h-52 w-full object-fill object-center rounded-xl" alt="core image"/>
                                </div>

                                <div className="h-16 md:h-10">
                                    <h1 className="capitalize text-center text-lg">{event.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{event.criteria}</h1>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>

            <div className="flex flex-col my-16">
                <span className="capitalize font-bold ml-2 md:ml-16 text-xl md:text-3xl inline-block w-max">Past Event!</span>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-7 self-center
                                md:gap-10 mx-3 md:mx-0 lg:mx-3 md:p-10 p-5"
                >
                    {   
                        past_event &&
                        past_event.map(event => (
                                <div
                                    key={nanoid()} 
                                    className="sm:w-72 min-[768px]:w-60 min-[980px]:w-72 rounded-2xl m-auto overflow-hidden bg-gray-300 p-3 sm:p-5 md:p-8 pb-0"
                                >
                                    <div className="relative min-h-[8rem] md:min-h-[10rem] lg:min-h-[13rem] rounded-b-2xl overflow-hidden">
                                        <img src={event.image} className="aspect-square inline-block max-h-40 md:max-h-52 w-full object-fill object-center rounded-xl" alt="core image"/>
                                    </div>

                                    <div className="h-16 md:h-10">
                                        <h1 className="capitalize text-center text-lg">{event.name}</h1>  
                                        <h1 className="capitalize text-center text-sm">{event.criteria}</h1>
                                    </div>
                                </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}