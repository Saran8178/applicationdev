import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Edit, Trash } from 'lucide-react';

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const role = localStorage.getItem('role');
      const token = localStorage.getItem('token');

      if (role === 'ADMIN' && token) {
        try {
          const response = await axios.get('http://localhost:7777/api/auth', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setJobs(response.data);
        } catch (error) {
          console.error('Error fetching jobs:', error);
          setError('Failed to fetch jobs.');
        }
      } else {
        setError('You do not have permission to view this page or missing token.');
      }
    };

    fetchJobs();
  }, []);

  const handleAddJob = () => {
    navigate('/admin/jobform');
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.delete(`http://localhost:7777/api/auth/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setJobs(jobs.filter(job => job.id !== id));
      } catch (error) {
        console.error('Error deleting job:', error);
        setError('Failed to delete job.');
      }
    } else {
      setError('Missing token.');
    }
  };

  const handleEdit = (job) => {
    setEditMode(true);
    setEditJob(job);
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.put(`http://localhost:7777/api/auth/${editJob.id}`, editJob, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setJobs(jobs.map(job => (job.id === editJob.id ? editJob : job)));
        setEditMode(false);
        setEditJob(null);
      } catch (error) {
        console.error('Error saving job:', error);
        setError('Failed to save job.');
      }
    } else {
      setError('Missing token.');
    }
  };

  const handleChange = (e) => {
    setEditJob({ ...editJob, [e.target.name]: e.target.value });
  };

  return (
    <div className='p-6'>
      {editMode ? (
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='text-xl font-bold mb-4'>Edit Job</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700'>Title</label>
              <input
                type='text'
                name='title'
                value={editJob.title}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Description</label>
              <textarea
                name='description'
                value={editJob.description}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Location</label>
              <input
                type='text'
                name='location'
                value={editJob.location}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Status</label>
              <input
                type='text'
                name='status'
                value={editJob.status}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Salary</label>
              <input
                type='number'
                name='salary'
                value={editJob.salary}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={handleSave}
                className='bg-blue-500 text-white py-2 px-4 rounded-lg'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className='flex justify-end mb-4'>
            <button
              onClick={handleAddJob}
              className='bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center'
            >
              <span className='mr-2'>Add Job</span>
            </button>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          {jobs.length > 0 ? (
            <table className='min-w-full bg-white border border-gray-300 rounded-lg shadow-md'>
              <thead className='bg-gray-100 border-b'>
                <tr>
                  <th className='py-2 px-4 text-left text-gray-600'>ID</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Title</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Description</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Location</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Status</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Salary</th>
                  <th className='py-2 px-4 text-left text-gray-600'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className='border-b'>
                    <td className='py-2 px-4'>{job.id}</td>
                    <td className='py-2 px-4'>{job.title}</td>
                    <td className='py-2 px-4'>{job.description}</td>
                    <td className='py-2 px-4'>{job.location}</td>
                    <td className='py-2 px-4'>{job.status}</td>
                    <td className='py-2 px-4'>{job.salary}</td>
                    <td className='py-2 px-4 flex space-x-2'>
                      <button
                        className='text-blue-500 hover:text-blue-700'
                        onClick={() => handleEdit(job)} // Use the handleEdit function
                      >
                        <Edit className='w-5 h-5' />
                      </button>
                      <button
                        className='text-red-500 hover:text-red-700'
                        onClick={() => handleDelete(job.id)}
                      >
                        <Trash className='w-5 h-5' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No jobs available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AdminJobs;
