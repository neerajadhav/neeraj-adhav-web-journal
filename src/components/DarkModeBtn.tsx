'use client';

import { useTheme } from 'next-themes';
import { CgDarkMode } from 'react-icons/cg';

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
              <CgDarkMode className='h-5 w-5' />
            ) : (
              <CgDarkMode className='h-5 w-5' />
            )}
          </span>
          <span>{theme === 'light' ? 'Night' : 'Day'}</span>
        </div>
      </button>
    </>
  );
}
