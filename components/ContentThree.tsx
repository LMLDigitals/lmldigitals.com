import groupPeople from '@/public/groupPeople.png';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

function ContentThree() {
   return (
      //   <Container>
      <div className='mx-6 md:mx-20 2xl:mx-44 flex flex-col items-center gap-28'>
         <h1 className='text-3xl xl:text-4xl text-center align-middle font-bold max-w-4xl'>
            We specialize in building{' '}
            <span className='text-red-500'>brands</span> digitally, creating
            <span className='text-red-500'> impactful</span> experiences
         </h1>

         <div className='flex flex-col items-center gap-10 md:flex md:flex-col  md:items-center md:justify-center lg:flex lg:flex-row  lg:gap-20 2xl:w-10/12 '>
            <Image
               src={groupPeople}
               width={600}
               height={600}
               alt='group_people'
               loading='lazy'
               className='object-cover hover:scale-105 transition-all hover:duration-150 hover:delay-200 rounded-xl hidden xl:block'
            />
            <Image
               src={groupPeople}
               width={500}
               height={500}
               alt='group_people'
               loading='lazy'
               className='object-cover hover:scale-105 transition-all hover:duration-150 hover:delay-200 rounded-xl hidden md:block lg:hidden xl:hidden'
            />
            <Image
               src={groupPeople}
               width={500}
               height={500}
               alt='group_people'
               loading='lazy'
               className='object-cover hover:scale-105 transition-all hover:duration-150 hover:delay-200 rounded-xl hidden lg:block xl:hidden'
            />
            <Image
               src={groupPeople}
               width={400}
               height={400}
               alt='group_people'
               loading='lazy'
               className='object-cover hover:scale-105 transition-all hover:duration-150 hover:delay-200 rounded-xl   md:hidden lg:hidden xl:hidden'
            />
            <div className='flex flex-col items-center md:items-center lg:items-start gap-10'>
               <h1 className='text-4xl font-bold md:text-center lg:text-start'>
                  Elevating Brands through Innovative Digital Strategies
               </h1>
               <p className='md:text-center lg:text-start 2xl:w-3/4 leading-loose'>
                  We&apos;re dedicated to elevating brands through a unique
                  blend of creativity and performance. From enhancing social
                  engagement and maximizing paid media effectiveness to creating
                  compelling influencer campaigns, our strategies are tailored
                  to amplify your brand&apos;s impact, driven by deep insights
                  and strategic foresight.
               </p>

               <Link href={'/services'}>
                  <div className='flex items-center gap-3'>
                     <Button className='h-11 w-56 transition-all hover:bg-red-500 button-hover'>
                        <span>See Our Services</span>
                     </Button>
                     <CircleArrowRight size={32} className='icon-hidden' />
                  </div>
               </Link>
            </div>
         </div>
      </div>
      //   </Container>
   );
}

export default ContentThree;
