import React from "react"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"

import { FaAngleDown } from "react-icons/fa"
import QuestionMark from "../../assets/home/questionMark.png"
// import { motion } from "framer-motion"

function Temp(props) {
    return (
        <p 
            className={`${props.style} text-xs relative z-[5] md:text-xl text-justify my-auto mr-5 col-span-3 p-0 font-normal`}
        >
            {props.faq.question}
            <FaAngleDown 
                onClick={props.handleClick}
                className={props.faq.open ? `faq-btn rotate-180` : `faq-btn animate-fall -translate-y-2`}
            />
            
            {
                props.faq.open &&
                <p className="font-medium">
                    {props.faq.answer}
                </p>
            }
        </p>
    )
}

export default function FAQ() {
    const [faq, setFaq] = React.useState([
        { "id": 1, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
        { "id": 2, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
        { "id": 3, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
    ])
    
    function handleClick(id) {
        setFaq(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    item.open = !item.open
                }
                return item
            })
        })
    }

    return (
        <div className="relative z-10 w-full flex flex-col items-center my-20 lg:mb-28">
            <span className="ml-5 md:ml-10 select-none inline-block mx-auto w-max font-bold text-xl md:text-3xl pb-5 gradient-txt">FAQ's</span>
            <div className="grid grid-cols-4 gap-1 md:gap-6 pl-5 md:pl-10 my-auto">
                
                {
                    faq && 
                    faq.map((item, index) => (
                        <Temp 
                            key={nanoid()}
                            faq={item}
                            handleClick={() => handleClick(item.id)}
                            style={"border border-black"}
                        />
                    ))
                }
                
                <div className="absolute right-2 min-[500px]:right-10 sm:right-10 md:right-10 top-20 sm:top-10 z-10 flex items-center justify-center">
                    <img 
                        src={QuestionMark} 
                        className=" h-28 sm:h-32 md:h-48 lg:h-60 my-auto  mr-2"
                    />
                </div>
            </div>
        </div>
    )
}