import React, { useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

import Logo from "../assets/footer/bottom-logo.png"
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Footer() {
    const [link, setLink] = useState([
        {"name": "Events", "to": "/"},
        {"name": "Vision/Mission", "to": "/"},
        {"name": "Learn", "to": "/"},
        {"name": "Testimonial", "to": "/"},
        {"name": "Community", "to": "/"},
        {"name": "Blog", "to": "/"},
        {"name": "The Team", "to": "/"},
        {"name": "FAQs", "to": "/"},
        {"name": "Contact us", "to": "/"}
    ])
    
    return (
        <footer className="relative z-50 bottom-0 mt-3 max-w-full bg-footer flex flex-col justify-center rounded-t-[3.5rem] pb-5 shadow-[0px_-13px_2px_0px_#00000040] md:pb-0 md:flex-row md:justify-around md:rounded-t-[7.25rem]">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center pt-8 sm:pt-16 pb-5 md:pb-16 px-5 sm:my-auto md:gap-x-8 md:gap-y-6 text-black">
                {
                    link && 
                    link.map(items => (
                        <Link 
                            key={nanoid()}
                            to={items.to}
                            className="footer-btn"
                        >
                            {items.name}
                        </Link>
                    ))
                }
            </div>

            <div className="grid gap-2 sm:gap-5 self-center sm:my-auto">
                <img src={Logo} className="h-14 w-28 sm:h-20 sm:w-40 inline-block mx-auto"/>
                <h2 className="max-[820px]:text-sm min-[820px]:text-lg">&#169; TCET Shastra Coding Club 2023 &#169;</h2>

                <span className="flex flex-row justify-between text-black">
                    <Link href="#" className="w-max h-max"><LinkedIn /></Link>
                    <Link href="#" className="w-max h-max"><Instagram /></Link>
                    <Link href="#" className="w-max h-max"><YouTube /></Link>
                </span>

            </div>
        </footer>
    )
}