import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, DollarSign, CheckCircle } from 'lucide-react'; // Updated icon imports

const UserPremium = () => {
  return (
    <div className='h-screen w-full bg-gray-100 p-8'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Premium Membership</h1>
        <p className='text-lg text-gray-600'>Unlock exclusive features and benefits with our Premium Membership.</p>
      </div>
      
      {/* Features Section */}
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Feature 1 */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
          <Star size={48} className='text-yellow-500 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Exclusive Access</h2>
          <p className='text-gray-600 text-center'>Get early access to new features and content before anyone else.</p>
        </div>

        {/* Feature 2 */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
          <Shield size={48} className='text-blue-500 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Enhanced Security</h2>
          <p className='text-gray-600 text-center'>Enjoy enhanced security features to keep your account safe.</p>
        </div>

        {/* Feature 3 */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
          <DollarSign size={48} className='text-green-500 mb-4' /> {/* Updated icon */}
          <h2 className='text-xl font-semibold mb-2'>Discounts & Offers</h2>
          <p className='text-gray-600 text-center'>Receive exclusive discounts and special offers on various services.</p>
        </div>

        {/* Feature 4 */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
          <CheckCircle size={48} className='text-teal-500 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Priority Support</h2>
          <p className='text-gray-600 text-center'>Get priority support with faster response times and dedicated assistance.</p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className='text-center mt-12'>
        <h2 className='text-2xl font-semibold mb-4'>Ready to Upgrade?</h2>
        <p className='text-lg text-gray-600 mb-6'>Enhance your experience with our premium features today.</p>
        <Link to='/upgrade' className='bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition'>
          Upgrade Now
        </Link>
      </div>
    </div>
  );
};

export default UserPremium;
