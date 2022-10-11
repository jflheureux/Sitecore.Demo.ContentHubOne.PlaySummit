import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps, router }: AppProps) {
  const backgroundClassName = router.pathname != '/' ? 'filtered' : '';

  return (
    <div className="screen">
      <Head>
        <title>PLAY! Summit Kiosk</title>
        <meta name="description" content="PLAY! Summit Kiosk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={'kiosk-background ' + backgroundClassName}></div>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default App;
