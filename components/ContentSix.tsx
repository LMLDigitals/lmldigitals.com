import { CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import groupPeople from '@/public/groupPeople.png';
import WordPullUp from './magicui/word-pull-up';
import SlightFlip from '@/components/magicui/flip-text';
import Link from 'next/link';

function ContentSix() {
   return (
      <div className='mx-3 md:mx-10 lg:mx-20 2xl:mx-44 md:mt-8 lg:mt-16 xl:mt-16 2xl:mt-20 border border-red-500 bg-red-500 flex  justify-center  h-1/3  rounded-2xl'>
         <div className='w-full rounded-2xl  py-6'>
            <div className='flex flex-col gap-6 items-center  xl:items-start  2xl:gap-8    lg:gap-6  justify-end  xl:h-5/6 pl-4 md:pl-10'>
               <div className='flex flex-col items-center gap-4 lg:gap-6   xl:items-start'>
                  <WordPullUp
                     className='xl:text-5xl  font-bold tracking-[-0.02em] text-white dark:text-white text-3xl md:text-5xl lg:text-6xl 2xl:text-6xl md:leading-[4rem]'
                     words={`Don't hesitate`}
                  />

                  {/* <SlightFlip
                     className='xl:text-5xl  font-bold tracking-[-0.1em] text-black dark:text-white text-3xl md:text-5xl lg:text-6xl  md:leading-[5rem]'
                     word={`Let's Chat`}
                  /> */}
               </div>
               <div className='flex items-center gap-3'>
                  <Link href={'/contact'} className='flex items-center gap-4'>
                     <Button className='h-11 w-56 transition-all  button-hover hover:bg-transparent hover:outline-8 hover:outline-double hover:outline-black '>
                        <span className='text-lg'>Let&apos;s chat</span>
                     </Button>
                     <CircleArrowRight size={32} className='icon-hidden ' />
                  </Link>
               </div>
            </div>
         </div>
         <Image
            src={groupPeople}
            width={2000}
            className='h-96 object-cover rounded-2xl hidden 2xl:block'
            alt='group_people'
         />
         <Image
            src={groupPeople}
            width={1200}
            className='h-96 object-cover rounded-2xl  hidden xl:block 2xl:hidden'
            alt='group_people'
         />
      </div>
   );
}

export default ContentSix;
