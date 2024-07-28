// src/components/ResumeUpload.js
import React, { useState } from 'react';
import { CloudUpload, CheckCircle, XCircle } from 'lucide-react'; // Optional: For icons

const UserResume = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setUploadStatus(null); // Reset status on new file selection
  };

  const handleUpload = () => {
    if (!file) {
      setUploadStatus('error');
      return;
    }

    // Simulate file upload process
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadStatus('success');
      // Here you can implement actual upload logic with your API
      // e.g., using `fetch` or `axios` to send `file` to the server
    }, 2000); // Simulate a delay
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Upload Your Resume</h1>
      
      <div className='bg-white p-4 rounded-lg shadow-sm'>
        <input
          type='file'
          accept='.pdf,.doc,.docx'
          onChange={handleFileChange}
          className='mb-4 p-2 border border-gray-300 rounded-lg w-full'
        />
        <button
          onClick={handleUpload}
          className='w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark'
        >
          <CloudUpload size={20} className='inline mr-2' />
          Upload
        </button>

        {uploadStatus === 'uploading' && (
          <p className='mt-4 text-yellow-600'>Uploading...</p>
        )}
        {uploadStatus === 'success' && (
          <p className='mt-4 text-green-600 flex items-center'>
            <CheckCircle size={20} className='mr-2' />
            Upload successful!
          </p>
        )}
        {uploadStatus === 'error' && (
          <p className='mt-4 text-red-600 flex items-center'>
            <XCircle size={20} className='mr-2' />
            Please select a file to upload.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserResume;
