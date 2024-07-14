import React from 'react';
import ObjectPlane from './ObjectPlane';
import Marquee from './magicui/marquee';

function ContentFive() {
   return (
      <div className=' xl:mt-6 2xl:mt-28'>
         <Marquee pauseOnHover className='[--duration:20s]'>
            <ObjectPlane />
            <h1 className='text-7xl font-semibold mx-6 '>
               Let&apos;s talk digitals
            </h1>
            <ObjectPlane />
            <h1 className='text-7xl font-semibold mx-6'>
               Let&apos;s talk digitals
            </h1>
            <ObjectPlane />
            <h1 className='text-7xl font-semibold mx-6'>
               Let&apos;s talk digitals
            </h1>
            <ObjectPlane />
            <h1 className='text-7xl font-semibold mx-6'>
               Let&apos;s talk digitals
            </h1>
         </Marquee>
      </div>
   );
}

export default ContentFive;
