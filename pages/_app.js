import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
