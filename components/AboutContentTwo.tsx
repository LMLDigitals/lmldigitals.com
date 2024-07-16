import Image from 'next/image';
import React from 'react';
import aboutImage from '@/public/aboutWhiteBoard.png';
import aboutImageTwo from '@/public/aboutImageTwo.jpg';

function AboutContentTwo() {
   return (
      <div className='mt-20 flex flex-col gap-12 sm:gap-24 px-4'>
         <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-32'>
            <div className='flex flex-col gap-4 w-full lg:w-1/3 px-4 lg:px-0'>
               <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100'>
                  Focused on outcomes, not{' '}
                  <span className='text-red-500'>outputs</span>
               </h1>
               <p className='text-sm md:text-base'>
                  We care about driving brand and business growth in everything
                  we do. This leads our thinking from the very start to ensure
                  we&apos;re delivering work that not only provides growth but
                  future-proofs your brand as the digital industry continues to
                  progress rapidly. If you&apos;re looking for a partner just to
                  tick boxes, then we aren&apos;t the ones for you. But if you
                  want a partner who&apos;ll push you, be innovative, and level
                  up everything you do, then we could be the agency for you.
               </p>
            </div>
            <Image
               src={aboutImageTwo}
               width={500}
               height={500}
               alt='about_image'
               className='rounded-2xl hover:scale-105 transition-all'
            />
         </div>
      </div>
   );
}

export default AboutContentTwo;
