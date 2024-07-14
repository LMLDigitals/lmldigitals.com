import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

function SocialsProfiles() {
   const SocialIcons = [
      {
         id: 1,
         icon: <Instagram className='text-white  cursor-pointer' />,
         name: 'Instagram',
         link: 'https://www.instagram.com/lmldigitals/',
      },
      {
         id: 2,
         icon: <Linkedin className='text-white cursor-pointer' />,
         name: 'LinkedIn',
         link: 'https://www.linkedin.com/company/lml-digitals/about/?viewAsMember=true',
      },
      {
         id: 3,
         icon: <Facebook className='text-white  cursor-pointer' />,
         name: 'Facebook',
         link: 'https://www.facebook.com/lmldigitals/',
      },
      {
         id: 4,
         icon: <Twitter className='text-white  cursor-pointer' />,
         name: 'Twitter',
         link: 'https://x.com/lmldigitals',
      },
   ];

   return (
      <div className='flex flex-col items-center gap-3 '>
         {SocialIcons.map((profile) => (
            <div
               key={profile.id}
               className='bg-red-500 p-2 rounded-full hover:scale-90 hover:duration-150 hover:delay-150 transition-all'
            >
               <Link href={profile.link} target='_blank'>
                  {profile.icon}
               </Link>
            </div>
         ))}
      </div>
   );
}

export default SocialsProfiles;
