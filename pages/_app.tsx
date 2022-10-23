import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Globals from '../styles/Globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Globals />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
