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
}

const PageSection: React.FC<PageSectionProps> = ({ title, children, link }) => {
  return (
    <section className='flex flex-col items-start border bg-white text-gray-950 dark:border dark:border-gray-800 dark:bg-gray-900/80 dark:text-zinc-300'>
      <div className='sticky top-0 lg:top-[63px] z-40 flex w-full flex-row items-center justify-between border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900'>
        <h2 className='font-semibold dark:text-zinc-100'>{title}</h2>
        {link && (
          <Link
            href={link.href}
            className='flex items-center gap-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:text-blue-500 md:flex dark:border-gray-600 dark:text-zinc-300'
          >
            {link.text} {link.icon ?? <ArrowRightIcon className='h-4 w-4' />}
          </Link>
        )}
      </div>
      <div className='mx-auto p-4'>{children}</div>
    </section>
  );
};

export default PageSection;
