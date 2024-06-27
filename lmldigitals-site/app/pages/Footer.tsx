'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-start">
        <div className="w-1/2 text-left p-7">
          <h2 className="text-lg font-bold">LML Digitals</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ullam, aspernatur magni libero repudiandae cupiditate consequatur officiis corrupti at fugit voluptatem minus porro nostrum doloribus velit eum esse itaque non?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam necessitatibus laboriosam sunt suscipit neque quas aliquid quidem quo, eum aspernatur hic asperiores eligendi mollitia error placeat rem magni dignissimos.
          </p>
        </div>
        <div className="w-1/2 text-left p-10">
          <h2 className="text-lg font-bold">Address</h2>
          <p className="text-sm">Somaliland, Hargeisa, Jig-jiga Yar st, near Masjidka Quranka</p>
        </div>
      </div>
      <div className="container mx-auto flex justify-end items-center mt-4">
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <Link href="#top">
            <FontAwesomeIcon icon={faArrowUp} size="lg" className="ml-4 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} LML Digitals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
