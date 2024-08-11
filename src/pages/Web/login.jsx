import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7777/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Invalid JSON response');
      }

      if (response.ok) {
        const { token, name } = data; // Assuming the backend returns token and name

        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', name); // Store user's name

        const isAdmin = email === 'admin@gmail.com';
        navigate(isAdmin ? '/admindashboard' : '/userdashboard');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-300'>
        <div className='flex items-center justify-center mb-8'>
          <Users className='h-10 w-10 text-black mr-3' />
          <h2 className='text-3xl font-semibold text-gray-800'>Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb=2'>Email</label>
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
            <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb=2'>Password</label>
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
