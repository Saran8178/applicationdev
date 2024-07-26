import React from 'react';
import { FaHome, FaUsers, FaBriefcase, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa';

const Admindashboard = () => {
  const cards = [
    {
      icon: <FaHome className='text-3xl text-blue-500' />,
      title: 'Home',
      description: 'Manage and view the main dashboard overview.',
    },
    {
      icon: <FaUsers className='text-3xl text-green-500' />,
      title: 'Users',
      description: 'View and manage user profiles and permissions.',
    },
    {
      icon: <FaBriefcase className='text-3xl text-red-500' />,
      title: 'Jobs',
      description: 'Oversee job postings and application statuses.',
    },
    {
      icon: <FaCog className='text-3xl text-gray-500' />,
      title: 'Settings',
      description: 'Configure application settings and preferences.',
    },
    {
      icon: <FaChartBar className='text-3xl text-purple-500' />,
      title: 'Analytics',
      description: 'Review detailed analytics and reports.',
    },
    {
      icon: <FaEnvelope className='text-3xl text-orange-500' />,
      title: 'Messages',
      description: 'Manage and view system messages and notifications.',
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
              <div 
                key={index} 
                className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'
              >
                <div className='mb-4'>
                  {card.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                <p className='text-gray-600'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.slice(3).map((card, index) => (
            <div 
              key={index } // Adjust key to ensure uniqueness
              className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'
            >
              <div className='mb-4'>
                {card.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
              <p className='text-gray-600'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
