import React from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/footer/bottom-logo.png"
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full max-w-full bg-footer flex flex-col justify-center rounded-t-[3.5rem] pb-5 shadow-[0px_-13px_2px_0px_#00000040] md:pb-0 md:flex-row md:justify-around md:rounded-t-[7.25rem]">
            <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 sm:gap-4 text-center pt-8 sm:pt-16 pb-5 md:pb-16 px-5 sm:my-auto md:gap-x-8 md:gap-y-6">
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Events</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Vision/Missions</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Learn</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Testimonials</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Community</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Blog</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">The Team</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">FAQs</Link>
                <Link className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Contact us</Link>
            </div>
            <div className="grid gap-5 self-center sm:my-auto">
                <img src={Logo} className="h-20 w-40 inline-block mx-auto"/>
                <h2 className="sm:text-sm md:text-base">&#169; TCET Shastra Coding Club 2023 &#169;</h2>
                <span className="flex flex-row justify-between">
                    <a href="#" className=""><LinkedIn /></a>
                    <a href="#" className=""><Instagram /></a>
                    <a href="#" className=""><YouTube /></a>
                </span>
            </div>
        </footer>
    )
}