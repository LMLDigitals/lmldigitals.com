import AboutContentOne from '@/components/AboutContentOne';
import AboutContentTwo from '@/components/AboutContentTwo';
import ContentFive from '@/components/ContentFive';
import ContentSix from '@/components/ContentSix';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'LML Digitals | About Us',
   description:
      'LML Digitals is a leading marketing and software development company dedicated to transforming businesses with innovative digital solutions.',
   keywords:
      'marketing, software development, digital solutions, business transformation, LML Digitals',
   authors: [{ name: 'LML Digitals', url: 'https://www.lmldigitals.com' }],
   viewport: 'width=device-width, initial-scale=1.0',
   openGraph: {
      title: 'LML Digitals | Marketing and Software Development',
      description:
         'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
      type: 'website',
      url: 'https://www.lmldigitals.com',
      images: [
         {
            url: '/app/opengraph-image.png',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      site: '@LMLDigitals',
      title: 'LML Digitals | Marketing and Software Development',
      description:
         'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
      images: ['/images/twitter-image.jpg'],
   },
};

function AboutUs() {
   return (
      <div className='flex flex-col gap-16'>
         <AboutContentOne />
         <AboutContentTwo />
         <ContentFive />
         <ContentSix />
      </div>
   );
}

export default AboutUs;
