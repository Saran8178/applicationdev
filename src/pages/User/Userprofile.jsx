import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import EditProfile from './Editprofile';

const UserProfile = () => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!editing);
  };

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <div className='flex items-center mb-6'>
        <Avatar className='w-24 h-24'>
          <AvatarImage src='https://github.com/shadcn.png' alt='Profile Picture' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-4'>
          <h1 className='text-3xl font-bold'>John Doe</h1>
          <p className='text-gray-600'>johndoe@example.com</p>
        </div>
        <button 
          onClick={handleEditClick} 
          className='ml-auto p-2 text-blue-500 hover:text-blue-700 focus:outline-none'
        >
          <Edit2 size={20} />
        </button>
      </div>

      <div className='mt-10'>
        {editing ? (
          <EditProfile />
        ) : (
          <div>
            <div className='border-t border-gray-200 pt-6'>
              <h2 className='text-2xl font-semibold'>User Information</h2>
              <div className='mt-6 space-y-2'>
                <div>
                  <h3 className='font-medium'>Username</h3>
                  <p className='text-gray-600'>johndoe</p>
                </div>
                <div>
                  <h3 className='font-medium'>Email</h3>
                  <p className='text-gray-600'>johndoe@example.com</p>
                </div>
                <div>
                  <h3 className='font-medium'>Phone</h3>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className='font-medium'>Address</h3>
                  <p className='text-gray-600'>1234 Elm Street, Springfield, IL</p>
                </div>
              </div>
            </div>
            
            {/* Add this section for navigating to the resume page */}
            <div className='mt-6 text-center'>
              <Link 
                to='/user/resume' 
                className='inline-block px-4 py-2 bg-gray-200 text-black rounded-md transition-colors font-semibold'
              >
                Add or Update Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
