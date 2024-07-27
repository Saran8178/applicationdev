import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='mt-6 p-4 bg-gray-50 rounded-lg shadow-sm'>
      <h2 className='text-2xl font-semibold mb-4'>Edit Profile</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {errors.username && <p className='mt-1 text-sm text-red-600'>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {errors.confirmPassword && <p className='mt-1 text-sm text-red-600'>{errors.confirmPassword}</p>}
        </div>

        <button
          type='submit'
          className='w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
