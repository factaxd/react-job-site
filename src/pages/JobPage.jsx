import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?');

    if (!confirm) return;
    deleteJob(jobId);
    toast.error('Job Deleted Successfully!');
    navigate('/jobs');
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-gray-700 hover:text-gray-800 flex items-center"
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  {job.title}
                </h1>
                <div className="text-gray-700 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className='text-gray-500 mr-1' />
                  <p className="text-gray-600">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-gray-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4 text-gray-600">
                  {job.description}
                </p>

                <h3 className="text-gray-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4 text-gray-600">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Company Info</h3>

                <h2 className="text-2xl text-gray-800">{job.company.name}</h2>

                <p className="my-2 text-gray-600">
                  {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl text-gray-800">Contact Email:</h3>

                <p className="my-2 bg-gray-100 p-2 font-bold text-gray-800">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl text-gray-800">Contact Phone:</h3>

                <p className="my-2 bg-gray-100 p-2 font-bold text-gray-800">{job.company.contactPhone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-gray-800 hover:bg-gray-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-gray-300 mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-300 mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
