import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import aboutGroup from '@/public/groupAbout.png';
import Image from 'next/image';

function AboutContentOne() {
   const words = [
      {
         text: 'Transform',
      },
      {
         text: 'your',
      },
      {
         text: 'digital',
      },
      {
         text: 'presence',
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
      <div className='mx-2 mt-20 flex flex-col gap-12 sm:gap-10'>
         <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-3xl sm:text-6xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100'>
               <TypewriterEffectSmooth words={words} />
            </h1>
            <p className='text-xs sm:text-lg text-neutral-600 dark:text-neutral-300 '>
               Empowering brands through digital innovation.
            </p>
         </div>

         <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16'>
            <Image
               src={aboutGroup}
               width={500}
               height={500}
               alt='about_image'
               className='rounded-2xl hover:scale-105 transition-all'
            />
            <div className='flex flex-col gap-4 w-full lg:w-1/3 px-4 lg:px-0'>
               <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100'>
                  We're made up of specialists, not{' '}
                  <span className='text-red-500'>generalists</span>
               </h1>
               <p className='text-sm sm:text-base leading-loose'>
                  Digital agencies that offer every service under the sun can
                  struggle to have the expertise that your brand deserves. We
                  decided early on that wasn't going to be us. We've focused on
                  what we're best at and what we love most from day 1. But, we
                  take it one step further. For example, a Social Media Manager
                  isn't someone who manages all organic, paid and influencer
                  activity - but focuses on organic social, strategy and
                  community management. That's why we have specialist teams for
                  all of our services. This allows us to give you the perfect
                  solution by creating a custom-built team for your exact needs
                  and challenges.
               </p>
            </div>
         </div>
      </div>
   );
}

export default AboutContentOne;
