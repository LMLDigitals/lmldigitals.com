'use client';
import Link from 'next/link';
import { useState } from 'react';

type BannerProps = {
   className?: string;
   props?: any;
};

const CloseIcon = ({ className, ...props }: BannerProps) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...props}
   >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
   </svg>
);

export default function CollapsibleBanner({ type }: any) {
   const [isVisible, setIsVisible] = useState(type || false);

   return (
      <>
         <div
            // Replace `absolute` with `fixed` if you want the banner fixed on the page. Note: Animation won't work with `absolute`.
            className={`hidden sm:block absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
               isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
         >
            <div className='flex w-full items-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5 sm:before:flex-1'>
               <div className='flex items-center text-sm font-medium leading-6 text-white'>
                  <p>{`Discover how LML Digitals can elevate your online presence with tailored digital strategies and impactful campaigns.`}</p>

                  <Link
                     href='/contact'
                     className='ml-3 flex-none rounded-lg bg-gray-900 px-3 py-1 text-xs text-white shadow-sm hover:bg-gray-900/80'
                  >
                     Get Started
                  </Link>
               </div>
               <div className='flex flex-1 justify-end'>
                  {/* <button
                     type='button'
                     onClick={() => setIsVisible(false)}
                     aria-label='Dismiss'
                  >
                     <CloseIcon className='h-5 w-5 text-white' />
                  </button> */}
               </div>
            </div>
         </div>
         {isVisible && <div className='h-[52px]' />}
      </>
   );
}
