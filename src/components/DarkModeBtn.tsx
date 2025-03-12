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
          <span>{theme === 'light' ? 'Dark' : 'Light'}&nbsp;Mode</span>
        </div>
      </button>
    </>
  );
}
