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
      icon: <CodeBracketIcon className='h-8 w-8 text-yellow-500' />,
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      icon: <ServerIcon className='h-8 w-8 text-green-500' />,
      skills: ['Django', 'FastAPI', 'Next.js'],
    },
    {
      category: 'Libraries',
      icon: <CpuChipIcon className='h-8 w-8 text-blue-500' />,
      skills: ['React', 'ShadCN'],
    },
    {
      category: 'Markup & Styling',
      icon: <PaintBrushIcon className='h-8 w-8 text-purple-500' />,
      skills: ['HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      category: 'Favorite Linux Distros',
      icon: <ComputerDesktopIcon className='h-8 w-8 text-red-500' />,
      skills: ['Arch Linux', 'NixOS', 'Linux Mint', 'Ubuntu'],
    },
  ];

  return (
    <div className='flex flex-col items-start rounded-3xl bg-white/80 p-8 text-slate-950 shadow-xl backdrop-blur-md dark:border dark:border-slate-800 dark:bg-slate-900/80 dark:text-zinc-300'>
      <div className='mb-6 flex w-full flex-row items-center justify-between'>
        <h2 className='text-3xl font-bold dark:text-zinc-100'>My Skills</h2>
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
            className='group relative flex flex-col rounded-xl bg-white/60 p-5 shadow-lg transition-all duration-0 hover:bg-white/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/90'
          >
            <div className='mb-3 flex items-center gap-3'>
              {skillSet.icon}
              <h3 className='text-lg font-semibold text-slate-900 lg:text-xl dark:text-zinc-200'>
                {skillSet.category}
              </h3>
            </div>
            <ul className='space-y-1 text-slate-700 dark:text-zinc-400'>
              {skillSet.skills.map((skill, i) => (
                <li
                  key={i}
                  className='relative flex items-center gap-2 pl-3 before:absolute before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-slate-500 dark:before:bg-zinc-500'
                >
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
