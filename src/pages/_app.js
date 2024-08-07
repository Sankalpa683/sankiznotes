import '@/styles/globals.css'
import Nav from './nav.js'
import Footer from './footer.js'
import Head from 'next/head';
import Router from 'next/router';
import Script from 'next/script'


import NProgress from 'nprogress'; // import the library
import 'nprogress/nprogress.css'; // import the css

Router.events.on('routeChangeStart', () => {
  NProgress.start(); // start the progress bar
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done(); // complete the progress bar
});

Router.events.on('routeChangeError', () => {
  NProgress.done(); // if an error occurs, also complete the progress bar
});

export default function App({ Component, pageProps }) {  
  return <> 
  <Head>
    <title>Informal Study - Comprehensive Study Notes for NEB 12th Grade Students in Nepal | Informal Study </title>
    <meta name="google-adsense-account" content="ca-pub-6643840488848439" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6643840488848439"
     crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js" integrity="sha512-/CzcPLOqUndTJKlWJ+PkvFh2ETRtkrnxwmULr9LsUU+cFLl7TAOR5gwwD8DRLvtM4h5ke/GQknlqQbWuT9BKdA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <meta name="google-site-verification" content="hgKlR-gh1kqW6e6_8xl2kSzCsHtRMiGGrqAlQAHl1w4" />
            <meta name="description" content="informalstudy.info helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with Informal Study. Master key concepts, prepare for exams, and excel with Informal Study. Get comprehensive study materials, notes, and resources tailored for students in Nepal at informalstudy.info" />
        <meta name="keywords" content="NEB, Nepal, 12th Grade, Study Notes, Exam Preparation, Informal Study" />
        <meta property="og:title" content="Informal Study - Comprehensive Study Notes for NEB 12th Grade Students in Nepal" />
        <meta property="og:description" content="Informal Study helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with Informal Study. Master key concepts, prepare for exams, and excel with Informal Study. Get comprehensive study materials, notes, and resources tailored for students in Nepal at informalstudy.info" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://informalstudy.info" />
        <meta property="og:image" content="https://informalstudy.info/logo.png" />
        <meta property="og:site_name" content="Informal Study" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Informal Study - Comprehensive Study Notes for NEB 12th Grade Students in Nepal" />
        <meta name="twitter:description" content="Informal Study helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with Informal Study. Master key concepts, prepare for exams, and excel with Informal Study. Get comprehensive study materials, notes, and resources tailored for students in Nepal at informalstudy.info" />
        <meta name="twitter:image" content="https://informalstudy.info/logo.png" />
        

  <link rel='icon' href='/ico.png'></link>
  </Head>
  <Nav/>
  <Component {...pageProps} /> 
  <Footer/>
       <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6643840488848439"
     crossorigin="anonymous"></Script>
<!-- InformalStudy -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6643840488848439"
     data-ad-slot="9718400583"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<Script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</Script>
  </>
}
