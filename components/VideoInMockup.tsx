// components/VideoInMockup.tsx
import React from 'react';
import Image from 'next/image';
import mobileMockup from '@/public/mobileMockup.png';
import videoSource from '@/public/video.mp4';

const VideoInMockup: React.FC = () => {
   return (
      <>
         <div className='transition-all'>
            {/* <Image
               src={mobileMockup}
               width={630}
               height={630}
               alt='Mobile Mockup'
               className='relative hidden 2xl:block'
            />
            <Image
               src={mobileMockup}
               width={430}
               height={430}
               alt='Mobile Mockup'
               className='relative hidden xl:block 2xl:hidden'
            />
            <Image
               src={mobileMockup}
               width={435}
               height={435}
               alt='Mobile Mockup'
               className='relative hidden lg:block xl:hidden'
            />
            <Image
               src={mobileMockup}
               width={260}
               height={260}
               alt='Mobile Mockup'
               className='relative hidden md:block lg:hidden xl:hidden'
            />
            <Image
               src={mobileMockup}
               width={340}
               height={340}
               alt='Mobile Mockup'
               className='relative md:hidden lg:hidden xl:hidden'
            /> */}
            <div className='absolute right-20 -bottom-16 md:bottom-36  md:right-80 md:top-52  lg:right-64 lg:top-60 xl:right-64 xl:top-80 xl:bottom-10 2xl:right-72 2xl:top-44 flex items-center justify-center -z-20'>
               <video
                  className='w-64 md:w-48 lg:w-60 xl:w-64 2xl:w-96 rounded-3xl scale-90'
                  autoPlay
                  loop
                  muted
               >
                  <source src={'/video2.mp4'} type='video/mp4' />
                  Your browser does not support the video tag.
               </video>
            </div>
         </div>
      </>
   );
};

const VideoInMockupMediumSize = () => {
   return (
      <div className='de'>
         <Image
            src={mobileMockup}
            width={630}
            height={630}
            alt='Mobile Mockup'
            className='relative '
         />
         <div className='absolute right-72 bottom-24 top-68 xl: 2xl:right-72 2xl:top-44 flex items-center justify-center -z-20'>
            <video className='w-96 rounded-3xl scale-90' autoPlay loop muted>
               <source src={'/video.mp4'} type='video/mp4' />
               Your browser does not support the video tag.
            </video>
         </div>
      </div>
   );
};

export default VideoInMockup;
