'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

interface Project2Props {
  projectImageUrl: string;
  projectAltText: string;
  textProject: string;
  projectList: string[];
}

const Project2: React.FC<Project2Props> = ({ textProject, projectAltText, projectImageUrl, projectList }) => {
  const [swing, setSwing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwing((prevSwing) => (prevSwing === 0 ? 1 : 0)); // Toggle between 0 and 1
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  const swingAnimation = swing === 0 ? [-15, 15] : [15, -15]; // Rotate between -15 and 15 degrees

  // Split the projectList into two parts
  const halfwayIndex = Math.ceil(projectList.length / 2);
  const firstHalf = projectList.slice(0, halfwayIndex);
  const secondHalf = projectList.slice(halfwayIndex);

  return (
    <div className="flex flex-col md:flex-row items-center p-10 pb-6 ml-10 mr-14"id='projects/project2'>
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
        <img src={projectImageUrl} alt={projectAltText} className=" w-96 h-96 object-contain rounded-full shadow-lg border-4 border-yellow-500 drop-shadow-lg" />
      </motion.div>
      <div className="md:w-1/2 px-4 text-center md:text-left">
        <p className="text-4xl font-semibold font-inter">
          {textProject}
        </p>
        <div className="font-inter pt-6">
          <div className="flex justify-between text-slate-700">
            {/* First Half */}
            <ul className="list-none"> {/* Remove bullets */}
              {firstHalf.map((project, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <BadgeCheck /> {/* Display BadgeCheck icon */}
                    <span className="ml-2">{project}</span> {/* Display project text */}
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Second Half */}
            <ul className="list-none"> {/* Remove bullets */}
              {secondHalf.map((project, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <BadgeCheck /> {/* Display BadgeCheck icon */}
                    <span className="ml-2">{project}</span> {/* Display project text */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
