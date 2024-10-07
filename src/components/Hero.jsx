import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-amber-500 sm:text-5xl md:text-6xl relative" style={{ 
              textShadow: '3px 3px 0 rgba(0, 0, 0, 0.3), 6px 6px 0 rgba(0, 0, 0, 0.2)' 
            }}>
            Become a Developer
          </h1>
          <p className="my-4 text-xl text-gray-300">
            Find the job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
