// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            <img src="/logo.png" alt="Logo" className="size-24" />
          </Link> 
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`sm:flex space-x-4 flex-grow justify-center ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <Link href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <Link href="/services" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Projects
          </Link>
          <Link href="/products" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Branding
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="hidden sm:flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Contact Us Button */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} px-4 mt-2`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
