// components/TechIcons.tsx
import React from 'react';
import { Angular, Javascript, Github, Database, Reactjs, Nextjs } from './TechStack';

const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-6 md:space-y-0">
      <div className="w-1/3 sm:w-auto"><Angular /></div>
      <div className="w-1/3 sm:w-auto"><Javascript /></div>
      <div className="w-1/3 sm:w-auto"><Github /></div>
      <div className="w-1/3 sm:w-auto"><Database /></div>
      <div className="w-1/3 sm:w-auto"><Reactjs /></div>
      <div className="w-1/3 sm:w-auto"><Nextjs /></div>
    </div>
  );
};

export default TechIcons;
