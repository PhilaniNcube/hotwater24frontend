import React, { Fragment, useState } from 'react';
import router, { useRouter } from 'next/router';
import { Listbox, Tab, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = () => {
  const [type, setType] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ type: +type, bathrooms, kitchens });

    const bathroomFlow = parseInt(bathrooms) * 10;
    const kitchenFlow = parseInt(kitchens) * 6;

    const flow =
      parseInt(type) + parseInt(bathroomFlow) + parseInt(kitchenFlow);

    console.log({ flow });

    router.push(`/search?flow=${flow}`);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-4">
        <div className="mb-3 w-3/6">
          <label
            htmlFor="property"
            className="font-medium text-gray-700 text-sm"
          >
            Residential Or Commercial Property?
          </label>
          <select
            id="property"
            name="property"
            autoComplete="property"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
            rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Residential"
          >
            <option value={1}>Residential</option>
            <option value={2}>Commercial</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-3">
            <label
              htmlFor="bathrooms"
              className="font-medium text-gray-700 text-sm"
            >
              Number of Bathrooms
            </label>
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={bathrooms}
              min={1}
              onChange={(e) => setBathrooms(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
            placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="kitchens"
              className="font-medium text-gray-700 text-sm"
            >
              Number of Kitchens
            </label>
            <input
              id="kitchens"
              name="kitchens"
              type="number"
              value={kitchens}
              min={0}
              onChange={(e) => setKitchens(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
            placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            className="w-full md:w-3/6 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10"
            value="Save"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default Tabs;
