import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-amber-600 text-white hover:bg-amber-700 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2'
            : 'bg-gray-700 text-white hover:bg-amber-600 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2';

    return (
        <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <span className="hidden md:block text-white text-2xl font-extrabold ml-2 tracking-wide">
                                Find Jobs
                            </span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="/"
                                    className={linkClass}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/jobs"
                                    className={linkClass}
                                >
                                    Jobs
                                </NavLink>
                                <NavLink
                                    to="/add-job"
                                    className={linkClass}
                                >
                                    Add Job
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
