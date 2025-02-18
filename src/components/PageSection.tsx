import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface PageSectionProps {
  title: string;
  children: ReactNode;
  link?: {
    href: string;
    text: string;
    icon?: ReactNode;
  };
  extraButtons?: ReactNode;
  isBlogArticle?: Boolean;
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  children,
  link,
  extraButtons,
  isBlogArticle,
}) => {
  return (
    <section className='flex flex-col items-start bg-white text-gray-950 dark:border dark:border-t-0 dark:border-gray-800 dark:bg-gray-900/80 dark:text-zinc-300 lg:border-x'>
      <div className='sticky top-[-0.1px] z-30 flex w-full select-none flex-row items-center justify-between gap-3 border-y bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 print:hidden'>
        {isBlogArticle && (
          <Link href='/blog'>
            <button className='rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-950'>
              <ArrowLeftIcon className='h-5 w-5' />
            </button>
          </Link>
        )}

        <div className='font-semibold dark:text-zinc-100'>
          <h2 className='line-clamp-1'>{title}</h2>
        </div>
        {link && (
          <Link
            href={link.href}
            className='flex items-center gap-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:text-blue-500 dark:border-gray-600 dark:text-zinc-300 md:flex'
          >
            {link.text} {link.icon ?? <ArrowRightIcon className='h-4 w-4' />}
          </Link>
        )}
        {extraButtons}
      </div>
      <div className='mx-auto w-full p-4'>{children}</div>
    </section>
  );
};

export default PageSection;
