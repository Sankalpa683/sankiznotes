import '@/styles/globals.css'
import Nav from './nav.js'
import Footer from './footer.js'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return <> 
  <Head>
  <link rel='icon' href='/ico.png'></link>
  </Head>
  <Nav/>
  <Component {...pageProps} /> 
  <Footer/>
  </>
}
