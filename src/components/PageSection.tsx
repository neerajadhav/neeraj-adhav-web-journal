import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

interface PageSectionProps {
  title: string;
  children: ReactNode;
  link?: {
    href: string;
    text: string;
    icon?: ReactNode;
  };
  button?: {
    href: string;
    text: string;
    icon?: ReactNode;
    className?: string;
  };
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  children,
  link,
  button,
}) => {
  return (
    <section className='flex flex-col items-start border bg-white text-slate-950 dark:border dark:border-slate-800 dark:bg-slate-900/80 dark:text-zinc-300'>
      <div className='flex w-full flex-row items-center justify-between border-b px-4 py-3 lg:py-4 dark:border-slate-800'>
        <h2 className='font-semibold dark:text-zinc-100'>{title}</h2>
        {link && (
          <Link
            href={link.href}
            target='_blank'
            className='hidden flex-row items-center gap-2 rounded-full text-sm font-medium text-slate-700 transition-all hover:text-blue-500 md:flex dark:border-slate-600 dark:text-zinc-300'
          >
            {link.text} {link.icon ?? <ArrowRightIcon className='h-4 w-4' />}
          </Link>
        )}
      </div>
      <div className='p-4 mx-auto'>{children}</div>
      {button && (
        <Link
          href={button.href}
          target='_blank'
          className={`mb-4 flex flex-row items-center gap-2 self-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 sm:text-base md:hidden ${
            button.className || ''
          }`}
        >
          {button.text} {button.icon ?? <ArrowRightIcon className='h-4 w-4' />}
        </Link>
      )}
    </section>
  );
};

export default PageSection;
