import Loading from '../components/Loading';
import '../styles/globals.css';
import { useEffect } from 'react'
import Router from 'next/router'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [loadingSpinner, setloadingSpinner] = useState(true);
  useEffect(() => {
    setloadingSpinner(false)
  }, [])
  Router.events.on('routeChangeStart', () => {
    setloadingSpinner(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setloadingSpinner(false)
  })
  return <>
    {loadingSpinner && <Loading />}
    <Component {...pageProps} />
  </>
}

export default MyApp;
