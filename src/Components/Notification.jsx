// Notification.jsx
import React, { useState, useEffect } from 'react';

const Notification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed px-4 py-2 text-white bg-green-500 rounded shadow-lg top-4 right-4">
      {message}
    </div>
  );
};

export default Notification;
