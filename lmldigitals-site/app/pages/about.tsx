// app/about/page.tsx

import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div id='aboutus'>
      <Head>
        <meta name="description" content="About us page description" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-center mt-12">About Us</h1>
      </main>
    </div>
  );
};

export default About;
