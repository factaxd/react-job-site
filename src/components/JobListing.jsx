import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-1">{job.type}</div>
          <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
        </div>

        <div className="mb-5 text-gray-600">
          {description}
        </div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-amber-500 mb-5 hover:text-amber-600 transition-colors duration-200"
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className="text-lg font-semibold text-amber-800 mb-2">{job.salary}/Year</h3>

        <div className="border-t border-gray-200 my-5"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-amber-800 text-lg mb-3 lg:mb-0 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm transition duration-200 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
