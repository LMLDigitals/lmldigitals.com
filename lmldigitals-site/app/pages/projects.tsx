// app/projects/page.tsx
'use client';
// app/projects/page.tsx

import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const images = [
    '/career.jpg',
    '/branding.jpg',
    '/onepiece.jpg',
    '/hacking.jpg',
    '/homeimg.jpg',
  ];

  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold text-center mt-12 ">What we have done so far</h1>
        <div className="relative mt-8 pb-10 ">
          <div ref={carouselRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4">
            {images.map((src, index) => (
              <div key={index} className="min-w-[300px]">
                <Image src={src} alt={`Project ${index + 1}`} width={300} height={200} className="rounded-lg" />
              </div>
            ))}
          </div>
          <button onClick={scrollLeft} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">
            &lt;
          </button>
          <button onClick={scrollRight} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
};

export default Projects;
