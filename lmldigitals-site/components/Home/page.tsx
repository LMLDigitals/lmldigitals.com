'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  imageUrl: string;
  altText: string;
  text: string;
  textParagraph: string;
  advertisingParagraph: string;
}

const Home: React.FC<HomeProps> = ({ imageUrl, altText, text, textParagraph, advertisingParagraph }) => {
  const textParts = text.split(' ');
  const yellowWord = 'Software';
  const [swing, setSwing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwing((prevSwing) => (prevSwing === 0 ? 1 : 0)); // Toggle between 0 and 1
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  const swingAnimation = swing === 0 ? [-15, 15] : [15, -15]; // Rotate between -15 and 15 degrees

  return (
    <div className="flex flex-col md:flex-row items-center p-10">
      <div className="md:w-1/2 px-4 text-center md:text-left">
        <p className="text-4xl font-semibold font-inter">
          {textParts.map((part, index) => (
            <span key={index} className={part === yellowWord ? 'text-yellow-500' : ''}>
              {part}{' '}
            </span>
          ))}
        </p>
        <div className="font-inter pt-6">
          <p className="text-lg text-gray-700 mt-4">{textParagraph}</p>
        </div>
      </div>
      <motion.div
        className="md:w-1/2 mt-4 md:mt-0"
        animate={{
          rotate: swingAnimation,
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <img src={imageUrl} alt={altText} className="w-full h-auto object-contain rounded-full shadow-lg border-4 border-yellow-500 drop-shadow-lg" />
      </motion.div>
    </div>
  );
};

export default Home;
