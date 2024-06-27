// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'react-feather'; // Add ChevronDown import
import { Button } from '@/components/ui/button';
import Services from '@/app/pages/services';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrandingOpen, setIsBrandingOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            <img src="/yellowlogo.png" alt="Logo" className="size-24" />
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
          <Link href="/services" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"> Services</Link>
          <Link href="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              Projects <ChevronDown size={16} className="ml-1" />
            </button>
            {isProjectsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/projects/project1" className="block px-4 py-2 text-black hover:bg-gray-100">
                  Project 1
                </Link>
                <Link href="/projects/project2" className="block px-4 py-2 text-black hover:bg-gray-100">
                  Project 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsBrandingOpen(!isBrandingOpen)}
              className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              Branding <ChevronDown size={16} className="ml-1" />
            </button>
            {isBrandingOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/branding/branding1" className="block px-4 py-2 text-black hover:bg-gray-100">
                  Branding 1
                </Link>
                <Link href="/branding/branding2" className="block px-4 py-2 text-black hover:bg-gray-100">
                  Branding 2
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="hidden sm:flex items-center">
          <Button>Contact Us</Button>
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
