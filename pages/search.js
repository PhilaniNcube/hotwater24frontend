import React, { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import List from '../components/Products/List';
import { API_URL } from '../config';
import qs from 'qs';

const search = ({ products, flow }) => {
  console.log(flow);

  return (
    <Fragment>
      <Hero />
      <div className="max-w-7xl mx-auto mt-4 px-4 md:px-0">
        <h2 className="font-medium text-xl text-gray-600">
          Based on your property we recommend a water heater that has a flow
          rate of at least{' '}
          <span className="text-blue-600 font-bold">{`${flow} Litres/Minute`}</span>
        </h2>
        <p className="text-lg text-muted text-gray-500">
          Below are some suggestions on some water heaters based on your
          property
        </p>
      </div>
      <List products={products} />
    </Fragment>
  );
};

export default search;

export async function getServerSideProps({ query: { flow } }) {
  const query = qs.stringify({
    _where: {
      flowRate_$gte: 15,
    },
  });

  const res = await fetch(
    `${API_URL}/products?flowRate_gte=${flow}&_sort=flowRate:ASC`,
  );
  const products = await res.json();

  return {
    props: { products, flow },
  };
}
