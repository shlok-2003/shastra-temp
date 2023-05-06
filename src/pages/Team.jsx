import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

import { LinkedIn } from "@mui/icons-material"

const core_API = "https://shastra-api.onrender.com/coreMembers";
const subcore_API = "https://shastra-api.onrender.com/subcoreMembers";

export default function Team() {
    const [core, setCore] = useState([])
    const [subCore, setSubCore] = useState([])

    const fetchcoreUser = async(url) => {
        try {
            const res = await fetch(url, {
                method: "GET",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            const data = await res.json();
            if(data.length > 0){
                setCore(data);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const fetchsubcoreUser = async(url) => {
        try {
            const res = await fetch(url, {
                method: "GET",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            const data = await res.json();
            if(data.length > 0){
                setSubCore(data);
            }
        } catch (error) {
            throw new console.error(error);
        }
    }

    useEffect(() => {
        fetchcoreUser(core_API);
        fetchsubcoreUser(subcore_API)
    }, [])

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] h-20 md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>

            <div className="relative mt-32 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Know the Core</h1>

                <div className="team--core-grid grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-10 mx-3 md:mx-0 lg:mx-3 self-center md:p-10 p-5 lg:p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        core && 
                        core.map(member => (
                            <div
                                key={nanoid()} 
                                id={member.id}
                                className="aspect-auto max-h-64 w-32 md:w-40 lg:w-52 rounded-xl mx-auto my-auto col-span-2 bg-gray-300 overflow-hidden"
                            >
                                <div className="linkedin-container relative min-h-[8rem] md:min-h-[10rem] overflow-hidden">
                                    {/* You can add padding to the image as per your requirements */}
                                    <img src={member.image} className="inline-block max-h-40 md:max-h-52 w-full object-cover object-center rounded-xl " alt="core image"/>
                                    <div className="linkedin absolute z-20 opacity-100 -top-[13rem] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]">
                                        <Link 
                                            to={member.linkedin} 
                                            className="cursor-pointer"
                                            target="_blank"
                                        >
                                            <LinkedIn sx={{height: 60, width: 50}} className="text-[#0e76a8]"/>
                                        </Link>
                                    </div>

                                </div>
                                <div className="bg-[#ffffff80] ">
                                    <h1 className="capitalize text-center text-lg">{member.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{member.designation}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="relative mt-8 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Sub-Core</h1>
                
                <div className="team--subcore-grid grid grid-cols-4 md:grid-cols-8 gap-10 mx-3 self-center p-5 md:p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        subCore && 
                        subCore.map(member => (
                            <div
                                key={nanoid()} 
                                id={member.id}
                                className="aspect-auto max-h-64 w-32 md:w-40 lg:w-52 rounded-xl mx-auto my-auto col-span-2 bg-gray-300 overflow-hidden"
                            >
                                <div className="linkedin-container relative min-h-[8rem] md:min-h-[10rem] overflow-hidden">
                                    {/* You can add padding to the image as per your requirements */}
                                    <img src={member.image} className="inline-block max-h-40 md:max-h-52 w-full object-cover object-center rounded-xl " alt="core image"/>
                                    <div className="linkedin absolute z-20 opacity-100 -top-[13rem] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]">
                                        <Link 
                                            to={member.linkedin} 
                                            className="cursor-pointer"
                                            target="_blank"
                                        >
                                            <LinkedIn sx={{height: 60, width: 50}} className="text-[#0e76a8]"/>
                                        </Link>
                                    </div>

                                </div>
                                <div className="bg-[#ffffff80] ">
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