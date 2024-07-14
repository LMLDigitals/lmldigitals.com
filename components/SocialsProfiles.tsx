import React from 'react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import Link from 'next/link';

function SocialsProfiles() {
   const SocialIcons = [
      {
         id: 1,
         icon: <Instagram className='text-white  cursor-pointer' />,
         name: 'Instagram',
         link: '/',
      },
      {
         id: 2,
         icon: <Linkedin className='text-white cursor-pointer' />,
         name: 'LinkedIn',
         link: '/',
      },
      {
         id: 3,
         icon: <Facebook className='text-white  cursor-pointer' />,
         name: 'Facebook',
         link: '/',
      },
      {
         id: 4,
         icon: <Twitter className='text-white  cursor-pointer' />,
         name: 'Twitter',
         link: '/',
      },
   ];

   return (
      <div className='flex flex-col items-center gap-3 '>
         {SocialIcons.map((profile) => (
            <div
               key={profile.id}
               className='bg-red-500 p-2 rounded-full hover:scale-90 hover:duration-150 hover:delay-150 transition-all'
            >
               <Link href={profile.link}>{profile.icon}</Link>
            </div>
         ))}
      </div>
   );
}

export default SocialsProfiles;
