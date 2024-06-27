// app/page.tsx

import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>LML Digitals</title>
        <meta name="description" content="Home page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-center mt-12">Welcome to LML Digitals!</h1>
      </main>
    </div>
  );
};

export default Home;
