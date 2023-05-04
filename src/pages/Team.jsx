import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import Thumbnail from "../assets/home/Thumbnail.png"

export default function Team() {
    const [core, setCore] = useState(null)
    
    useEffect(() => {
        setCore([Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail, Thumbnail])
    }, [])

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="mt-32 mb-16 w-full md:w-[80%] grid grid-cols-4 gap-10 bg-red-400 mx-auto ">
                
            </div>
        </div>
    )
}

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