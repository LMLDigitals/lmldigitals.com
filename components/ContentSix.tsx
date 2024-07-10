import { CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import groupPeople from '@/public/groupPeople.png';
import WordPullUp from './magicui/word-pull-up';
import SlightFlip from '@/components/magicui/flip-text';

function ContentSix() {
   return (
      <div className='mx-44 mt-20 border border-red-500 bg-red-500 flex   justify-center  h-1/3  rounded-2xl'>
         <div className='w-full rounded-2xl'>
            <div className='flex flex-col gap-10  justify-end h-5/6 pl-10'>
               <div className='space-y-4'>
                  <WordPullUp
                     className='text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-7xl md:leading-[5rem]'
                     words={`Don't  be  sheepish`}
                  />

                  <SlightFlip
                     className='text-2xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]'
                     word={`Let's Talk`}
                  />
               </div>
               <div className='flex items-center gap-3'>
                  <Button className='h-11 w-56 transition-all  button-hover hover:bg-transparent hover:outline-8 hover:outline-double hover:outline-black '>
                     <span className='text-lg'>Let's chat</span>
                  </Button>
                  <CircleArrowRight size={32} className='icon-hidden s' />
               </div>
            </div>
         </div>
         <Image
            src={groupPeople}
            width={2000}
            // height={6000}
            className='h-96 object-cover rounded-2xl '
            alt='group_people'
         />
      </div>
   );
}

export default ContentSix;
