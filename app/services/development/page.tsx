import { cn } from '@/lib/utils';
import Image from 'next/image';

function Development() {
   const softwareServices = [
      {
         id: 1,
         title: 'Web Development',
         description:
            'At LML Digitals, we craft stunning and user-friendly websites that not only look great but also convert visitors into leads and customers. Our web development and design services encompass the entire process, from conceptualizing and designing a website that reflects your brand identity to developing a secure and scalable website that provides a seamless user experience across all devices. Whether you need a simple brochure website, a complex e-commerce platform, or a custom web application, we have the expertise to bring your vision to life.',
         imageUrl: '/webdev.jpg',
      },
      {
         id: 2,
         title: 'Mobile App Development',
         description:
            "In today's mobile-first world, a well-designed and functional mobile app is crucial for reaching your target audience and staying ahead of the competition. Our mobile app development team specializes in creating native apps for iOS and Android devices. We'll work closely with you to understand your specific needs and build an app that is not only visually appealing but also engaging, user-friendly, and optimized for performance.",
         imageUrl: '/mobiledev.png',
      },
      {
         id: 3,
         title: 'Software Maintenance',
         description:
            'Keeping your software applications up-to-date and functioning smoothly is essential for business continuity and security. Our software maintenance services ensure that your software remains stable, secure, and performs optimally. We offer a range of maintenance services, including bug fixes, security updates, performance optimization, and feature enhancements.',
         imageUrl: '/maintaince.jpg',
      },
   ];

   return (
      <div className='container mx-auto p-4'>
         {softwareServices.map((service, index) => (
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
                        'bg-cover'
                     )}
                  >
                     <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
                     <div className='text content'>
                        {/* <h1 className='font-bold text-xl text-center md:text-2xl text-gray-50 relative z-10'>
                           {service.title}
                        </h1> */}
                        <p className='font-normal text-sm text-transparent relative z-10 my-4 '>
                           {service.description}
                        </p>
                     </div>
                     <Image
                        src={service.imageUrl}
                        alt={service.title}
                        layout='fill'
                        objectFit='cover'
                        className='bg-cover'
                     />
                  </div>
               </div>
               <div className='flex flex-col gap-4 w-full md:w-2/3'>
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

export default Development;
