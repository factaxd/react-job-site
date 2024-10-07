import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const _404 = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-amber-500 text-6xl mb-4'/>
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-xl text-gray-600 mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-gray-800 hover:bg-gray-700 rounded-md px-4 py-2 mt-4 transition-colors duration-300"
      >
        Go Back
      </Link>
    </section>
  );
};

export default _404;
