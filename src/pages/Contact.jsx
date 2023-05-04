import React, { useState } from "react"
import { motion, animatePresence } from "framer-motion"

export default function Contact() {
    const [data, setData] = useState({
        "FirstName": "",
        "LastName": "",
        "Email": "",
        "Phone": "",
        "Hackerrank Id": "",
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
    
    console.log(data)

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 h-20 sm:h-[5.5rem] md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"/>
            <div className="mt-32 mx-auto w-[90%] md:w-[50%] h-max">
                <form>
                    <div>
                        <h1>Name:</h1>
                        <div className="flex flex-col sm:space-x-4 space-y-3 sm:space-y-0 sm:flex-row">
                            <input 
                                type="text"
                                name="FirstName"
                                placeholder="First Name"
                                className="rounded-md appearance-none w-40 md:w-60 indent-2"
                                onInput={getText}
                                value={data.FirstName}
                            />
                            <input
                                type="text"
                                name="LastName" 
                                placeholder="Last Name" 
                                className="rounded-md appearance-none w-40 md:w-60 indent-2"
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
                            className="rounded-md appearance-none w-72 indent-2"  
                            onInput={getText}
                            value={data.Email}
                        />
                    </div>

                    <div>
                        <h1>Phone:</h1>
                        <input 
                            type="email"
                            name="Phone"
                            placeholder="(+00) 0000000000" 
                            className="rounded-md appearance-none w-40 indent-2"  
                            onInput={getText}
                            value={data.Email}
                        />
                    </div>

                    <div>
                        <h1>Hackerrank Id:</h1>
                        <input  
                            type="text"
                            name="Hackerrank Id"
                            className="rounded-md appearance-none w-72 indent-2"
                            onInput={getText}
                            value={data.HackerrankId}
                        />
                    </div>

                    <div>
                        <textarea 
                            name="Message"
                            placeholder="Please be as precise as possible to help us locate the correct piece of information. If possible include specific details....."
                            className="rounded-md appearance-none p-2 overflow-hidden w-[85%] md:w-[70%]"
                            onInput={getText}
                            value={data.Message}
                            rows={7}  
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}