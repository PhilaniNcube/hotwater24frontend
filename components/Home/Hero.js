import React, { Fragment } from 'react';

const Hero = () => {
  return (
    <Fragment>
      <div
        className="relative flex items-end bg-gray-700 overflow-hidden"
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: 'url("/images/hero.png")',
          minHeight: '70vh',
        }}
      >
        <div className="h-full py-4 px-3 absolute flex flex-col items-end justify-center  mx-auto container">
          <h1 className="text-4xl md:text-6xl text-white font-extrabold font-display leading-3">
            TAGLINE HERE
          </h1>
          <div>
            <p className="text-2xl text-right md:text-5xl uppercase font-light mt-2 text-white font-display">
              With short subtext here about <br />
              gas geysers and benefits
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:px-0 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex space-x-4 px-4 py-4 items-center bg-blue-500 text-white font-medium rounded-lg">
          <img src="/images/logo-02.svg" alt="" className="h-16 w-16" />
          <p className="text-3xl uppercase font-display">
            Money Saving
            <br />
            <span className="block font-normal">Statistic Here</span>
          </p>
        </div>
        <div className="flex space-x-4 px-4 py-4 items-center bg-blue-500 text-white font-medium rounded-lg">
          <img src="/images/logo-03.svg" alt="" className="h-16 w-16" />
          <p className="text-3xl uppercase font-display">
            Energy Saving
            <br />
            <span className="block font-normal">Statistic Here</span>
          </p>
        </div>
        <div className="flex space-x-4 px-4 py-4 items-center bg-blue-500 text-white font-medium rounded-lg">
          <img src="/images/logo-02.svg" alt="" className="h-16 w-16" />
          <p className="text-3xl uppercase font-display">
            100% Safety
            <br />
            <span className="block font-normal">Statistic Here</span>
          </p>
        </div>
      </div>
      <div className="py-6 px-4 md:px-0 max-w-5xl mx-auto">
        <h2 className="text-4xl uppercase text-red-500 font-display">
          SHARE SOME INFO WITH US{' '}
          <span className="text-2xl text-blue-400 font-display">
            so we can advise on the best geyser for you
          </span>
        </h2>
        <p className="text-gray-600 leading-5 font-medium">
          Ro et repera quiae nobit, cus im est, comni at am quosant offic teni
          aut optaes et at aute dolum dolendusa volorro ium vitatur, sitaturerit
          fugia volessunt liquibus, et porum quos am faceatium hic tem rersper
          aesciis qui rent opti dolupta turition et, aut prem fuga. Nam sed
          molor aceprorest estem. Uciet imin repedite sante eum fugiatia sequos
          et quiam, soluptas eum
        </p>
      </div>
    </Fragment>
  );
};

export default Hero;
