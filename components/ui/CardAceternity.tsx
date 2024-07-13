'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function CardAnimated() {
   const marketingServices = [
      {
         id: 1,
         title: 'SEO Optimization',
         description:
            "Search Engine Optimization (SEO) is the art and science of increasing your website's visibility in search engine results pages (SERPs). Our SEO specialists will work tirelessly to optimize your website content, technical structure, and backlink profile to improve your organic ranking and drive qualified traffic to your site. This translates into increased brand awareness, lead generation, and ultimately, more sales.",
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         id: 2,
         title: 'Social Media Management',
         description:
            "Social media is a powerful tool for building brand awareness, engaging with your target audience, and driving traffic to your website. Our social media management services provide everything you need to establish a strong social media presence. We'll develop a comprehensive social media strategy, create engaging content, manage your social media accounts, and track and analyze your results.",
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         id: 3,
         title: 'Email Marketing',
         description:
            "Email marketing remains one of the most effective digital marketing channels for nurturing leads, promoting your services, and building lasting customer relationships. Our email marketing specialists will help you develop and implement targeted email campaigns that drive results. We'll design engaging email templates, manage your email list, and track campaign performance so you can optimize your efforts for maximum impact.",
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
   ];

   return (
      <div className='container mx-auto p-4'>
         {marketingServices.map((service, index) => (
            <div
               key={service.id}
               className={cn(
                  'flex flex-col md:flex-row justify-center gap-8 mt-32',
                  {
                     'md:flex-row-reverse': index % 2 === 1,
                  }
               )}
            >
               <div className='group/card'>
                  <div
                     className={cn(
                        'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                        'bg-cover',
                        'bg-[url(' + service.imageUrl + ')]'
                     )}
                  >
                     <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                     <div className='text content'>
                        <h1 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                           {service.title}
                        </h1>
                        <p className='font-normal text-sm text-transparent relative z-10 my-4 '>
                           {service.description}
                        </p>
                     </div>
                  </div>
               </div>
               <div className='flex flex-col gap-4 w-full md:w-1/2'>
                  <h1 className='text-5xl font-semibold'>
                     {service.title.split(' ')[0]}{' '}
                     <span className='text-red-500'>
                        {service.title.split(' ')[1]}
                     </span>
                  </h1>
                  <p className='leading-loose'>{service.description}</p>
               </div>
            </div>
         ))}
      </div>
   );
}
