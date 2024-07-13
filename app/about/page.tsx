import AboutContentOne from '@/components/AboutContentOne';
import AboutContentTwo from '@/components/AboutContentTwo';
import ContentFive from '@/components/ContentFive';
import ContentSix from '@/components/ContentSix';

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
