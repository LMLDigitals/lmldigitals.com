import groupPeople from '@/public/groupPeople.png';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

function ContentThree() {
   return (
      //   <Container>
      <div className='mx-44 flex flex-col items-center gap-28'>
         <h1 className='text-4xl text-center align-middle font-bold max-w-4xl'>
            We grow ambitious brands with Social, Paid,{' '}
            <span className='text-red-500'>Creative</span> and{' '}
            <span className='text-red-500'>Influencer</span>
         </h1>

         <div className='flex items-center justify-center  gap-20 w-10/12'>
            <Image
               src={groupPeople}
               width={600}
               height={600}
               alt='group_people'
               className='object-cover hover:scale-105 transition-all hover:duration-150 hover:delay-200 rounded-xl'
            />
            <div className='flex flex-col gap-10'>
               <h1 className='text-4xl font-bold'>
                  We Blend Creative and Performance
               </h1>
               <p className='w-3/4 leading-loose'>
                  There aren't many creative agencies that understand
                  performance and performance agencies that understand creative.
                  This is where we're different. Whether we're helping to grow
                  your Social communities, deliver performance-driven Paid
                  Media, produce social-first Creative or Influencer campaigns -
                  we craft strategies based on your brand, business and goals,
                  all backed by data and insight.
               </p>

               <div className='flex items-center gap-3'>
                  <Button className='h-11 w-56 transition-all hover:bg-red-500 button-hover'>
                     <span>See Our Services</span>
                  </Button>
                  <CircleArrowRight size={32} className='icon-hidden' />
               </div>
            </div>
         </div>
      </div>
      //   </Container>
   );
}

export default ContentThree;
