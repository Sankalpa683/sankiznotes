import '@/styles/globals.css'
import Nav from './nav.js'
import Footer from './footer.js'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  
  return <> 
  <Head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
    <title>MozeeNotes - Comprehensive Study Notes for NEB 12th Grade Students in Nepal | MozeeeNotes </title>
    <meta name="google-site-verification" content="hgKlR-gh1kqW6e6_8xl2kSzCsHtRMiGGrqAlQAHl1w4" />
            <meta name="description" content="MozeeeNotes helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with MozeeeNotes. Master key concepts, prepare for exams, and excel with Mozeeenotes. Get comprehensive study materials, notes, and resources tailored for students in Nepal at mozeee.com" />
        <meta name="keywords" content="NEB, Nepal, 12th Grade, Study Notes, Exam Preparation, MozeeeNotes" />
        <meta property="og:title" content="MozeeeNotes - Comprehensive Study Notes for NEB 12th Grade Students in Nepal" />
        <meta property="og:description" content="MozeeeNotes helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with MozeeeNotes. Master key concepts, prepare for exams, and excel with Mozeeenotes. Get comprehensive study materials, notes, and resources tailored for students in Nepal at mozeee.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mozeee.com" />
        <meta property="og:image" content="https://mozeee.com/logo.png" />
        <meta property="og:site_name" content="MozeeeNotes" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MozeeeNotes - Comprehensive Study Notes for NEB 12th Grade Students in Nepal" />
        <meta name="twitter:description" content="MozeeeNotes helps 12th Grade Student to Download & study FREE, high-quality 12th Grade Notes for ALL NEB subjects in Nepal! Ace your NEB 12th Grade exams with MozeeeNotes. Master key concepts, prepare for exams, and excel with Mozeeenotes. Get comprehensive study materials, notes, and resources tailored for students in Nepal at mozeee.com" />
        <meta name="twitter:image" content="https://mozeee.com/logo.png" />
        

  <link rel='icon' href='/ico.png'></link>
  </Head>
  <Nav/>
  <Component {...pageProps} /> 
  <Footer/>
  </>
}
