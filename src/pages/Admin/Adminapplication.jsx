import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminApplication = () => {
  const [formData, setFormData] = useState({
    status: '',  // New field added for status
    jobId: '',   // New field added for jobId
    name: '',
    email: '',
    phone: '',
    address: '',
    companyName: ''
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
        await axios.post('http://localhost:7777/api/auth/applications', formData, {

        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/admin/applications');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="p-4 bg-white border rounded shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Submit Application</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="status">Status</label>
          <input
            id="status"
            name="status"
            type="text"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter status"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="jobId">Job ID</label>
          <input
            id="jobId"
            name="jobId"
            type="text"
            value={formData.jobId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter Job ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter company name"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Application
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default AdminApplication;
