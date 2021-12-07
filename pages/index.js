import Head from 'next/head';
import { Fragment } from 'react';
import Contact from '../components/Home/Contact';
import Hero from '../components/Home/Hero';
import Tabs from '../components/Home/Tabs';
import { API_URL } from '../config';

export default function Home({ products }) {
  return (
    <Fragment>
      <Hero />
      <Tabs />
      <Contact />
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
