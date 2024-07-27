import Topbar from '@/components/User/UserTopbar';
import Leftbar from '@/components/User/UserLeftbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Userlayout = () => {
  return (
    <>
      <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto bg-gray-50'>
        <Leftbar />
        <div className='h-screen w-5/6 flex flex-col'>
          <Topbar />
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Userlayout;
