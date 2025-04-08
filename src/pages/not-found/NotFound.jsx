// src/pages/NotFound.jsx
import React from 'react';
import { NavLink } from 'react-router';

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-5xl font-semibold text-teal-500 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to="/" 
          className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300">
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
