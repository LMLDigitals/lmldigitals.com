// components/VideoInMockup.tsx
import React from 'react';
import Image from 'next/image';
import mobileMockup from '@/public/mobileMockup.png';
import videoSource from '@/public/video.mp4';

const VideoInMockup: React.FC = () => {
   return (
      <div className='hidden 2xl:inline-block'>
         <Image
            src={mobileMockup}
            width={580}
            height={580}
            alt='Mobile Mockup'
            className='relative'
         />
         <div className='absolute right-72 bottom-24 top-68 flex items-center justify-center -z-20'>
            <video className='w-96 rounded-3xl scale-90' autoPlay loop muted>
               <source src={'/video.mp4'} type='video/mp4' />
               Your browser does not support the video tag.
            </video>
         </div>
      </div>
   );
};

export default VideoInMockup;
