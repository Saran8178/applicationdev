import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

const Home = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
      <div className="h-[10rem] flex w-full justify-center items-center gap-4">
        {/* Search Job Title Input with Icon */}
        <div className='relative w-30'>
          <Input 
            type="text" 
            placeholder="Job Title" 
            className='pl-10' // Add padding to make space for the icon
          />
          <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500' size={20} />
        </div>
        
        {/* Location Input with Icon */}
        <div className='relative w-30'>
          <Input 
            type="text" 
            placeholder="Location" 
            className='pl-10' // Add padding to make space for the icon
          />
          <FaMapMarkerAlt className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500' size={20} />
        </div>

        <Button type="submit" className='w-30'>Search Job</Button>
      </div>

      <div className="flex justify-center mt-8 gap-8">
        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90">
          <h2 className="text-xl font-semibold mb-2">Full Time Jobs</h2>
          <p className="text-sm">Discover full-time roles with comprehensive benefits, career growth, and a dynamic work environment for professional advancement.</p>
        </div>

        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90">
          <h2 className="text-xl font-semibold mb-2">Part-time Jobs</h2>
          <p className="text-sm">Explore flexible part-time opportunities tailored for modern lifestyles, offering autonomy and work-life balance.</p>
        </div>

        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90">
          <h2 className="text-xl font-semibold mb-2">Post a Job</h2>
          <p className="text-sm">Effortlessly advertise vacancies with streamlined platforms, reaching diverse talent pools for optimal hiring efficiency.</p>
        </div>
      </div>

      <div className='text-green-400 font-bold flex justify-center items-center py-20'>
        <Link to='/user/resume' className='text-blue-500 '>
          Post your Resume
        </Link>
        <p className='text-black'>
            - It takes only a few seconds
          </p>
      </div>
    </div>
  );
};

export default Home;
