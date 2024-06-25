// app/services/page.tsx

import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <Head>
        <title>Services - My Website</title>
        <meta name="description" content="Services page description" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-center mt-12">Our Services</h1>
      </main>
    </div>
  );
};

export default Services;
