import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiCheck, HiX } from "react-icons/hi"; // Ensure you import these icons if using them
import { Button } from "@/components/ui/button";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1111111111',
      address: '123 Main St',
      companyName: 'Acme Corp',
      lastLogin: '2024-07-25',
      accepted: 'pending'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St',
      companyName: 'Beta LLC',
      lastLogin: '2024-07-24',
      accepted: 'pending'
    },
    // Add more users as needed
  ]);
  
  const [popupUserId, setPopupUserId] = useState(null);
  const [popupType, setPopupType] = useState('');

  const handleAccept = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, accepted: 'accepted' } : user
    ));
  };

  const handleReject = (userId) => {
    console.log(`Rejected user with ID: ${userId}`);
    setUsers(users.map(user =>
      user.id === userId ? { ...user, accepted: 'declined' } : user
    ));
    setPopupUserId(null);
    setPopupType('');
  };

  const handlePopupOpen = (userId, type) => {
    setPopupUserId(userId);
    setPopupType(type);
  };

  const handleCancel = () => {
    setPopupUserId(null);
    setPopupType('');
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-lg text-black">Name</TableHead>
            <TableHead className="font-bold text-lg text-black">Email</TableHead>
            <TableHead className="font-bold text-lg text-black">Phone</TableHead>
            <TableHead className="font-bold text-lg text-black">Address</TableHead>
            <TableHead className="font-bold text-lg text-black">Company Name</TableHead>
            <TableHead className="font-bold text-lg text-black">Status</TableHead>
            {/* <TableHead>Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {users.map((user) => (
            <TableRow key={user.id} className="relative">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.phone}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.address}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.companyName}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {user.accepted === 'accepted' ? (
                  <p className="text-green-500 font-semibold">Accepted</p>
                ) : user.accepted === 'declined' ? (
                  <p className="text-red-500 font-semibold">Declined</p>
                ) : (
                  <>
                    <button
                      onClick={() => handleAccept(user.id)}
                      className="px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
                    >
                      <HiCheck className="text-lg" />
                    </button>
                    <button
                      onClick={() => handlePopupOpen(user.id, 'reject')}
                      className="ml-2 px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      <HiX className="text-lg" />
                    </button>
                    {popupUserId === user.id && popupType === 'reject' && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg">
                        <p className="text-sm text-gray-800 dark:text-gray-100">Do you want to reject {user.name}?</p>
                        <div className="mt-2 flex space-x-2">
                          <button
                            onClick={() => handleReject(user.id)}
                            className="px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminUsers;
