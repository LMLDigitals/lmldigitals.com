import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import {
  FacebookIcon,
  Github,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaSnapchat } from 'react-icons/fa6';

interface NavigationItem {
  name: string;
  href: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const navigation: {
  main: NavigationItem[];
  social: NavigationItem[];
} = {
  main: [
    // { name: 'About', href: '/about' },
    // // { name: 'Blog', href: '#' },
    // { name: 'Our Services', href: '/services' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://x.com/lmldigitals',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <TwitterIcon className="hover:text-red-500" />
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/LML-Digitals',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <Github className="hover:text-red-500" />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/lml-digitals/about/?viewAsMember=true',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <LinkedinIcon className="hover:text-red-500" />
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/lmldigitals/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <FacebookIcon className="hover:text-red-500" />
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCWZqpUAbB2Wy02yBSK6DWuQ',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <YoutubeIcon className="hover:text-red-500" />
      ),
    },
    {
      name: 'Snapchat',
      href: 'https://www.snapchat.com/add/lmldigitals?sender_web_id=04660535-e0f2-47be-96fa-5f50a53d3b3d&device_type=desktop&is_copy_url=true',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <FaSnapchat size={24} className="hover:text-red-500" />
      ),
    },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-6">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-100"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-5 flex items-center justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600  dark:text-gray-100 hover:scale-125 transition-all"
            >
              <span className="sr-only hover:text-red-500">{item.name}</span>
              {item.icon && (
                <item.icon
                  className="h-5 w-5 hover:text-red-500"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>
        {/* <p className='mt-6 text-center text-sm text-gray-600 dark:text-gray-100'>
               &copy; {new Date().getFullYear()} LML-Digitals. All rights
               reserved.
            </p> */}
      </div>
    </footer>
  );
};

export default Footer;
