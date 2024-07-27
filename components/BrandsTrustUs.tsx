import React from 'react';
import Container from './Container';
import Image from 'next/image';

function BrandsTrustUs() {
  const logos = [
    {
      name: 'Vercel',
      url: '/fakeLogos/1.png',
    },
    {
      name: 'Nextjs',
      url: '/fakeLogos/2.png',
    },
    {
      name: 'Prime',
      url: '/fakeLogos/3.png',
    },
    {
      name: 'Trustpilot',
      url: '/fakeLogos/4.png',
    },
    {
      name: 'Webflow',
      url: '/fakeLogos/5.png',
    },

    {
      name: 'Airbnb',
      url: '/fakeLogos/6.png',
    },
    {
      name: 'Tina',
      url: '/fakeLogos/7.png',
    },
    {
      name: 'Stackoverflow',
      url: '/fakeLogos/8.png',
    },
  ];
  return (
    <div className="w-full md:py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(4)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.url}
                    width={150}
                    height={150}
                    className=" px-2 brightness-0  dark:invert"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsTrustUs;
