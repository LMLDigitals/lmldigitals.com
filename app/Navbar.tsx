import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CollapsibleBanner from '@/components/Banner';
import { CoolMode } from '@/components/magicui/cool-mode';

function Navbar() {
   const NavLink = [
      { id: 1, title: 'Our Services', link: '/ourservices' },
      { id: 2, title: 'About Us', link: '/about' },
      { id: 3, title: 'Blog', link: '/ourservices' },
   ];
   return (
      <>
         <CollapsibleBanner type={true} />
         <div className='flex items-center justify-between xl:px-40 mt-4'>
            <Link href={'/'}>
               <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt='logo'
                  className='hover:scale-110 hover:delay-100 hover:duration-150 transition-all'
               />
            </Link>

            <ul className='flex items-center justify-evenly  w-1/3'>
               {NavLink.map((nav) => (
                  <Link href={nav.link} key={nav.id}>
                     <li className='underline-animation hover:underline-offset-1 hover:border-b hover:border-red-500'>
                        {nav.title}
                     </li>
                  </Link>
               ))}
               <CoolMode>
                  <Button className='h-11 w-36 transition-all '>
                     Get in Touch
                  </Button>
               </CoolMode>
            </ul>
         </div>
      </>
   );
}

export default Navbar;
