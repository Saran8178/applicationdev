import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard,Star, Briefcase, Power, UsersIcon } from 'lucide-react';
import { Button } from '../ui/button';

const UserLeftbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
       
        navigate('/login');
    };

    const UserLinks = [
        {
            title: 'Dashboard',
            link: '/userdashboard',
            icon: LayoutDashboard
        },
        
        {
            title: 'Jobs ',
            link: '/user/jobs',
            icon: Briefcase
        },
        {
            title: 'Profile',
            link: '/user/profile',
            icon: UsersIcon
        },
        {
            title: 'Premium',
            link: '/user/premium',
            icon: Star
        }
        
    ];

    return (
        <div className='h-screen w-1/6 flex flex-col justify-between bg-white shadow-sm shadow-primary pt-10 border-r-2 border-white'>
            <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-white'>
                <NavLink to='/' className='flex items-center text-primary hover:text-primary-dark'>
                    JobQuest.in
                </NavLink>
            </div>
            <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
                {UserLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex items-center border-b-2 border-white'
                    >
                        {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
                        {data.title}
                    </NavLink>
                ))}
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button
                    className='p-5 bg-gray-100 hover:bg-red-500/10 font-bold w-full border border-white'
                    onClick={handleLogout}
                >
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} />
                        Logout
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default UserLeftbar;
