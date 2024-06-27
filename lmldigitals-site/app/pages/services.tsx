// app/services/page.tsx

import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <Head>
        <title>Our Services</title>
      </Head>
      <div className='container mx-auto px-4 py-8 pb-10'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Our Services Including But Not Limited To</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='shadow-md rounded-lg p-6 bg-yellow-200 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-yellow-300'>
            <h2 className='text-xl font-semibold mb-4'>Software Development</h2>
            <p>The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users</p>
          </div>
          <div className='bg-yellow-500 shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-yellow-600 text-slate-50'>
            <h2 className='text-xl font-semibold mb-4'>Digital Marketing & UI/UX</h2>
            <p>Our dedicated team develops UX/UI designs for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.</p>
          </div>
          <div className='bg-gray-800 shadow-md rounded-lg p-6 text-white transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-900'>
            <h2 className='text-xl font-semibold mb-4 '>Consulting, Support and Maintenance</h2>
            <p>Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
