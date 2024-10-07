import React from 'react';
import jobsData from '../jobs.json'; // Assuming you have this in the correct relative path
import JobListing from './JobListing';

const JobListings = () => {
  // Extract the jobs array from the imported JSON data
  const { jobs } = jobsData;

  const recentJobs = jobs.slice(0, 3);

  // Ensure the jobs array is available before rendering
  if (!Array.isArray(jobs)) {
    return <p>No jobs available</p>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job}/>

          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
