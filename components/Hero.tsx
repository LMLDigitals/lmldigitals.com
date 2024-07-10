import React from 'react';
import Container from './Container';
import { Button } from './ui/button';
import { AnimatedLMLDigitalsBadge } from './LmlDigitalsBadge';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import mobileMockup from '@/public/mobileMockup.png';
import SocialsProfiles from './SocialsProfiles';
import VideoInMockup from './VideoInMockup';

function Hero() {
   return (
      //   <Container>
      <div className='mt-20 mx-44 flex items-center justify-center '>
         <div className='flex  flex-col items-start gap-8 w-3/4     '>
            <AnimatedLMLDigitalsBadge />
            <h1 className='text-6xl w-3/4 leading-tight font-bold'>
               The results-driven{' '}
               <span className='text-red-500 '>Social first agency</span> you've
               been looking for
            </h1>

            <div className='flex items-center gap-2'>
               <Button className='h-11 w-56 transition-all hover:bg-red-500'>
                  Browse Our Services
               </Button>
               <Button
                  variant={'ghost'}
                  className='hover:bg-transparent space-x-2 group'
               >
                  <span>Meet our team</span>
                  <MoveRight size={16} className='hover-move-right' />
               </Button>
            </div>
         </div>
         <div className='flex items-center justify-between  '>
            <VideoInMockup />

            <SocialsProfiles />
         </div>
      </div>
      //   </Container>
   );
}

export default Hero;
