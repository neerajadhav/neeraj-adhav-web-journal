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

export const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: (
        <div className='rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-slate-900'>
          <CodeBracketIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />
        </div>
      ),
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      icon: (
        <div className='rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-slate-900'>
          <ServerIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />
        </div>
      ),
      skills: ['Django', 'FastAPI', 'Next.js'],
    },
    {
      category: 'Libraries',
      icon: (
        <div className='rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-slate-900'>
          <CpuChipIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />
        </div>
      ),
      skills: ['React'],
    },
    {
      category: 'Markup & Styling',
      icon: (
        <div className='rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-slate-900'>
          <PaintBrushIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />
        </div>
      ),
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'ShadCN'],
    },
    {
      category: 'Favorite Linux Distros',
      icon: (
        <div className='rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-slate-900'>
          <ComputerDesktopIcon className='h-5 w-5 text-blue-800 dark:text-green-500' />
        </div>
      ),
      skills: ['Arch Linux', 'NixOS', 'Linux Mint', 'Ubuntu'],
    },
  ];

  return (
    <>
      <PageSection
        title='Tech Stack'
        link={{
          href: 'https://github.com/neerajadhav',
          text: 'Visit My GitHub',
          icon: <FaGithub className='h-4 w-4' />,
        }}
      >
        {/* Skills Grid */}
        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className='group relative flex flex-col rounded-xl border bg-slate-200/30 p-3 transition-all duration-300 dark:border-0 dark:bg-slate-800/80'
            >
              <div className='mb-3 flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl border bg-white p-3 shadow-md dark:border-slate-600 dark:bg-slate-900'>
                  {skillSet.icon}
                </div>
                <h3 className='font-semibold text-slate-900 dark:text-zinc-200'>
                  {skillSet.category}
                </h3>
              </div>
              <ul className='flex flex-wrap gap-2'>
                {skillSet.skills.map((skill, i) => (
                  <li
                    key={i}
                    className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-slate-700 dark:text-zinc-300'
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
};
