import { HoverEffect } from './ui/card-hover-effect';

function ContentFour() {
   const projects = [
      {
         title: 'SEO Optimization',
         description:
            'Our SEO specialists boost your website"s visibility and drive qualified traffic, leading to increased brand awareness, lead generation, and more sales.',
         link: 'https://stripe.com',
      },
      {
         title: 'Social Media Management',
         description:
            'Our social media management services build brand awareness, engage your audience, and drive traffic with tailored strategies, content creation, account management, and performance analysis.',
         link: 'https://netflix.com',
      },
      {
         title: 'Content Marketing',
         description:
            'Our content marketing team crafts industry-leading content—blogs, articles, infographics, videos—to engage your audience, build trust, and position your brand as an industry leader.',
         link: 'https://google.com',
      },
      {
         title: 'Email Marketing',
         description:
            'Our email marketing specialists create and manage targeted campaigns that nurture leads, promote services, and build customer relationships. We design engaging templates, manage lists, and track performance for impactful results.',
         link: 'https://meta.com',
      },
      {
         title: 'Web Development',
         description:
            "At LML Digitals, we design and develop visually appealing websites that convert visitors into customers. Whether it's a brochure site, e-commerce platform, or custom web app, we ensure seamless user experiences across all devices, reflecting your brand and enhancing customer engagement.",
         link: 'https://amazon.com',
      },
      {
         title: 'Software Maintenance',
         description:
            'Our software maintenance services ensure your applications remain stable, secure, and perform optimally. We provide bug fixes, security updates, performance optimization, and feature enhancements to support business continuity and security.',
         link: 'https://microsoft.com',
      },
   ];
   return (
      <div className='mt-28 flex flex-col items-center'>
         <div className='flex flex-col items-center text-center gap-4 '>
            <h1 className='text-5xl font-bold'>
               What we <span className='text-red-500'>Do</span>
            </h1>
            <p className='text-lg'>
               LML Digitals empowers your business to thrive by providing
               strategic, sustainable, and profitable marketing solutions.{' '}
            </p>
         </div>
         <div>
            <div className='max-w-5xl mx-auto px-8'>
               <HoverEffect items={projects} />
            </div>
         </div>
      </div>
   );
}

export default ContentFour;
