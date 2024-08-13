import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:7777/api/auth');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs.');
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = () => {
    navigate('/user/form');
  };

  return (
    <div className='p-6'>
      {error && <p className='text-red-500'>{error}</p>}
      {jobs.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {jobs.map((job) => (
            <div key={job.id} className='bg-white p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-bold mb-2'>{job.title}</h2>
              <p className='text-gray-700'>{job.description}</p>
              <p className='text-gray-700'><strong>Location:</strong> {job.location}</p>
              <p className='text-gray-700'><strong>Status:</strong> {job.status}</p>
              <p className='text-gray-700'><strong>Salary:</strong> {job.salary}</p>
              <div className='flex justify-center mt-4'>
                <button
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                  onClick={handleApplyClick}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default UserJobs;
