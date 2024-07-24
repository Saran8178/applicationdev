import React from 'react'
import {ModeToggle} from '../mode-toggle';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const LinksData = [
        {
            title: "Home",
            link: '/'
        },
        {
            title: "Login",
            link: '/login'
        },
        {
            title :"Jobs",
            link :'/jobs'
        },
        {
            title: "Register",
            link: '/register'
        }
        
    ]
    return (
        <div>
            <div class="w-full h-[8vh]  flex flex-row justify-center items-center bg-primary/100">
                {/* //logo */}
                <div class='h-full w-1/4 flex flex-row justify-center items-center bg-primary/100 text-3x1 font-bold gap-10 text-white'>
                    JobQuest
                </div>
                <div class='h-full w-3/4 flex flex-row justify-center items-center bg-primary/100 gap-10 text-white'>
                    {
                        LinksData.map((data, index) => (
                            <li key={index} className='list-none'>
                                <NavLink to={data.link}>
                                    {data.title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <ModeToggle />
                </div>
            </div>

        </div>
    )
}

export default Navbar
