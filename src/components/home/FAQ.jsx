import React, { useEffect } from "react"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"

import { FaAngleDown } from "react-icons/fa"
import QuestionMark from "../../assets/home/questionMark.png"
import { Accordion, AccordionSummary, AccordionDetails }  from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// function Accordion(props) {
//     return (    
//         <div className="relative z-[5] my-auto mr-5 col-span-3 bg-white">
//             <p className="text-justify text-xs md:text-xl font-normal">
//                 {props.faq.question}
//                 <FaAngleDown 
//                     onClick={props.handleClick}
//                     className={props.faq.open ? `faq-btn rotate-180` : `faq-btn animate-fall -translate-y-2`}
//                 />
                
//                 {
//                     props.faq.open &&
//                     <p className="font-medium">
//                         {props.faq.answer}
//                     </p>
//                 }
//             </p>
//         </div>
//     )
// }

function Box(props) {
    return (
        <Accordion 
            className="col-span-3 w-full"
            sx={{background: "#D3D3D3",}}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{fontSize: "40px", color: "black"}} fontSize={"bolder"}/>} aria-controls="panel1a-content" id="panel1a-header">
                <p className="text-justify">{props.question}</p>
            </AccordionSummary>

            <AccordionDetails>
                <p className="text-justify text-sm font-bold">{props.answer}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default function FAQ() {
    const [faq, setFaq] = React.useState(null)

    useEffect(() => {
        setFaq([
            { "id": 1, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
            { "id": 2, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
            { "id": 3, "open": false, "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" },
        ])
    }, [])
    
    // function handleClick(id) {
    //     setFaq(prevState => {
    //         return prevState.map(item => {
    //             if (item.id === id) {
    //                 item.open = !item.open
    //             }
    //             return item
    //         })
    //     })
    // }

    return (
        <div className="relative z-10 w-full flex flex-col items-center my-20 lg:mb-28">
            <span className="ml-5 md:ml-10 select-none inline-block mx-auto w-max font-bold text-xl md:text-3xl pb-5 gradient-txt">FAQ's</span>
            <div className="grid grid-cols-4 gap-1 md:gap-6 pl-5 md:pl-10 my-auto">
                {
                    faq && 
                    faq.map(item => (
                        <Box 
                            key={nanoid()}
                            answer={item.answer}
                            question={item.question}
                        />
                    ))
                }
                <div className="absolute right-2 min-[500px]:right-10 sm:right-10 md:right-10 lg:right-24 top-20 sm:top-10 z-10 flex items-center justify-center">
                    <img 
                        src={QuestionMark} 
                        className=" h-28 sm:h-32 md:h-48 lg:h-60 my-auto  mr-2"
                    />
                </div>
            </div>
        </div>
    )
}