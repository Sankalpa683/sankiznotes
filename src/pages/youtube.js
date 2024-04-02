import Head from 'next/head';
import Search from '/api/Search';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>YouTube Search App</title>
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center mt-8">YouTube Search App</h1>
        <Search />
      </main>
    </div>
  );
}
