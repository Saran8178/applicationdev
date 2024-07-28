import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Eye, EyeOff } from 'lucide-react'; // Import the eye icons from lucide-react

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Example authentication logic (replace with your actual logic)
    const isAuthenticated = await authenticateUser(email, password);

    if (isAuthenticated) {
      // Conditional navigation based on email
      if (email === 'admin@gmail.com') {
        navigate('/admindashboard');
      } else {
        navigate('/userdashboard');
      }
    } else {
      // Handle login failure (show error message)
      alert('Invalid email or password');
    }
  };

  // Simulate an authentication function
  const authenticateUser = async (email, password) => {
    // Replace this with actual API call or authentication logic
    return email && password; // Just a dummy check for example
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-300'>
        <div className='flex items-center justify-center mb-8'>
          <Users className='h-10 w-10 text-black mr-3' /> {/* Users icon */}
          <h2 className='text-3xl font-semibold text-gray-800'>Login</h2>
        </div>
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
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter your password'
              className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12' // Adjust padding-right to make space for the icon
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
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
