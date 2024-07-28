import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaMapMarkerAlt, FaSuitcase, FaBriefcase, FaPlus, FaCommentDots } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
      <div className="h-[10rem] flex w-full justify-center items-center gap-4">
        {/* Search Job Title Input with Icon */}
        <div className='relative w-30'>
          <Input 
            type="text" 
            placeholder="Job Title" 
            className='pl-10' 
          />
          <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500' size={24} />
        </div>
        
        {/* Location Input with Icon */}
        <div className='relative w-30'>
          <Input 
            type="text" 
            placeholder="Location" 
            className='pl-10' 
          />
          <FaMapMarkerAlt className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500' size={24} />
        </div>

        <Button type="submit" className='w-30'>Search Job</Button>
      </div>

      <div className="flex justify-center mt-8 gap-8">
        {/* Full Time Jobs Card */}
        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90 flex items-start">
          <FaSuitcase className='text-3xl text-blue-500 mr-4 flex-shrink-0' />
          <div>
            <h2 className="text-xl font-semibold mb-2">Full Time Jobs</h2>
            <p className="text-sm">Discover full-time roles with comprehensive benefits, career growth, and a dynamic work environment for professional task.</p>
          </div>
        </div>

        {/* Part-time Jobs Card */}
        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90 flex items-start">
          <FaBriefcase className='text-3xl text-green-500 mr-4 flex-shrink-0' />
          <div>
            <h2 className="text-xl font-semibold mb-2">Part-time Jobs</h2>
            <p className="text-sm">Explore flexible part-time opportunities tailored for modern lifestyles, offering autonomy and work-life balance.</p>
          </div>
        </div>

        {/* Post a Job Card */}
        <div className="card w-64 h-40 mx-4 bg-white rounded-lg p-4 shadow-md opacity-90 flex items-start">
          <FaPlus className='text-3xl text-orange-500 mr-4 flex-shrink-0' />
          <div>
            <h2 className="text-xl font-semibold mb-2">Post a Job</h2>
            <p className="text-sm">Effortlessly advertise vacancies with streamlined platforms, reaching diverse talent pools for optimal hiring efficiency.</p>
          </div>
        </div>
      </div>

      <div className='text-green-400 font-bold flex justify-center items-center py-20'>
        <Link to='/user/resume' className='text-blue-500'>
          Post your Resume
        </Link>
        <p className='text-black'>
          - It takes only a few seconds
        </p>
      </div>

      {/* Feedback Icon */}
      <div className='flex justify-end items-end pr-20'>
        <Link to='/user/feedback'>
          <FaCommentDots size={32} className="text-black transition-colors duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
