'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: 500,
    annualPrice: 5400,
    features: [
      'Basic on-page and local SEO for essential keywords and key listings',
      'Setup and manage limited campaigns on Google Ads, Meta Ads, Yelp Ads',
      'Maintain presence on YouTube, Facebook, TikTok, Instagram with regular updates',
      'Produce 5-10 monthly blogs, videos, and images on auto repair tips and trends',
      'Implement a basic strategy with 4 monthly emails promoting seasonal services',
      'Claim and maintain listings on Google My Business, Facebook, Yelp, Apple Business',
      'Monitor uptime, functionality, and perform essential updates',
    ],
  },
  {
    name: 'Standard',
    description:
      'Unlock enhanced features and professional content to supercharge your business.',
    monthlyPrice: 1000,
    annualPrice: 10800,
    features: [
      'Comprehensive on-page/off-page SEO, ongoing competitor analysis',
      'Detailed campaign management on Google Ads, Facebook Ads, Yelp Ads',
      'Manage (YouTube,TikTok,Facebook,Instagram and Snapchat)',
      'Produce 10-20 monthly blogs, videos, and images focused on auto repair',
      'Develop strategy with 8 segmented emails promoting services or promotions',
      'Claim/manage listings on Google My Business, Facebook, NextDoor, Yelp, Apple Business',
      'Monitor analytics, optimize performance, update content, ensure security.',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate premium customization and dedicated support for enterprises.',
    monthlyPrice: 2000,
    annualPrice: 21600,
    features: [
      'Advanced on-page/off-page SEO, keyword research, local SEO enhancements',
      'Strategic campaign management across major platforms, customized ads, retargeting',
      'Comprehensive management of (YouTube, Facebook, Instagram, TikTok, Snapchat, Reddit LinkedIn)',
      'Create 20-40 monthly blogs, videos, custom graphics on auto repair topics',
      'Personalized campaigns with 12 targeted emails/month, automated workflows',
      'Comprehensive management, claim listings (Google My Business, Facebook, NextDoor, Yelp, Apple Business,LinkedIn,Angies list,BBB)',
      'Advanced analytics, continuous optimization, security updates, UX enhancements',
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M');

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col  items-center justify-center space-y-4 md:items-center text-center md:text-start">
        <div className="mb-2 inline-block rounded-full text-center bg-red-100 px-2 py-[0.20rem] text-xs font-medium uppercase text-red-500 dark:bg-red-200">
          Pricing
        </div>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
          Fair pricing, unfair advantage.
        </p>
        <p className="text-md max-w-xl text-gray-700 md:text-center dark:text-gray-300 px-3">
          Get started with LML today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle('M')}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === 'M'
              ? 'relative bg-red-500 text-white '
              : 'text-gray-700 hover:bg-red-100 dark:text-gray-300 dark:hover:text-black'
          )}
        >
          Monthly
          {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle('A')}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === 'A'
              ? 'relative bg-red-500 text-white '
              : 'text-gray-700 hover:bg-red-100 dark:text-gray-300 dark:hover:text-black'
          )}
        >
          Annual
          {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4 px-4 md:px-8">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="flex flex-col rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600"
        >
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-red-500">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>
                  $
                  {billingCycle === 'M'
                    ? plan.monthlyPrice
                    : plan.annualPrice.toLocaleString()}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === 'M' ? 'month' : 'year'}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              className="mt-8 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-500/90"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-red-500" size={18} />
              <span className="text-sm text-gray-600 whitespace-normal">
                {feature}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden py-12 text-black lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-red-500"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
