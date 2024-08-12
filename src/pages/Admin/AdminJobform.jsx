import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    companyId: '', // Use companyId here
    location: '',
    status: 'Active',
    description: '',
    salary: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      await axios.post('http://localhost:7777/api/auth/jobs', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Corrected here
        },
      });

      navigate('/admin/jobs');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to add job. Please try again.');
    }
  };

  return (
    <div className="p-4 bg-white border rounded shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Add Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Job Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyId">
            Company ID
          </label>
          <input
            id="companyId"
            name="companyId"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.companyId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full px-3 py-2 border rounded"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border rounded"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
            Salary
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Job
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default AdminJobForm;
