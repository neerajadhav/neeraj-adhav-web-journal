'use client';
import { SingleBlog } from './SingleBlog';
import Link from 'next/link';
import { usePublicationQuery } from '../../generated/graphq';
import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const Blogs = () => {
  const { data } = usePublicationQuery({
    host,
  });

  if (!data || !data.publication) return null;
  const posts = data.publication.posts.edges;

  return (
    <div className='flex min-h-80 w-full flex-col items-start border bg-white p-6 text-slate-950 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
      <div className='mb-6 flex w-full flex-row items-center justify-between'>
        <h2 className='text-xl font-semibold dark:text-zinc-100'>Blogs</h2>
        <Link
          href={'/blog'}
          className='hidden flex-row items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-700 hover:text-white md:flex dark:border-slate-600 dark:text-zinc-300 dark:hover:bg-slate-950'
        >
          Visit My Blog <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>
      {posts.length > 0 && (
        <div className='flex w-full flex-col gap-5 sm:flex-row sm:justify-center md:gap-8'>
          {posts.map((edge) => (
            <SingleBlog blogInfo={edge.node} key={edge.node.id} />
          ))}
        </div>
      )}
      {posts.length === 0 && (
        <p className='flex w-full flex-1 items-center justify-center gap-3 text-lg font-semibold'>
          <ExclamationTriangleIcon className='h-8 w-8' />
          No posts found
        </p>
      )}
      <Link
        href={'/blog'}
        className='mt-6 flex flex-row items-center gap-2 self-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 sm:text-base md:hidden'
      >
        All blogs <ArrowRightIcon className='h-4 w-4' />
      </Link>
    </div>
  );
};
