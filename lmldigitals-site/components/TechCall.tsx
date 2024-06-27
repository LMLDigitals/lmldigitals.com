// components/TechIcons.tsx
import React from 'react';
import { Angular, Javascript, Github, Database, Reactjs, Nextjs } from './TechStack';

const TechIcons = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Angular />
      <Javascript />
      <Github />
      <Database />
      <Reactjs />
      <Nextjs />
    </div>
  );
};

export default TechIcons;
