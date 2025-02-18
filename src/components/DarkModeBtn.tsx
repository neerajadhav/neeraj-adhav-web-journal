'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className='fixed left-0 top-0 z-[60] hidden h-full w-full items-center justify-center bg-white text-2xl font-bold text-black dark:print:flex'>
        Print the document in light mode
      </div>
      <button
        aria-label='Toggle Dark Mode'
        type='button'
        onClick={toggleTheme}
        className={`relative rounded-full border bg-white p-2 shadow-sm hover:bg-white dark:border-0 dark:bg-transparent dark:text-gray-400 dark:hover:bg-gray-50/10 lg:rounded-lg lg:px-3 lg:py-2 lg:shadow-none print:hidden`}
      >
        <div className='flex items-center gap-2 lg:text-sm'>
          <span className='flex items-center justify-center'>
            {theme === 'light' ? (
              <FaMoon className='h-4 w-4' />
            ) : (
              <FaSun className='h-4 w-4' />
            )}
          </span>
          <span className='hidden lg:block'>
            {theme === 'light' ? 'Night' : 'Day'}
          </span>
        </div>
      </button>
    </>
  );
}
