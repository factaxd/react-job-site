import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Developer Card */}
          <Card bg="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800">For Developers</h2>
            <p className="mt-4 mb-6 text-gray-600">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-amber-500 text-white rounded-lg px-6 py-3 hover:bg-amber-600 transition"
            >
              Browse Jobs
            </Link>
          </Card>

          {/* Employer Card */}
          <Card bg="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800">For Employers</h2>
            <p className="mt-4 mb-6 text-gray-600">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-amber-500 text-white rounded-lg px-6 py-3 hover:bg-amber-600 transition"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
