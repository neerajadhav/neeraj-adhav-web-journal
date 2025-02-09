import Link from 'next/link';
import { SingleProject } from './SingleProject';
import { PROJECTS } from '@/utils/consts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const Projects = () => {
  return (
    <div className='flex w-full flex-col rounded-3xl bg-white p-6 shadow-lg dark:border dark:border-slate-800 dark:bg-slate-900'>
      <div className='mb-6 flex w-full flex-row items-center justify-between text-slate-950 dark:text-zinc-300'>
        <h2 className='text-2xl font-semibold dark:text-zinc-100'>Projects</h2>
        <Link
          href={'/projects'}
          className='hidden flex-row items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-700 hover:text-white md:flex dark:border-slate-600 dark:text-zinc-300 dark:hover:bg-slate-950'
        >
          All projects <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>
      <div className='mx-auto flex w-full flex-col gap-5 sm:flex-row sm:justify-center md:gap-8'>
        {PROJECTS.slice(0, 2).map((project) => (
          <SingleProject project={project} key={project.name} />
        ))}
      </div>
      <Link
        href={'/projects'}
        className='mt-6 flex flex-row items-center gap-2 self-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 sm:text-base md:hidden'
      >
        All projects <ArrowRightIcon className='h-4 w-4' />
      </Link>
    </div>
  );
};
