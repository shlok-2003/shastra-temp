import React from "react"
import { Link } from "react-router-dom"

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"

export default function URLNotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-52">
            <h1 className="mx-3">
                <span className="text-lg font-[400] text-center sm:text-2xl">
                    <strong className="text-xl">OOPS!!</strong>, the page you are looking for is not found
                </span>
                <SentimentVeryDissatisfiedIcon className="ml-1 relative bottom-1" fontSize="medium"/>
            </h1>
            <Link to="/" className="mt-5  border-2 border-black text-lg">
                <button className="px-2">Return To Home</button>
            </Link>
        </div>
    )
}