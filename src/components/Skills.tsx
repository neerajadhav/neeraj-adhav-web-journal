'use client';
import {
  ArrowRightIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { FaGithub } from "react-icons/fa";

export const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <div className='border bg-slate-200 dark:bg-slate-900 rounded-lg p-2 dark:border-slate-600'><CodeBracketIcon className='h-5 w-5 text-blue-800 dark:text-green-500' /></div>,
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      icon: <div className='border bg-slate-200 dark:bg-slate-900 rounded-lg p-2 dark:border-slate-600'><ServerIcon className='h-5 w-5 text-blue-800 dark:text-green-500' /></div>,
      skills: ['Django', 'FastAPI', 'Next.js'],
    },
    {
      category: 'Libraries',
      icon: <div className='border bg-slate-200 dark:bg-slate-900 rounded-lg p-2 dark:border-slate-600'><CpuChipIcon className='h-5 w-5 text-blue-800 dark:text-green-500' /></div>,
      skills: ['React'],
    },
    {
      category: 'Markup & Styling',
      icon: <div className='border bg-slate-200 dark:bg-slate-900 rounded-lg p-2 dark:border-slate-600'><PaintBrushIcon className='h-5 w-5 text-blue-800 dark:text-green-500' /></div>,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'ShadCN'],
    },
    {
      category: 'Favorite Linux Distros',
      icon: <div className='border bg-slate-200 dark:bg-slate-900 rounded-lg p-2 dark:border-slate-600'><ComputerDesktopIcon className='h-5 w-5 text-blue-800 dark:text-green-500' /></div>,
      skills: ['Arch Linux', 'NixOS', 'Linux Mint', 'Ubuntu'],
    },
  ];

  return (
    <div className='flex flex-col items-start rounded-3xl bg-white p-6 text-slate-950 shadow-xl backdrop-blur-md dark:border dark:border-slate-800 dark:bg-slate-900/80 dark:text-zinc-300'>
      <div className='mb-6 flex w-full flex-row items-center justify-between'>
      <h2 className='text-2xl font-semibold dark:text-zinc-100'>Tech Stack</h2>
        <Link
          href={'//github.com/neerajadhav'}
          target='_blank'
          className='hidden flex-row items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-700 hover:text-white md:flex dark:border-slate-600 dark:text-zinc-300 dark:hover:bg-slate-950'
        >
          Visit My GitHub <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>

      {/* Skills Grid */}
      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skillSet, index) => (
          <div
            key={index}
            className='group relative flex flex-col rounded-xl border bg-white/50 p-6 shadow-lg transition-all duration-300 hover:bg-white dark:border-0 dark:bg-slate-800/80 dark:hover:bg-slate-700/90'
          >
            <div className='mb-3 flex items-center gap-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl border bg-white p-3 shadow-md dark:border-slate-600 dark:bg-slate-900'>
                {skillSet.icon}
              </div>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-zinc-200'>
                {skillSet.category}
              </h3>
            </div>
            <ul className='flex flex-wrap gap-2'>
              {skillSet.skills.map((skill, i) => (
                <li key={i} className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-slate-700 dark:text-zinc-300'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        href={'//github.com/neerajadhav'}
        target='_blank'
        className='mt-6 flex flex-row items-center gap-2 self-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 sm:text-base md:hidden'
      >
        Visit My GitHub <FaGithub className='h-4 w-4' />
      </Link>
    </div>
  );
};
