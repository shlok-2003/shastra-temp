import React from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/footer/bottom-logo.png"
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Footer() {
    return (
        <footer className="bottom-0 mt-auto max-w-full bg-footer flex flex-col justify-center rounded-t-[3.5rem] pb-5 shadow-[0px_-13px_2px_0px_#00000040] md:pb-0 md:flex-row md:justify-around md:rounded-t-[7.25rem]">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center pt-8 sm:pt-16 pb-5 md:pb-16 px-5 sm:my-auto md:gap-x-8 md:gap-y-6 text-black">
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Events</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Vision/Missions</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Learn</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Testimonials</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Community</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Blog</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">The Team</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">FAQs</Link>
                <Link to="/" className="sm:border-2 sm:border-black sm:rounded-lg my-auto sm:py-1 sm:px-1.5 text-xs sm:text-base md:text-lg">Contact us</Link>
                {/* Can make a array and map it ----> */}
            </div>
            <div className="grid gap-2 sm:gap-5 self-center sm:my-auto">
                <img src={Logo} className="h-14 w-28 sm:h-20 sm:w-40 inline-block mx-auto"/>
                <h2 className="max-[820px]:text-sm min-[820px]:text-lg">&#169; TCET Shastra Coding Club 2023 &#169;</h2>
                <span className="flex flex-row justify-between text-black">
                    <a href="#" className=""><LinkedIn /></a>
                    <a href="#" className=""><Instagram /></a>
                    <a href="#" className=""><YouTube /></a>
                </span>
            </div>
        </footer>
    )
}