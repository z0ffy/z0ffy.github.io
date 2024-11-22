import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import type { NextPageWithLayout } from 'gossip';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google';

type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Gossip = ({ Component, pageProps }: AppPropertiesWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  const title = `${process.env.OWNER!}'s website`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

      <GoogleAnalytics gaId="G-Q63RMLHY5H"/>
    </>
  );
};

export default Gossip;
