import Head from 'next/head';
import Search from './api/search';

export default function Home() {
  return (
    <br></br><br></br><br></br>
    <div className="container mx-auto">
      <Head>
        <title>YouTube Search App</title>
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center mt-8">YouTube Search App</h1>
    <br></br>
    <Search />
      </main>
    </div>
  );
}
