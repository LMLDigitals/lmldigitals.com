'use client';

import { MagicCard } from '@/components/magicui/magic-card';
// import { useTheme } from 'next-themes';
import { DirectionAwareHover } from './ui/direction-aware-hover';

export function DirectionAwareHoverDemo() {
   const imageUrl =
      'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

   const marketingServices = [
      {
         id: 1,
         title: 'SEO Optimization',
         description:
            "SEO boosts your website's visibility in search engine results, driving organic traffic and increasing brand awareness, leads, and sales.",
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         id: 2,
         title: 'Social Media Management',
         description:
            'Build brand awareness, engage your audience, and drive website traffic with our comprehensive social media strategy, content creation, and account management.',
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
         id: 3,
         title: 'Email Marketing',
         description:
            'Nurture leads and promote services with targeted email campaigns. We design engaging templates, manage lists, and track performance for optimal results.',
         imageUrl:
            'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
   ];

   return (
      <div className='flex  justify-center '>
         <div
            className={
               'flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row'
            }
         >
            <MagicCard className='cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl'>
               Magic
            </MagicCard>
         </div>

         <div>
            <h1 className='text-4xl '>Seo Optimization</h1>
            <p className='w-1/3'>
               Search Engine Optimization (SEO) is the art and science of
               increasing your website&apos;s visibility in search engine
               results pages (SERPs). Our SEO specialists will work tirelessly
               to optimize your website content, technical structure, and
               backlink profile to improve your organic ranking and drive
               qualified traffic to your site. This translates into increased
               brand awareness, lead generation, and ultimately, more sales.
            </p>
         </div>
      </div>
   );
}
