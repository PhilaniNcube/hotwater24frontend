import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative flex h-80 md:h-96 items-end mt-8 rounded shadow-sm mx-2 md:max-w-7xl  md:mx-auto bg-gray-700 overflow-hidden"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url("/images/bathroom.jpg")',
      }}
    >
      <div className="h-36 py-4 px-3 absolute flex flex-col justify-center bg-gray-800 bg-opacity-70 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-extrabold">
          Hotwater 24
        </h1>
        <p className="text-sm md:text-lg font-medium mt-2 text-white">
          Gas Hot water heaters
        </p>
      </div>
    </div>
  );
};

export default Hero;
