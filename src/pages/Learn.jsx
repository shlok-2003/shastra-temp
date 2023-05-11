import React, { useState, useEffect } from "react"

import YouTube from "../components/Card/LearnCard/Youtube"
import TipsTrick from "../components/Card/LearnCard/TipsTrick"

import Thumbnail1 from "../assets/learn/youtube-thumbnail2.png"
import Thumbnail2 from "../assets/learn/youtube-thumbnail1.jpeg"

export default function () {
    const [youtube, setYoutube] = useState([])
    const [tips, setTips] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setYoutube([
            { id: 1, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 2, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 3, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 4, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 5, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 6, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 7, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 8, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 9, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 10, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 11, open: false, image: Thumbnail1, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
            { id: 12, open: false, image: Thumbnail2, url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"},
        ])

        setTips([
            { id: 1, open: false, image: Thumbnail2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 2, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 3, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 4, open: false, image: Thumbnail2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 5, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 6, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 7, open: false, image: Thumbnail2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 8, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
            { id: 9, open: false, image: Thumbnail1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl. Sed euismod, justo ac ultrices ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nunc auctor nisl."},
        ])
        
        setArticles([])
    }, [])

    function handleClick(id) {
        console.log("clicked")
        setYoutube(prevState => {
            return prevState.map(item => {
                if(item.id === id) {
                    return { ...item, open: !item.open }
                }
                return item
            })
        })
    }
    
    return (
    <div className="relative z-10 min-h-[100%] ">

        <YouTube 
            youtube={youtube}
            handleClick={handleClick}
        />

        <div className="my-20 flex flex-col">
            <h1 className="uppercase mb-4 self-center font-bold md:text-xl">Tips and Trick</h1>
            
            <TipsTrick 
                tips={tips}
                handleClick={handleClick}
            />
        </div>
    </div>
    )
}