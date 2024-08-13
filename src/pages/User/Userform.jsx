import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    jobTitle: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.jobTitle) {
      setError('Please fill out all fields.');
      return;
    }

    // Show toast notification for successful submission
    toast.success('Application submitted successfully!', {
      position: "top-center",  // Using string directly instead of `toast.POSITION.TOP_CENTER`
      autoClose: 3000, // Close the toast after 3 seconds
    });

    // Navigate to the user dashboard after submission
    setTimeout(() => {
      navigate('/userdashboard');
    }, 3000); // Delay the navigation to allow the toast to be displayed
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            className='w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter your phone number'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='address'>
            Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            className='w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter your address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='jobTitle'>
            Job Title
          </label>
          <input
            type='text'
            id='jobTitle'
            name='jobTitle'
            className='w-full p-2 border border-gray-300 rounded-md'
            placeholder='Enter the job title'
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer /> {/* Include the ToastContainer */}
    </div>
  );
};

export default Userform;
