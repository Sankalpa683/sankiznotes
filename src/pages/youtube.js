import Head from 'next/head';
import YoutubeSearch from '../component/YoutubeSearch';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>YouTube Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center mt-8">YouTube Search App</h1>
        <YoutubeSearch />
      </main>
    </div>
  );
}
