import React, { useState } from 'react';
import { Briefcase, Heart, User } from 'lucide-react'; // Importing icons from lucide-react

const Userdashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Example data for recent activities
  const activities = [
    "Applied to Frontend Developer position",
    "Saved Backend Developer job listing",
    "Profile updated",
    "Applied to Product Manager position"
  ];

  // Filter activities based on search term
  const filteredActivities = activities.filter(activity =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-6'>
      {/* Welcome Section */}
      <section className='mb-6'>
        <h1 className='text-3xl font-bold mb-4'>Welcome back, User!</h1>
        <p className='text-gray-600'>
          Here's a summary of your recent activity and notifications.
        </p>
      </section>

      {/* Recent Activities */}
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Recent Activities</h2>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='mb-4'>
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='Search activities...'
              className='p-2 w-full border border-gray-300 rounded-lg'
            />
          </div>
         
        </div>
      </section>

      {/* Statistics or Summary */}
      <section>
        <h2 className='text-2xl font-semibold mb-4'>Dashboard Summary</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-sm flex items-center min-h-[150px]'>
            <Briefcase size={24} className='mr-3 text-primary' />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Jobs Applied</h3>
              <p className='text-gray-700'>You have applied to 5 jobs this month.</p>
            </div>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-sm flex items-center min-h-[150px]'>
            <Heart size={24} className='mr-3 text-primary' />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Saved Jobs</h3>
              <p className='text-gray-700'>You have 3 saved job listings.</p>
            </div>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-sm flex items-center min-h-[150px]'>
            <User size={24} className='mr-3 text-primary' />
            <div>
              <h3 className='text-xl font-semibold mb-2'>Profile Completeness</h3>
              <p className='text-gray-700'>Your profile is 80% complete.</p>
            </div>
          </div>
          {/* Add more summary or statistics cards as needed */}
        </div>
      </section>
    </div>
  );
}

export default Userdashboard;
