import BrandsTrustUs from '@/components/BrandsTrustUs';
import ContentFive from '@/components/ContentFive';
import ContentFour from '@/components/ContentFour';
import ContentSix from '@/components/ContentSix';
import ContentThree from '@/components/ContentThree';
import Hero from '@/components/Hero';

export default function Home() {
   return (
      <div className='flex flex-col gap-20'>
         <Hero />
         {/* <BrandsTrustUs /> */}
         <ContentThree />
         <ContentFour />
         <ContentFive />
         <ContentSix />
      </div>
   );
}
