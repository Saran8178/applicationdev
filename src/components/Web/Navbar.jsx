import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; 

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
      title: "Jobs",
      link: '/user/jobs'
    },
    {
      title: "Register",
      link: '/register'
    }
  ];

  return (
    <div>
      <div className="w-full h-[8vh] flex flex-row justify-center items-center bg-primary border-b-green-300">
        {/* Logo with Icon */}
        <div className="h-full w-1/4 flex flex-row justify-center items-center bg-primary/100 font-bold gap-2 text-white text-2xl">
          <FaBriefcase className="text-white" /> {/* Icon */}
          <span><strong>Job</strong>Quest</span>
        </div>
        <div className="h-full w-3/4 flex flex-row justify-center items-center bg-primary/100 gap-10 text-white">
          {LinksData.map((data, index) => (
            <li key={index} className="list-none">
              <NavLink to={data.link}>
                {data.title}
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
