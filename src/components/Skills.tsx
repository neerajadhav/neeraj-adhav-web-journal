'use client';
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

import { FaGithub } from 'react-icons/fa';
import PageSection from './PageSection';
import { ReactNode } from 'react';

// Define types
interface SkillItemProps {
  icon: ReactNode;
  category: string;
  skills: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, category, skills }) => (
  <div className='group relative flex flex-col rounded-xl border bg-slate-200/30 p-3 transition-all duration-300 dark:border-0 dark:bg-slate-800/80'>
    <div className='mb-3 flex items-center gap-3'>
      <div className='flex h-10 w-10 items-center justify-center rounded-lg border bg-white dark:border-slate-600 dark:bg-slate-900'>
        {icon}
      </div>
      <h3 className='font-semibold text-slate-900 dark:text-zinc-200'>
        {category}
      </h3>
    </div>
    <ul className='flex flex-wrap gap-2'>
      {skills.map((skill, i) => (
        <li
          key={i}
          className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-slate-700 dark:text-zinc-300'
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills: React.FC = () => {
  const skillsData: SkillItemProps[] = [
    {
      category: 'Programming Languages',
      icon: <CodeBracketIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />, 
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      icon: <ServerIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />, 
      skills: ['Django', 'FastAPI', 'Next.js'],
    },
    {
      category: 'Libraries',
      icon: <CpuChipIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />, 
      skills: ['React'],
    },
    {
      category: 'Markup & Styling',
      icon: <PaintBrushIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />, 
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'ShadCN'],
    },
    {
      category: 'Favorite Linux Distros',
      icon: <ComputerDesktopIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />, 
      skills: ['Arch Linux', 'NixOS', 'Linux Mint', 'Ubuntu'],
    },
  ];

  return (
    <PageSection
      title='Tech Stack'
      link={{
        href: 'https://github.com/neerajadhav',
        text: 'Visit My GitHub',
        icon: <FaGithub className='h-4 w-4' />,
      }}
    >
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {skillsData.map((skillSet, index) => (
          <SkillItem key={index} {...skillSet} />
        ))}
      </div>
    </PageSection>
  );
};

export default Skills;