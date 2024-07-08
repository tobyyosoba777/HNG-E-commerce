// src/Components/Notification.jsx
import React from 'react';

const Notification = ({ message, show }) => {
  return (
    <div className={`fixed top-4 right-4 p-4 bg-green-500 text-white rounded shadow-md transition-transform ${show ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
      {message}
    </div>
  );
};

export default Notification;
