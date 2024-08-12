import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7777/api/auth/login', {
        email,
        password
      });

      const { token, name, role } = response.data;

      console.log('Login response:', response.data); // Log the entire response data

      // Store token, name, and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);

      // Log true to the console upon successful login
      console.log(true);

      // Navigate based on role
      if (role === 'ADMIN') {
        navigate('/admindashboard');
      } else {
        navigate('/userdashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response || error.message); // Log error details
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');

    // Log false to the console upon logout
    console.log(false);

    navigate('/login');
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-300'>
        <div className='flex items-center justify-center mb-8'>
          <Users className='h-10 w-10 text-black mr-3' />
          <h2 className='text-3xl font-semibold text-gray-800'>Login</h2>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email'
              className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-6 relative'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb-2'>Password</label>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='••••••••'
              className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
            >
              {showPassword ? <EyeOff className='h-5 w-5 text-gray-500' /> : <Eye className='h-5 w-5 text-gray-500' />}
            </button>
          </div>
          <button
            type='submit'
            className='w-full bg-black text-white py-3 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
