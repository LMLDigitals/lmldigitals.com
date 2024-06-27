// components/TechStack.tsx
import React from 'react';
import Image from 'next/image';
import angular from '@/public/angular.png';
import javascript from '@/public/javascript.png';
import database from '@/public/database.png';
import github from '@/public/github.png';
import reactjs from '@/public/reactjs.png';
import nextjs from '@/public/nextjs.png';

export const Angular = () => (
  <Image src={angular} width={100} height={100} alt="angular image" />
);

export const Javascript = () => (
  <Image src={javascript} width={100} height={100} alt="javascript image" />
);

export const Github = () => (
  <Image src={github} width={100} height={100} alt="github image" />
);

export const Database = () => (
  <Image src={database} width={100} height={100} alt="database image" />
);

export const Reactjs = () => (
  <Image src={reactjs} width={100} height={100} alt="reactjs image" />
);

export const Nextjs = () => (
  <Image src={nextjs} width={100} height={100} alt="nextjs image" />
);
