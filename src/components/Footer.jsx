import React from "react"

import Logo from "../assets/footer/bottom-logo.png"

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full max-w-full bg-[#EBEBEB] flex flex-row">
            <div className="">

            </div>
            <div className="grid">
                <img src={Logo} />
            </div>
        </footer>
    )
}