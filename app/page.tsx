import BrandsTrustUs from '@/components/BrandsTrustUs';
import ContentFive from '@/components/ContentFive';
import ContentFour from '@/components/ContentFour';
import ContentSix from '@/components/ContentSix';
import ContentThree from '@/components/ContentThree';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16648663241"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)} gtag('js', new Date()); gtag('config',
        'AW-16648663241')
        `,
          }}
        />
      </Head>
      <Hero />
      <BrandsTrustUs />
      <ContentThree />
      <ContentFour />
      <ContentFive />
      <ContentSix />
    </div>
  );
}
