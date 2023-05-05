import React, { useState } from "react"
import { motion } from "framer-motion"

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default function Contact() {
    const [data, setData] = useState({
        "FirstName": "",
        "LastName": "",
        "Email": "",
        "Phone": "",
        "HackerrankId": "",
        "Message": ""
    })

    function getText(event) {
        const {name, value} = event.target

        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>
            <div className="fixed top-20 bg-transparent backdrop-blur-2xl backdrop-filter h-full w-full"></div>

            <div className="mt-32">
                <form >  
                    <div className="mx-auto w-[90%] md:w-[50%] h-max space-y-5 relative z-[8]">
                        <div>
                            <h1>Name:</h1>
                            <div className="flex flex-col sm:space-x-4 space-y-3 sm:space-y-0 sm:flex-row">
                                <input 
                                    type="text"
                                    name="FirstName"
                                    placeholder="First Name"
                                    className=" w-40 md:w-60 input-box"
                                    onInput={getText}
                                    value={data.FirstName}
                                />
                                <input
                                    type="text"
                                    name="LastName" 
                                    placeholder="Last Name" 
                                    className="w-40 md:w-60 input-box"
                                    onInput={getText}
                                    value={data.LastName}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <h1>Email:</h1>
                            <input 
                                type="email"
                                name="Email"
                                placeholder="myname@example.com" 
                                className="w-72 input-box"  
                                onInput={getText}
                                value={data.Email}
                            />
                        </div>

                        <div>
                            <h1>Phone:</h1>
                            <input 
                                type="tel"
                                name="Phone"
                                placeholder="(+00) 0000000000" 
                                className="w-40 input-box"  
                                onInput={getText}
                                value={data.Phone}
                            />
                        </div>

                        <div>
                            <h1>Hackerrank Id:</h1>
                            <input  
                                type="text"
                                name="HackerrankId"
                                className="w-72 input-box"
                                onInput={getText}
                                value={data.HackerrankId}
                            />
                        </div>

                        <div>
                            <textarea 
                                name="Message"
                                placeholder="Please be as precise as possible to help us locate the correct piece of information. If possible include specific details....."
                                className="p-2 overflow-hidden w-[85%] md:w-[70%] input-box"
                                onInput={getText}
                                value={data.Message}
                                rows={7}  
                            />
                            <div className="mt-3 space-x-6">   
                                <motion.button      
                                    type="submit"       
                                    className="rounded-lg bg-home font-bold text-pri-orange text-lg px-4 py-2 shadow-[0_8px_10px_0_rgba(0,0,0,0.25)] hover:shadow-[0_8px_10px_0_rgba(0,0,0,0.35)] transition duration-300 ease-in-out"   
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // {/* onSubmit={handleSubmit} */}
                                >
                                    Submit
                                </motion.button>
                                <motion.button      
                                    type="reset"       
                                    className="rounded-lg bg-home font-bold text-pri-blue text-lg px-4 py-2 shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]  hover:shadow-[0_8px_10px_0_rgba(0,0,0,0.35)] transition duration-300 ease-in-out"   
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Reset
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}