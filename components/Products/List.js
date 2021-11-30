import React from 'react';
import Image from 'next/image';

const List = ({ products }) => {
  console.log(products);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Recommended Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-md hover:shadow-lg transition p-4 rounded"
            >
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.mainImage.formats.thumbnail.url}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-semibold text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <button className="mt-1 w-32 text-md text-white font-medium bg-blue-600 px-3 py-2 rounded hover:shadow transition cursor-pointer">
                    Buy Now
                  </button>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  R{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
