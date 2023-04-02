import Script from 'next/script'

import AppContext from '@context/AppContext'
import Header from '@components/Header';

import useInitialState from '@hooks/useInitialState'

import '@styles/global.css'


export default function App({ Component, pageProps }) {

  const initialState = useInitialState();

  return( 
    <AppContext.Provider value={initialState}>
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X3FKZHHZ3T"/>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X3FKZHHZ3T');
        `}
        </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
