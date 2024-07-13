import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

function TypeWriterComponent() {
   const words = [
      {
         text: 'Empower',
      },
      {
         text: 'your',
      },
      {
         text: 'brand',
      },
      {
         text: 'with',
      },
      {
         text: 'LML Digitals.',
         className: 'text-red-500 dark:text-red-500',
      },
   ];
   return (
      <div className='flex flex-col items-center justify-center '>
         <p className='text-neutral-600 dark:text-neutral-200 text-xs sm:text-base'>
            Transform your digital presence with our expertise
         </p>
         <TypewriterEffectSmooth words={words} />
      </div>
   );
}

export default TypeWriterComponent;
