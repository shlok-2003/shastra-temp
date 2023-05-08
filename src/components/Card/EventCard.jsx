import React from "react"
import { Link } from "react-router-dom"

export default function EventCard(props) {
    return (
        <div className="sm:w-72 min-[768px]:w-60 min-[980px]:w-72 rounded-2xl m-auto overflow-hidden bg-gray-300 p-3 sm:p-5 md:p-8 pb-0">
            <div className="relative min-h-[8rem] md:min-h-[10rem] lg:min-h-[13rem] rounded-b-2xl overflow-hidden">
                <img src={props.image} className="aspect-square inline-block max-h-40 md:max-h-52 w-full object-fill object-center rounded-xl" alt="core image"/>
            </div>

            <div className="h-max">
                <h1 className="capitalize text-center text-lg">{props.name}</h1>  
                <h1 className="capitalize text-center text-sm">{props.criteria}</h1>
                {
                    props.date && <h1 className="capitalize text-center text-sm pb-1">{props.date}</h1>
                }
            </div>
        </div>
    )
}