import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { nanoid } from "nanoid"

import Logo from "../assets/header/shastra-logo-home.png"
import Text from "../assets/header/shastra-logo-home-text.png"


import MenuIcon from "@mui/icons-material/Menu"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
import { Box, Drawer } from "@mui/material"

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
        main: '#FF9201',
        darker: '#053e85',
        },
        neutral: {
        main: '#64748B',
        contrastText: '#fff',
        },
    },
});

export default function Header() {
    const [drawer, setDrawer] = useState(false)

    return (
        <header className="fixed backdrop-filter backdrop-blur-sm top-0 flex flex-row w-full px-1 text-black bg-transparent sm:px-5 pt-3 pb-2 sm:justify-between">
            <Link to="/" className="w-max flex items-center outline-none">
                <img src={Logo} className="inline-block h-[43px] w-[86px] sm:h-[63px] sm:w-[126px]"/>
                {/* <img src={Text} className="h-[43px] w-[63px] inline-block my-auto"/> */}        {/* If the text is need in img, then use this */}
                <span className="text-base font-[500] my-auto mt-auto ml-1 inline-block sm:font-medium sm:text-xl md:ml-2 ">
                    <h1 className="tracking-wider">TCET's</h1>
                    <h1 className="tracking-normal">शSTRA</h1>
                </span>
            </Link>

            <button 
                className="ml-auto mr-2 border-2 border-black h-min my-auto rounded-lg md:hidden"
                onClick={() => setDrawer(true)}
            >
                <ThemeProvider theme={theme}>
                    <MenuIcon color="primary" fontSize="large" />
                </ThemeProvider>
            </button>

            <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)} className="md:hidden">
                <Box width="100px" m={5} textAlign="center" role="presentation">
                    {
                        [["Home", "/"], ["Team", "team"], ["Events", "events"], ["Learn", "learn"], ["Contact us", "contact"]].map(page => (
                            <NavLink 
                                key={nanoid()}
                                to={`${page[1]}`} 
                                className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
                            >
                                {page[0]}
                            </NavLink>
                        ))
                    }
                </Box>
            </Drawer>

            <nav className="hidden my-auto uppercase font-medium text-[20px] md:block md:space-x-2 lg:space-x-6 xl:space-x-8">
                {
                    [["Home", "/"], ["Team", "team"], ["Events", "events"], ["Learn", "learn"]].map(page => (
                        <NavLink 
                            key={nanoid()}
                            to={`${page[1]}`} 
                            className={({isActive}) => isActive ? "header-btn header-btn-act" : "header-btn"}
                        >
                            {page[0]}
                        </NavLink>
                    ))
                }
            </nav>

            <NavLink
                to="/contact"
                className="hidden my-auto text-center font-[400] border-2 border-black rounded-full md:block md:px-2 md:py-[1px] lg:px-4 lg:py-0.5 lg:text-[20px]"
            >
                Contact us
            </NavLink>
        </header>
    )
}

{
    // For the SwipeableDrawer
    /* <NavLink 
        to="/"
        className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
    >
        Home
    </NavLink>

    <NavLink 
        to="team"
        className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
    >
        Team
    </NavLink>

    <NavLink 
        to="events"
        className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
    >
        Events
    </NavLink>

    <NavLink 
        to="learn"
        className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
    >
        Learn
    </NavLink>

    <NavLink 
        to="contact"
        className={({isActive}) => isActive ? "header-btn-drawer header-btn-drawer-act" : "header-btn-drawer"}
    >
        Contact us
    </NavLink> */}

{
    // For nav
    /* <NavLink 
        to="/"
        className={({isActive}) => isActive ? "header-btn header-btn-act" : "header-btn"}
    >
        Home
    </NavLink>
    <NavLink 
        to="team"
        className={({isActive}) => isActive ? "header-btn header-btn-act" : "header-btn"}
    >
        Team
    </NavLink>
    <NavLink 
        to="events"
        className={({isActive}) => isActive ? "header-btn header-btn-act" : "header-btn"}
    >
        Events
    </NavLink>
    <NavLink 
        to="learn"
        className={({isActive}) => isActive ? "header-btn header-btn-act" : "header-btn"}
    >
        Learn
    </NavLink> */}