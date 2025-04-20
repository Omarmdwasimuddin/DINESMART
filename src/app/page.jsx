'use client'; 
import React, { useState } from 'react';
import Alert from './Components00/Alert';

const Page = () => {
  
  const [alert, setAlert] = useState({
    isVisible: false,
    title: '',
    message: '',
  });

  const showAlert = (title, message) => {
    setAlert({
      isVisible: true,
      title,
      message,
    });
  };


  const closeAlert = () => {
    setAlert({
      isVisible: false,
      title: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-gray-900 text-center text-xl font-bold mb-6">
        My Home Page
      </h1>

      
      <button
        onClick={() => showAlert('Eid Offer!', 'This is a custom alert box.')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Show Offer!!!
      </button>

      
      <Alert
        title={alert.title}
        message={alert.message}
        isVisible={alert.isVisible}
        onClose={closeAlert}
      />
      
    </div>
  );
};

export default Page;