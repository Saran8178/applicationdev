import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaUsers, FaBriefcase, FaCog, FaChartBar, FaEnvelope, FaShieldAlt, FaSuitcase } from 'react-icons/fa'; // Import new icons

const Admindashboard = () => {
  const cards = [
    {
      icon: <FaHome className='text-3xl text-blue-500' />,
      title: 'Home',
      description: 'Manage and view the main dashboard overview.',
      link: '/', // Add link for navigation
    },
    {
      icon: <FaUsers className='text-3xl text-green-500' />,
      title: 'JobSeekers',
      description: 'Access and manage job seekers profiles, including their applications and resumes.',
      link: '/jobseekers', // Add link for navigation
    },
    {
      icon: <FaSuitcase className='text-3xl text-red-500' />, // Updated icon
      title: 'Employers',
      description: 'Oversee employer accounts, job postings, and recruitment activities.',
      link: '/employers', // Add link for navigation
    },
    {
      icon: <FaShieldAlt className='text-3xl text-gray-500' />, // Updated icon
      title: 'Security',
      description: 'Manage security settings, monitor access controls, and handle user permissions.',
      link: '/security', // Add link for navigation
    },
    {
      icon: <FaChartBar className='text-3xl text-purple-500' />,
      title: 'Analytics',
      description: 'Review detailed analytics and reports to gain insights into system performance.',
      link: '/admin/barchart', // Add link for navigation
    },
    {
      icon: <FaEnvelope className='text-3xl text-orange-500' />,
      title: 'Messages',
      description: 'Manage and view system messages, notifications, and communications.',
      link: '/messages', // Add link for navigation
    },
  ];

  return (
    <div className="p-4">
      {/* Container to center and align the cards */}
      <div className="max-w-6xl mx-auto">
        {/* Add space between the top and the first row */}
        <div className="pt-8">
          {/* First row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {cards.slice(0, 3).map((card, index) => (
              <Link to={card.link} key={index} className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition-colors'>
                <div className='mb-4'>
                  {card.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                <p className='text-gray-600'>{card.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.slice(3).map((card, index) => (
            <Link to={card.link} key={index} className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition-colors'>
              <div className='mb-4'>
                {card.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
              <p className='text-gray-600'>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
