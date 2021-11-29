import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import Tabs from '../components/Home/Tabs';
import { API_URL } from '../config';

export default function Home({ products }) {
  return (
    <Fragment>
      <Hero />
      <div className="max-w-7xl mt-4 mx-auto">
        <Tabs />
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return {
    props: { products },
  };
}
