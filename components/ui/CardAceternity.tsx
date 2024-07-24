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
      imageUrl: '/seo.jpg',
    },
    {
      id: 2,
      title: 'Social Media Management',
      description:
        "Social media is a powerful tool for building brand awareness, engaging with your target audience, and driving traffic to your website. Our social media management services provide everything you need to establish a strong social media presence. We'll develop a comprehensive social media strategy, create engaging content, manage your social media accounts, and track and analyze your results.",
      imageUrl: '/socialMedia.jpg',
    },
    {
      id: 3,
      title: 'Email Marketing',
      description:
        "Email marketing remains one of the most effective digital marketing channels for nurturing leads, promoting your services, and building lasting customer relationships. Our email marketing specialists will help you develop and implement targeted email campaigns that drive results. We'll design engaging email templates, manage your email list, and track campaign performance so you can optimize your efforts for maximum impact.",
      imageUrl: '/email.jpg',
    },
    {
      id: 4,
      title: 'Ads Management',
      description:
        "Imagine targeted ads reaching the perfect customer, precisely tailored to resonate with their needs and online behavior. Our Ads Management service leverages meticulous audience research to deliver laser-focused messaging across platforms like Google Ads, Facebook Ads, and even Nextdoor. We don't simply display generic ads; we employ advanced targeting options to ensure your message reaches the most receptive audience, maximizing your return on investment and generating high-quality leads.",
      imageUrl: '/ads.jpg',
    },
    {
      id: 5,
      title: 'Content Marketing',
      description:
        "Captivate your audience and establish yourself as an industry expert with our Content Marketing service. We don't just create content; we craft a strategy around your brand voice and target audience. Our skilled writers and content creators produce high-quality, engaging content that educates, informs, and entertains your ideal customers. This could include informative blog posts, visually appealing infographics, or even engaging videos. We then leverage various channels to amplify your content's reach, ensuring it's seen by the right people at the right time. By consistently publishing valuable content, LML Digitals helps you build brand authority and foster trust with your target audience.",
      imageUrl: '/content.jpg',
    },
    {
      id: 6,
      title: 'Listings Management',
      description:
        "In today's digital age, ensuring your business is found where your customers are searching is crucial. Our Listings Management service handles this critical task for you. We claim and optimize your presence on essential platforms like Google My Business, Yelp, Facebook, and Apple Maps Connect, ensuring consistent and accurate information across all listings. This makes it easier for potential customers to find your business online and navigate towards your website or physical location. We also actively monitor reviews and online mentions, encouraging positive feedback and responding professionally to both positive and negative reviews, demonstrating your commitment to customer satisfaction.",
      imageUrl: '/listings.jpg',
    },
    {
      id: 7,
      title: 'Website Maintenance',
      description:
        "Your website is your digital storefront, and LML Digitals' Website Management service ensures it's always functioning flawlessly and optimized for success. We continuously monitor your website's uptime and security to prevent any downtime or cyber threats. Our team also analyzes website performance and implements strategies to improve loading times, ensuring a smooth user experience for your visitors. We handle technical maintenance tasks to keep your website running smoothly. Higher tiers of our Website Management service offer additional features like content strategy development to create fresh, high-performing content for your website, User Experience (UX) optimization to improve navigation and user flow, and detailed website traffic reports that provide valuable insights into user behavior and website performance, empowering you to make data-driven decisions.",
      imageUrl: '/websiteMaintenance.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-4">
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
          <div className="group/card">
            <div
              className={cn(
                'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                'bg-cover',
                'bg-[url(' + service.imageUrl + ')]'
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="text content">
                {/* <h1 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
                           {service.title}
                        </h1> */}
                <p className="font-normal text-sm text-transparent relative z-10 my-4 ">
                  {service.description}
                </p>
              </div>
              <Image
                src={service.imageUrl}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="bg-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h1 className="text-5xl font-semibold">
              {service.title.split(' ')[0]}{' '}
              <span className="text-red-500">
                {service.title.split(' ')[1]} {service.title.split(' ')[2]}
              </span>
            </h1>
            <p className="leading-loose">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
